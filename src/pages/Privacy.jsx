import React from "react";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";

export default function Privacy() {
  const { t, dir } = useLang();

  const collected = [
    t("privacy.collect.1"),
    t("privacy.collect.2"),
    t("privacy.collect.3"),
  ];
  const notCollected = [
    t("privacy.not_collect.1"),
    t("privacy.not_collect.2"),
    t("privacy.not_collect.3"),
    t("privacy.not_collect.4"),
    t("privacy.not_collect.5"),
    t("privacy.not_collect.6"),
  ];
  const thirdParty = [
    ["Mailchimp", t("privacy.third_party.mailchimp")],
    ["Plausible Analytics", t("privacy.third_party.plausible")],
    ["Open Food Facts API", t("privacy.third_party.openfood")],
    ["Noon Iraq Database", t("privacy.third_party.noon")],
    ["ChatGPT API", t("privacy.third_party.chatgpt")],
  ];
  const rights = [
    t("privacy.rights.1"),
    t("privacy.rights.2"),
    t("privacy.rights.3"),
  ];
  const retention = [
    t("privacy.retention.1"),
    t("privacy.retention.2"),
    t("privacy.retention.3"),
  ];

  function Section({ title, children, testId }) {
    return (
      <Reveal>
        <section data-testid={testId} className="mt-10">
          <h2 className="font-display font-bold text-2xl text-moss-light mb-4">{title}</h2>
          <div className="text-ink/85 leading-relaxed text-sm space-y-3">{children}</div>
        </section>
      </Reveal>
    );
  }

  function List({ items, testId }) {
    return (
      <ul data-testid={testId} className={`space-y-2 list-disc marker:text-moss-light ${dir === 'rtl' ? 'pr-5' : 'pl-5'}`}>
        {items.map((it) => (
          <li key={it} className="text-ink/85">{it}</li>
        ))}
      </ul>
    );
  }

  return (
    <main data-testid="privacy-page" dir={dir} className={`pt-32 pb-20 max-w-4xl mx-auto px-5 sm:px-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <Reveal>
        <p className="eyebrow mb-3">{t("footerColLegal")}</p>
        <h1 className="section-header">{t("privacy.title")}</h1>
        <p className="text-ink-dim mt-3 font-mono text-sm">{t("privacy.effective")}</p>
      </Reveal>

      <Section title={t("privacy.collect.title")} testId="privacy-collect">
        <List items={collected} />
      </Section>

      <Section title={t("privacy.not_collect.title")} testId="privacy-not-collect">
        <List items={notCollected} />
      </Section>

      <Section title={t("privacy.third_party.title")} testId="privacy-third-party">
        <ul className="space-y-2.5">
          {thirdParty.map(([n, d]) => (
            <li key={n} className="glass rounded-xl p-3.5 flex items-start justify-between gap-4">
              <span className="font-display font-semibold text-moss-light">{n}</span>
              <span className="text-ink-dim text-sm text-right">{d}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={t("privacy.ai.title")} testId="privacy-ai">
        <div className={`notice-amber p-5 ${dir === 'rtl' ? 'rounded-l-xl' : 'rounded-r-xl'}`}>
          <p>
            {t("privacy.ai.desc")}
          </p>
        </div>
      </Section>

      <Section title={t("privacy.rights.title")} testId="privacy-rights">
        <List items={rights} />
      </Section>

      <Section title={t("privacy.retention.title")} testId="privacy-retention">
        <List items={retention} />
      </Section>

      <Section title={t("privacy.constitution.title")} testId="privacy-constitution">
        <p>
          {t("privacy.constitution.desc")}
        </p>
      </Section>

      <Section title={t("privacy.contact.title")} testId="privacy-contact">
        <p>
          {t("privacy.contact.desc")} <a href="/report" className="text-moss-light underline-offset-4 hover:underline">{t("privacy.contact.link")}</a> {t("privacy.contact.suffix")}
        </p>
      </Section>
    </main>
  );
}
