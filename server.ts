// @ts-nocheck
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import { parse } from "csv-parse/sync";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// --- Load CSV Data ---
let products = [];
let productsKu = {};
try {
  const csvData = fs.readFileSync(
    path.join(__dirname, "data/products.csv"),
    "utf-8",
  );
  const records = parse(csvData, { columns: true, skip_empty_lines: true });
  
  try {
    const kuData = fs.readFileSync(path.join(__dirname, "data/products_ku.json"), "utf-8");
    productsKu = JSON.parse(kuData);
  } catch (e) {
    console.warn("Could not load products_ku.json, continuing without translations.");
  }

  const deriveFlagLevel = (rating) => {
    const r = (rating || "").toUpperCase().trim();
    if (r === "SAFE") return "LOW";
    if (r === "CAUTION") return "MODERATE";
    if (r === "AVOID") return "HIGH";
    return "MODERATE";
  };
  const isAi = (source) => (source || "").toUpperCase().includes("ESTIMATED");
  const isVerified = (source) =>
    (source || "").toUpperCase().includes("VERIFIED");
  const parseScore = (raw) => parseInt(parseFloat(raw || 0)) || 0;
  const cleanStr = (value) => (value || "").trim();
  const parseIngredients = (raw) => {
    if (
      !raw ||
      ["none", "nan", "none identified", ""].includes(
        String(raw).trim().toLowerCase(),
      )
    )
      return [];
    return String(raw)
      .replace(/\n/g, ";")
      .split(";")
      .map((p) => p.trim())
      .filter((p) => p);
  };

  let dummyId = 1;
  products = records
    .map((row) => {
      if (!cleanStr(row.product_name)) return null;
      const rating = cleanStr(row.rating).toUpperCase();
      const source = cleanStr(row.data_source);
      return {
        id: "prod-" + dummyId++,
        original_name: cleanStr(row.product_name),
        product_name: cleanStr(row.product_name),
        brand: cleanStr(row.brand),
        category: cleanStr(row.category),
        safety_score: parseScore(row.safety_score),
        rating: rating,
        flag_level: deriveFlagLevel(rating),
        concerning_ingredients: parseIngredients(row.concerning_ingredients),
        safe_ingredients: parseIngredients(row.safe_ingredients),
        data_source: source,
        is_ai_estimated: isAi(source),
        is_database_verified: isVerified(source),
        summary: cleanStr(row.summary),
        recommendation: cleanStr(row.recommendation),
        safer_alternative: cleanStr(row.safer_alternative),
        date_analyzed: cleanStr(row.date_analyzed),
        image_url: cleanStr(row.image_url) || null,
      };
    })
    .filter(Boolean);
  console.log(`Loaded ${products.length} products from CSV`);
} catch (e) {
  console.error("Error loading products CSV", e);
}

const getLocalizedProducts = (lang) => {
  if (lang !== "ku") return products;
  return products.map(p => {
    const info = productsKu[p.original_name];
    if (!info) return p;
    return {
      ...p,
      product_name: info.product_name_ku || p.product_name,
      brand: info.brand_ku || p.brand,
      concerning_ingredients: info.concerning_ku?.length ? info.concerning_ku : p.concerning_ingredients,
      safe_ingredients: info.safe_ku?.length ? info.safe_ku : p.safe_ingredients,
      summary: info.summary_ku || p.summary,
      recommendation: info.rec_ku || p.recommendation,
      safer_alternative: info.alt_ku || p.safer_alternative
    };
  });
};

// --- API Routes ---
const api = express.Router();

api.get("/products", (req, res) => {
  const { category, flag_level, search, sort = "highest", lang } = req.query;
  let result = [...getLocalizedProducts(lang)];

  if (category && category !== "all" && category !== "All") {
    result = result.filter(
      (p) => p.category.toLowerCase() === String(category).toLowerCase(),
    );
  }
  if (
    flag_level &&
    ["LOW", "MODERATE", "HIGH"].includes(String(flag_level).toUpperCase())
  ) {
    result = result.filter(
      (p) => p.flag_level === String(flag_level).toUpperCase(),
    );
  }
  if (search) {
    const term = String(search).toLowerCase();
    result = result.filter(
      (p) =>
        p.product_name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term),
    );
  }

  let sortField = "safety_score";
  let sortOrder = -1;
  if (sort === "lowest") {
    sortField = "safety_score";
    sortOrder = 1;
  } else if (sort === "category") {
    sortField = "category";
    sortOrder = 1;
  } else if (sort === "recent") {
    sortField = "date_analyzed";
    sortOrder = -1;
  }

  result.sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1 * sortOrder;
    if (a[sortField] > b[sortField]) return 1 * sortOrder;
    return 0;
  });

  res.json(result.slice(0, 500));
});

api.get("/products/stats", (req, res) => {
  const categories = [
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ].sort();
  const low = products.filter((p) => p.flag_level === "LOW").length;
  const mod = products.filter((p) => p.flag_level === "MODERATE").length;
  const high = products.filter((p) => p.flag_level === "HIGH").length;

  res.json({
    total: products.length,
    categories,
    low_flags: low,
    moderate_flags: mod,
    high_flags: high,
  });
});

api.get("/products/:id", (req, res) => {
  const { lang } = req.query;
  const productsList = getLocalizedProducts(lang);
  const prod = productsList.find((p) => p.id === req.params.id);
  if (!prod) return res.status(404).json({ detail: "Product not found" });
  res.json(prod);
});

api.post("/subscribe", (req, res) => {
  res.json({
    id: "sub-1",
    email: req.body.email,
    source: req.body.source || "homepage",
    created_at: new Date().toISOString(),
  });
});

api.post("/corrections", (req, res) => {
  res.json({
    id: "corr-1",
    ...req.body,
    status: "Pending Review",
    created_at: new Date().toISOString(),
  });
});

app.use("/api", api);

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Note: The template doesn't specify a unified build script for production Express serving
    // but we can provide basic static serving
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
