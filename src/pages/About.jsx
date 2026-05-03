import React from "react";
import { LockOpen, FileText, Shield, Check, X } from "lucide-react";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";

export default function About() {
  const { t } = useLang();

  const VALUES = [
    { icon: LockOpen, title: t("about.v1.title"), text: t("about.v1.text") },
    { icon: FileText, title: t("about.v2.title"), text: t("about.v2.text") },
    { icon: Shield, title: t("about.v3.title"), text: t("about.v3.text") },
  ];

  const LAWS = [
    {
      title: t("about.l1.title"),
      text: t("about.l1.text"),
    },
    {
      title: t("about.l2.title"),
      text: t("about.l2.text"),
    },
    {
      title: t("about.l3.title"),
      text: t("about.l3.text"),
    },
    {
      title: t("about.l4.title"),
      text: t("about.l4.text"),
    },
  ];

  const COMPARE = [
    [t("about.c1.f"), t("about.c1.h"), t("about.c1.o")],
    [t("about.c2.f"), t("about.c2.h"), t("about.c2.o")],
    [t("about.c3.f"), t("about.c3.h"), t("about.c3.o")],
    [t("about.c4.f"), t("about.c4.h"), t("about.c4.o")],
    [t("about.c5.f"), t("about.c5.h"), t("about.c5.o")],
    [t("about.c6.f"), t("about.c6.h"), t("about.c6.o")],
    [t("about.c7.f"), t("about.c7.h"), t("about.c7.o")],
    [t("about.c8.f"), t("about.c8.h"), t("about.c8.o")],
  ];

  return (
    <main data-testid="about-page" className="pt-32 pb-20 max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <p className="eyebrow mb-3">{t("about.story_eyebrow")}</p>
        <h1 className="section-header">{t("about.title")}</h1>
        <p className="text-ink-dim mt-4 max-w-2xl">
          {t("about.subtitle")}
        </p>
      </Reveal>

      <Reveal>
        <p className="mt-12 text-xl sm:text-2xl text-ink/90 leading-relaxed max-w-4xl font-display font-medium">
          {t("about.story_text")}
        </p>
      </Reveal>

      <Reveal>
        <div data-testid="mission-card" className="mt-14 glass-strong glow-border glow-border-active rounded-3xl p-10 sm:p-14 text-center max-w-3xl">
          <p className="eyebrow mb-3">{t("about.mission")}</p>
          <p className="font-display text-2xl sm:text-3xl leading-snug text-glow">
            {t("about.mission_main")}
            <br />
            <span className="text-moss-light">{t("about.mission_sub")}</span>
          </p>
        </div>
      </Reveal>

      <section className="mt-20" data-testid="values-section">
        <Reveal>
          <h2 className="section-header">{t("about.values_title")}</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <article className="glass glow-border rounded-2xl p-7 h-full" data-testid={`value-card-${i}`}>
                <div className="w-14 h-14 rounded-2xl bg-moss/10 border border-moss/30 grid place-items-center mb-4">
                  <v.icon className="text-moss-light" size={22} />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-ink-dim leading-relaxed">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20" data-testid="legal-section">
        <Reveal>
          <p className="eyebrow mb-3">{t("about.legal_eyebrow")}</p>
          <h2 className="section-header">{t("about.legal_title")}</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {LAWS.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}>
              <article className="glass rounded-2xl p-7" data-testid={`law-card-${i}`}>
                <h3 className="font-display font-bold text-lg text-moss-light">{l.title}</h3>
                <p className="text-sm text-ink-dim mt-3 leading-relaxed">{l.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div data-testid="academic-card" className="mt-16 glass rounded-2xl p-8">
          <p className="eyebrow mb-2">{t("about.academic_eyebrow")}</p>
          <p className="text-ink/85 leading-relaxed max-w-4xl">
            {t("about.academic_text")}
          </p>
        </div>
      </Reveal>

      <section className="mt-20" data-testid="comparison-section">
        <Reveal>
          <h2 className="section-header">{t("about.compare_title")}</h2>
        </Reveal>
        <Reveal>
          <div className="mt-10 glass rounded-2xl p-2 overflow-x-auto">
            <table className="comp-table w-full min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left text-ink-dim eyebrow">{t("about.compare_feature")}</th>
                  <th className="text-left text-moss-light eyebrow">{t("about.compare_heja")}</th>
                  <th className="text-left text-ink-dim eyebrow">{t("about.compare_other")}</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row[0]} data-testid={`compare-row-${i}`}>
                    <td className="text-ink/85 font-medium">{row[0]}</td>
                    <td className="text-ink/90"><Check className="check inline mr-2" size={14} />{row[1]}</td>
                    <td className="text-ink-dim"><X className="cross inline mr-2" size={14} />{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <div data-testid="important-statement" className="mt-16 notice-amber rounded-r-xl p-7 max-w-4xl">
          <p className="text-ink/90 leading-relaxed">
            {t("about.important_statement")} <strong>{t("about.you_decide")}</strong>
          </p>
        </div>
      </Reveal>
    </main>
  );
}
