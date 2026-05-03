import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { submitCorrection } from "../lib/api";
import { useLang } from "../context/LangContext";

function extractErrorMessage(err) {
  const detail = err?.response?.data?.detail;
  if (!detail) return "Could not submit. Please try again.";
  if (typeof detail === "string") return detail;
  return "Submission failed.";
}

export default function Report() {
  const { t, dir } = useLang();
  
  const NATURE_OPTIONS = [
    t("report.nature_1"),
    t("report.nature_2"),
    t("report.nature_3"),
    t("report.nature_4"),
    t("report.nature_5"),
  ];

  const [form, setForm] = useState({
    product_name: "",
    brand_name: "",
    nature: "",
    description: "",
    contact_email: "",
  });
  const [state, setState] = useState({ status: "idle", msg: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.product_name.trim() || !form.brand_name.trim() || !form.nature || !form.description.trim()) {
      setState({ status: "error", msg: "Please complete all required fields." });
      return;
    }
    if (form.description.trim().length < 20) {
      setState({ status: "error", msg: "Description must be at least 20 characters." });
      return;
    }
    setState({ status: "loading" });
    try {
      const payload = { ...form };
      if (!payload.contact_email) delete payload.contact_email;
      await submitCorrection(payload);
      setState({ status: "success" });
      setForm({ product_name: "", brand_name: "", nature: "", description: "", contact_email: "" });
    } catch (err) {
      setState({ status: "error", msg: extractErrorMessage(err) });
    }
  };

  return (
    <main data-testid="report-page" className="pt-32 pb-20 max-w-4xl mx-auto px-5 sm:px-8">
      <Reveal>
        <p className="eyebrow mb-3">{t("footerColLegal")}</p>
        <h1 className="section-header">{t("report.title")}</h1>
        <p className="text-ink-dim mt-4 max-w-2xl">
          {t("report.subtitle")}
        </p>
      </Reveal>

      <Reveal>
        <div data-testid="report-explanation" className="notice-amber rounded-r-xl p-6 mt-10">
          <p className="text-sm text-ink/90 leading-relaxed">
            {t("report.explanation_1")}
            <br /><br />
            {t("report.explanation_2")}
            <br /><br />
            {t("report.explanation_3")}
          </p>
        </div>
      </Reveal>

      {state.status === "success" ? (
        <Reveal>
          <div
            data-testid="report-success"
            className="mt-12 glass-strong glow-border glow-border-active rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-moss/15 border border-moss/40 grid place-items-center mb-5 animate-pulse-glow">
              <CheckCircle2 size={36} className="text-moss-light" />
            </div>
            <h2 className="section-header !text-3xl">{t("report.success")}</h2>
            <p className="text-ink-dim mt-4 max-w-xl mx-auto">
              {t("report.success_desc")}
            </p>
            <button
              onClick={() => setState({ status: "idle", msg: "" })}
              data-testid="report-success-reset"
              className="btn-ghost mt-7"
            >
              {t("report.submit_another")}
            </button>
          </div>
        </Reveal>
      ) : (
        <Reveal>
          <form
            data-testid="report-form"
            onSubmit={submit}
            className="mt-10 glass rounded-2xl p-7 sm:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm text-ink-dim mb-2 block">{t("report.form.product_name")}</label>
                <input
                  data-testid="report-product-name"
                  className="heja-input"
                  required
                  value={form.product_name}
                  onChange={update("product_name")}
                />
              </div>
              <div>
                <label className="text-sm text-ink-dim mb-2 block">{t("report.form.brand_name")}</label>
                <input
                  data-testid="report-brand-name"
                  className="heja-input"
                  required
                  value={form.brand_name}
                  onChange={update("brand_name")}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-ink-dim mb-2 block">{t("report.form.nature")}</label>
              <select
                data-testid="report-nature"
                className="heja-input cursor-pointer"
                required
                value={form.nature}
                onChange={update("nature")}
              >
                <option value="">{t("report.form.nature_select")}</option>
                {NATURE_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-ink-dim mb-2 block">
                {t("report.form.desc")} <span className="text-ink-dim">{t("report.form.desc_min")}</span>
              </label>
              <textarea
                data-testid="report-description"
                className="heja-input min-h-[140px] resize-y"
                required
                minLength={20}
                value={form.description}
                onChange={update("description")}
                placeholder={t("report.form.desc_placeholder")}
              />
            </div>

            <div>
              <label className="text-sm text-ink-dim mb-2 block">{t("report.form.email")}</label>
              <input
                data-testid="report-email"
                type="email"
                className="heja-input"
                value={form.contact_email}
                onChange={update("contact_email")}
                placeholder="you@example.com"
              />
            </div>

            {state.status === "error" && (
              <div data-testid="report-error" className="notice-red rounded-r-md p-3 flex items-center gap-2 text-sm text-ink/90">
                <AlertCircle size={16} className="text-crimson-flag" /> {state.msg}
              </div>
            )}

            <button
              type="submit"
              data-testid="report-submit-btn"
              disabled={state.status === "loading"}
              className="btn-primary disabled:opacity-60"
            >
              {state.status === "loading" ? t("report.form.submitting") : t("report.form.submit")}
            </button>
          </form>
        </Reveal>
      )}

      <Reveal>
        <p data-testid="report-legal" className="mt-10 text-xs text-ink-dim leading-relaxed max-w-3xl">
          {t("report.legal_1")}
          <br /><br />
          {t("report.legal_2")}
        </p>
      </Reveal>
    </main>
  );
}
