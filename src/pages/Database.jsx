import React, { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import ProductDetail from "../components/ProductDetail";
import { fetchProducts, fetchStats } from "../lib/api";
import { useLang } from "../context/LangContext";

const FLAG_FILTERS = [
  { key: "all", labelKey: "dbFilterAll", flag: null },
  { key: "low", labelKey: "dbFilterLow", flag: "LOW" },
  { key: "moderate", labelKey: "dbFilterMod", flag: "MODERATE" },
  { key: "high", labelKey: "dbFilterHigh", flag: "HIGH" },
];

const SORT_OPTIONS = [
  { value: "highest", labelKey: "dbSortHighest" },
  { value: "lowest", labelKey: "dbSortLowest" },
  { value: "category", labelKey: "dbSortCategory" },
  { value: "recent", labelKey: "dbSortRecent" },
];

export default function Database() {
  const { t, lang } = useLang();
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({ total: 0, categories: [] });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [flagKey, setFlagKey] = useState("all");
  const [sort, setSort] = useState("highest");
  const [active, setActive] = useState(null);

  useEffect(() => {
    let cancel = false;
    fetchStats()
      .then((s) => !cancel && setStats(s))
      .catch(() => {});
    return () => {
      cancel = true;
    };
  }, [lang]);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    const flag = FLAG_FILTERS.find((f) => f.key === flagKey)?.flag || undefined;
    fetchProducts({
      search: search || undefined,
      category: category !== "all" ? category : undefined,
      flag_level: flag,
      sort,
    })
      .then((data) => {
         if (!cancel) {
           setProducts(data);
           // if detail view is open, refresh it
           if (active) {
             const updated = data.find((p) => p.id === active.id);
             if (updated) setActive(updated);
           }
         }
      })
      .catch(() => !cancel && setProducts([]))
      .finally(() => !cancel && setLoading(false));
    return () => {
      cancel = true;
    };
  }, [search, category, flagKey, sort, lang]);

  const allFilters = useMemo(() => {
    const cats = stats.categories || [];
    return [
      { key: "all", labelKey: "dbFilterAll", value: "all", isAll: true },
      ...cats.map((c) => ({ key: c, value: c, rawLabel: c, isAll: false })),
    ];
  }, [stats]);

  const totalCount = stats.total || 91;
  const countStr = String(totalCount);
  const subtitle = t("dbSubtitle").replace("{count}", countStr);
  const placeholder = t("dbSearchPlaceholder").replace("{count}", countStr);

  return (
    <main data-testid="database-page" className="pt-32 pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <Reveal>
        <p className="eyebrow mb-3">{t("dbEyebrow")}</p>
        <h1 className="section-header">{t("dbTitle")}</h1>
        <p className="text-ink-dim mt-4 max-w-2xl">{subtitle}</p>
      </Reveal>

      {/* Notice */}
      <Reveal>
        <div className="notice-amber rounded-r-xl p-5 mt-8" data-testid="database-notice">
          <p className="text-sm text-ink/90 leading-relaxed">{t("dbNotice")}</p>
        </div>
      </Reveal>

      {/* Search + Sort */}
      <div className="mt-10 grid lg:grid-cols-3 gap-4 items-start">
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-dim" size={16} />
          <input
            data-testid="database-search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="heja-input !pl-12"
          />
        </div>
        <div className="relative">
          <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-dim" size={16} />
          <select
            data-testid="database-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="heja-input !pl-12 appearance-none cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills */}
      <div className="mt-5 flex flex-wrap gap-2" data-testid="category-filters">
        {allFilters.map((f) => {
          const label = f.isAll ? t("dbFilterAll") : (t(`category.${f.rawLabel}`) || f.rawLabel);
          return (
            <button
              key={f.key}
              data-testid={`category-pill-${String(f.key).toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setCategory(f.value)}
              className={`pill ${category === f.value ? "pill-active" : ""}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Flag pills */}
      <div className="mt-3 flex flex-wrap gap-2" data-testid="flag-filters">
        {FLAG_FILTERS.map((f) => (
          <button
            key={f.key}
            data-testid={`flag-pill-${f.key}`}
            onClick={() => setFlagKey(f.key)}
            className={`pill ${flagKey === f.key ? "pill-active" : ""}`}
          >
            {t(f.labelKey)}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="mt-6 text-sm text-ink-dim font-mono" data-testid="results-count">
        {t("dbShowingPrefix")} {products.length}{" "}
        {products.length === 1 ? t("dbProductSingular") : t("dbProductPlural")}
        {search ? ` ${t("dbMatching")} "${search}"` : ""}
      </p>

      {/* Grid */}
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="products-grid">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`sk-${i}`}
                className="glass rounded-2xl p-6 h-[300px] animate-pulse"
                data-testid={`product-skeleton-${i}`}
              />
            ))
          : products.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setActive} />
            ))}
      </div>

      {!loading && products.length === 0 && (
        <div data-testid="empty-state" className="glass rounded-2xl p-12 text-center mt-6">
          <p className="text-ink-dim">{t("dbEmpty")}</p>
        </div>
      )}

      <ProductDetail product={active} onClose={() => setActive(null)} />
    </main>
  );
}
