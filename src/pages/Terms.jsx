import React from "react";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";

function Section({ title, testId, children }) {
  return (
    <Reveal>
      <section data-testid={testId} className="mt-10">
        <h2 className="font-display font-bold text-2xl text-moss-light mb-4">{title}</h2>
        <div className="text-ink/85 leading-relaxed text-sm space-y-3">{children}</div>
      </section>
    </Reveal>
  );
}

export default function Terms() {
  const { t, dir } = useLang();

  return (
    <main data-testid="terms-page" dir={dir} className={`pt-32 pb-20 max-w-4xl mx-auto px-5 sm:px-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <Reveal>
        <p className="eyebrow mb-3">{t("footerColLegal")}</p>
        <h1 className="section-header">{t("terms.title")}</h1>
        <p className="text-ink-dim mt-3 font-mono text-sm">{t("terms.date")}</p>
      </Reveal>

      <Section title={t("terms.nature.title")} testId="terms-nature">
        <p>
          {t("terms.nature.desc")}
        </p>
      </Section>

      <Reveal>
        <div data-testid="terms-educational-notice" className={`notice-red p-7 mt-12 ${dir === 'rtl' ? 'rounded-l-xl' : 'rounded-r-xl'}`}>
          <p className="font-mono text-xs uppercase tracking-widest text-crimson-flag mb-3">{t("terms.educational.title")}</p>
          <p className="font-display font-bold text-xl mb-3 leading-snug text-ink">
            {t("terms.educational.h1")}
          </p>
          <p className="text-sm text-ink/90 leading-relaxed">
            {t("terms.educational.p1")}
            <br /><br />
            <strong>{t("terms.educational.p2")}</strong>
          </p>
        </div>
      </Reveal>

      <Section title={t("terms.warranty.title")} testId="terms-warranty">
        <p>
          {t("terms.warranty.desc")}
        </p>
      </Section>

      <Section title={t("terms.liability.title")} testId="terms-liability">
        <p>
          {t("terms.liability.desc")}
        </p>
      </Section>

      <Section title={t("terms.not_reg.title")} testId="terms-not-regulatory">
        <p>
          {t("terms.not_reg.p1")}
        </p>
        <p>
          {t("terms.not_reg.p2")}
        </p>
      </Section>

      <Section title={t("terms.legal.title")} testId="terms-legal-framework">
        <ul className="space-y-3">
          <li>
            <strong className="text-ink">{t("about.l1.title")}:</strong> {t("about.l1.text")}
          </li>
          <li>
            <strong className="text-ink">{t("about.l2.title")}:</strong> {t("about.l2.text")}
          </li>
          <li>
            <strong className="text-ink">{t("about.l3.title")}:</strong> {t("about.l3.text")}
          </li>
        </ul>
        <p>{t("terms.legal.desc")}</p>
      </Section>

      <Section title={t("terms.independent.title")} testId="terms-independent">
        <p>
          {t("terms.independent.desc")}
        </p>
      </Section>

      <Section title={t("terms.gov.title")} testId="terms-governing">
        <p>
          {t("terms.gov.desc")}
        </p>
      </Section>
    </main>
  );
}
