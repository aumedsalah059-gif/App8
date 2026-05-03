import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function NotFound() {
  const { t, dir } = useLang();
  return (
    <main data-testid="not-found-page" className={`pt-40 pb-20 min-h-[80vh] grid place-items-center px-5 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <div className="text-center max-w-lg">
        <p className="counter-num">404</p>
        <h1 className="font-display font-bold text-3xl mt-3">{t("nfTitle") || "Page not found"}</h1>
        <p className="text-ink-dim mt-3">{t("nfSub") || "The page you're looking for has moved or never existed."}</p>
        <Link to="/" data-testid="not-found-home-btn" className="btn-primary mt-7 inline-block">
          {t("nfBtn") || "Back to home"}
        </Link>
      </div>
    </main>
  );
}
