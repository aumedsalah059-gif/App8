import React, { useState } from "react";
import { Plus, Cpu, Wifi, BookOpen } from "lucide-react";
import Reveal from "../components/Reveal";
import SourceIcon from "../components/SourceIcon";
import { SCIENTIFIC_SOURCES } from "../data/staticContent";
import { useLang } from "../context/LangContext";

export default function HowItWorks() {
  const [openIdx, setOpenIdx] = useState(0);
  const { t } = useLang();

  const FAQS = [
    {
      q: "Is Hêja really free?",
      a: "Yes. Always free. No premium tier ever. Health information should be accessible to every family regardless of income.",
    },
    {
      q: "How accurate is the Transparency Index?",
      a: "We use six international databases plus AI assistance. We cannot guarantee accuracy. All results should be verified independently. This is educational only.",
    },
    {
      q: "What products does Hêja cover?",
      a: "We focus on products sold in Kurdistan markets. We currently have 91 products in our database and add more regularly.",
    },
    {
      q: "Is Hêja affiliated with any government or brand?",
      a: "No. Hêja is an independent community research project with no affiliation to any brand, store, government body, or regulatory agency.",
    },
    {
      q: "What does AI-ESTIMATED mean?",
      a: "Some products were cross-referenced using ChatGPT AI assistance. These results may contain errors and are clearly labeled. Treat them with additional caution.",
    },
    {
      q: "Who built Hêja?",
      a: "A developer from Kurdistan. Built for our community. Not for profit.",
    },
    {
      q: "What is the Transparency Index?",
      a: "It is a mathematical score from 0 to 100 calculated by cross-referencing product ingredients against six international scientific databases. It is not a medical or regulatory determination.",
    },
  ];

  const SCORE_RANGES = [
    {
      range: "70 — 100",
      label: "LOW RESEARCH FLAGS",
      labelKey: "flagLowLabel",
      color: "score-low",
      pill: "flag-low",
      text: "Few or no ingredients appear in regulatory watchlists or research literature flagging safety concerns.",
    },
    {
      range: "40 — 69",
      label: "MODERATE RESEARCH FLAGS",
      labelKey: "flagModLabel",
      color: "score-mod",
      pill: "flag-mod",
      text: "Some ingredients appear in scientific literature discussing potential concerns. This does not mean the product is harmful.",
    },
    {
      range: "0 — 39",
      label: "HIGH RESEARCH FLAGS",
      labelKey: "flagHighLabel",
      color: "score-high",
      pill: "flag-high",
      text: "Multiple ingredients appear in regulatory databases or scientific literature flagging concerns. Read the cited research and consult a professional.",
    },
  ];

  return (
    <main data-testid="how-it-works-page" className="pt-32 pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <p className="eyebrow mb-3">{t("hiw.eyebrow")}</p>
        <h1 className="section-header">{t("hiw.title")}</h1>
        <p className="text-ink-dim mt-4 max-w-2xl">
          {t("hiw.subtitle")}
        </p>
      </Reveal>

      {/* Section 1 */}
      <Reveal>
        <div data-testid="what-is-heja-notice" className="notice-amber rounded-r-xl p-7 mt-12">
          <h2 className="font-display font-bold text-2xl mb-4">{t("hiw.what_is_title")}</h2>
          <div className="space-y-3 text-ink/85 text-sm leading-relaxed">
            <p><strong className="text-ink">{t("hiw.what_is.1")}</strong> {t("hiw.what_is.1_sub")}</p>
            <p>
              {t("hiw.what_is.2")}
            </p>
            <p>
              {t("hiw.what_is.3")}
            </p>
            <p>
              {t("hiw.what_is.4_1")} <strong>{t("hiw.what_is.4_2")}</strong> {t("hiw.what_is.4_3")}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Section 2 - Sources */}
      <section className="mt-20" data-testid="sources-section-hiw">
        <Reveal>
          <p className="eyebrow mb-3">{t("hiw.sources_eyebrow")}</p>
          <h2 className="section-header">{t("hiw.sources_title")}</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCIENTIFIC_SOURCES.map((s, i) => (
            <Reveal key={s.code} delay={i * 60}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="glass glow-border rounded-2xl p-6 block flex items-start gap-4"
                data-testid={`hiw-source-${s.code.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <SourceIcon code={s.code} size={52} />
                <div className="min-w-0">
                  <span className="font-mono text-moss-light text-xs tracking-wider">{s.code}</span>
                  <h3 className="font-display font-bold mt-1">{t(`source.${s.code}.name`) || s.name}</h3>
                  <p className="text-sm text-ink-dim mt-2 leading-relaxed">{t(`source.${s.code}.short`) || s.role}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 3 - Transparency Index */}
      <section className="mt-20" data-testid="transparency-index-section">
        <Reveal>
          <p className="eyebrow mb-3">{t("hiw.score_eyebrow")}</p>
          <h2 className="section-header">{t("hiw.score_title")}</h2>
        </Reveal>

        <Reveal>
          <div className="glass rounded-2xl p-7 mt-10">
            <div className="space-y-3 text-ink/85 leading-relaxed">
              <p>{t("hiw.score_desc.1")} <strong>{t("hiw.score_desc.bold")}</strong> {t("hiw.score_desc.2")}</p>
              <ul className="space-y-2 text-sm pl-5 list-disc marker:text-moss-light">
                <li>{t("hiw.score_li.1")}</li>
                <li>{t("hiw.score_li.2")}</li>
                <li>{t("hiw.score_li.3")}</li>
                <li>{t("hiw.score_li.4")}</li>
              </ul>
              <p>
                {t("hiw.score_footer")}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {SCORE_RANGES.map((r, i) => (
            <Reveal key={r.label} delay={i * 100}>
              <div data-testid={`score-range-${i}`} className="glass glow-border rounded-2xl p-7">
                <p className={`mega-number ${r.color}`} dir="ltr">{r.range}</p>
                <span className={`pill ${r.pill} mt-3 inline-block !uppercase`}>{t(r.labelKey)}</span>
                <p className="text-sm text-ink-dim mt-4 leading-relaxed">{t(`hiw.score_range_text_${i}`) || r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sections 4, 5, 6 - cards */}
      <div className="mt-20 grid lg:grid-cols-3 gap-6">
        <Reveal>
          <div className="glass rounded-2xl p-7 h-full">
            <BookOpen className="text-moss-light mb-4" size={26} />
            <h3 className="font-display font-bold text-xl mb-2">{t("hiw.card1.title")}</h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              {t("hiw.card1.text")}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="notice-amber rounded-r-xl p-6 h-full" data-testid="ai-disclosure-card">
            <Cpu className="text-amber-flag mb-4" size={26} />
            <h3 className="font-display font-bold text-xl mb-2">{t("hiw.card2.title")}</h3>
            <p className="text-sm text-ink/85 leading-relaxed">
              {t("hiw.card2.text")}
            </p>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="glass rounded-2xl p-7 h-full">
            <Wifi className="text-moss-light mb-4" size={26} />
            <h3 className="font-display font-bold text-xl mb-2">{t("hiw.card3.title")}</h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              {t("hiw.card3.text")}
            </p>
          </div>
        </Reveal>
      </div>

      {/* FAQ */}
      <section className="mt-20" data-testid="faq-section">
        <Reveal>
          <p className="eyebrow mb-3">{t("hiw.faq_eyebrow")}</p>
          <h2 className="section-header">{t("hiw.faq_title")}</h2>
        </Reveal>
        <div className="mt-10 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details
                open={openIdx === i}
                onToggle={(e) => e.target.open && setOpenIdx(i)}
                className="faq glass rounded-xl p-5 group"
                data-testid={`faq-${i}`}
              >
                <summary className="flex items-center justify-between gap-3">
                  <span className="font-display font-semibold text-base sm:text-lg">{t(`hiw.faq_${i}_q`) || f.q}</span>
                  <Plus size={18} className="faq-icon text-moss-light" />
                </summary>
                <p className="mt-3 text-sm text-ink-dim leading-relaxed">{t(`hiw.faq_${i}_a`) || f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
