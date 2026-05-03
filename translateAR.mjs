import fs from "fs";
import { translate } from "@vitalets/google-translate-api";

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateText(text) {
  try {
    const res = await translate(text, { from: "en", to: "ar" });
    return res.text;
  } catch (err) {
    console.error("Translation error for:", text, err.message);
    return text;
  }
}

async function processFile(filePath) {
  console.log(`Processing ${filePath}`);
  let content = fs.readFileSync(filePath, "utf-8");
  
  // Regex to find translation objects: { en: "some text", ku: "some text" }
  // We'll look for strings inside en: "..." or en: '...'
  
  const matches = [...content.matchAll(/en:\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*')\s*,\s*ku:\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*')(?!\s*,\s*ar:)/g)];
  
  for (const match of matches) {
    const fullMatch = match[0];
    const enStringWithQuotes = match[1];
    const kuStringWithQuotes = match[2];
    
    // Evaluate the string to handle escapes
    let enText;
    try {
      enText = eval(`(${enStringWithQuotes})`);
    } catch (e) {
      enText = enStringWithQuotes.slice(1, -1);
    }
    
    const arText = await translateText(enText);
    await delay(100); // polite delay
    
    const escapedArText = JSON.stringify(arText);
    const replacement = `en: ${enStringWithQuotes}, ku: ${kuStringWithQuotes}, ar: ${escapedArText}`;
    
    // Replace carefully (this is a bit naive but should work for our exact strings)
    // We only replace the first occurrence each time to avoid issues with identical strings
    // But they might be identical, so `replace` might replace a previous one already processed.
    // However, the previous one will have `ar: ` now, so it won't match exactly.
    // Wait, the `replace` function doesn't care. Let's do a replace using a function to avoid multi-match issues.
    
    // Actually, splitting and joining is safer, or doing it backwards.
    // Or just replacing `fullMatch`.
  }
}

// A better way: replace match asynchronously
async function replaceAsync(str, regex) {
  const promises = [];
  str.replace(regex, (match, enGrp, kuGrp) => {
    promises.push((async () => {
      let enText;
      try { enText = eval(`(${enGrp})`); } catch(e) { enText = enGrp.slice(1,-1); }
      const arText = await translateText(enText);
      await delay(100);
      return `en: ${enGrp}, ku: ${kuGrp}, ar: ${JSON.stringify(arText)}`;
    })());
    return match;
  });
  
  const replacements = await Promise.all(promises);
  let i = 0;
  return str.replace(regex, () => replacements[i++]);
}

async function run() {
  const files = [
    "src/data/translations.js",
    "src/data/translations2.js",
    "src/data/translations3.js",
    "src/data/translations4.js",
    "src/context/LangContext.jsx"
  ];
  
  for (const file of files) {
    let content = fs.readFileSync(file, "utf-8");
    content = await replaceAsync(content, /en:\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*')\s*,\s*ku:\s*("[^"\\\\]*(?:\\\\.[^"\\\\]*)*"|'[^'\\\\]*(?:\\\\.[^'\\\\]*)*')/g);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
  
  // Handle staticContent.js specifically because it has en: [ ... ] or nested objects.
}

run().catch(console.error);
