import React, { useState } from "react";
import { ArrowLeft, Calendar, X } from "lucide-react";
import Reveal from "../components/Reveal";
import { ARTICLES } from "../data/staticContent";
import { subscribeEmail } from "../lib/api";
import { useLang } from "../context/LangContext";

function ArticleModal({ article, onClose }) {
  const { t, lang, dir } = useLang();
  if (!article) return null;

  const tag = article.tag[lang] || article.tag.en;
  const title = article.title[lang] || article.title.en;
  const body = article.body[lang] || article.body.en;

  return (
    <div
      data-testid="article-modal"
      dir={dir}
      className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
      >
        <button
          onClick={onClose}
          aria-label={t("research.modal.close")}
          data-testid="article-modal-close"
          className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} p-2 rounded-full bg-bg-card/80 border border-ink-line hover:border-moss/50`}
        >
          <X size={16} />
        </button>
        <span className={`pill pill-active`}>{tag}</span>
        <h2 className="font-display font-bold text-3xl mt-4 leading-tight">{title}</h2>
        <div className="prose prose-invert mt-6 space-y-4">
          {body.map((p, i) => (
            <p key={`${article.id}-p-${i}`} className="text-ink/85 leading-relaxed">{p}</p>
          ))}
        </div>
        <p className={`mt-8 text-xs text-ink-dim notice-amber p-3 ${dir === 'rtl' ? 'rounded-l-md' : 'rounded-r-md'}`}>
          {t("research.modal.warning")}
        </p>
      </div>
    </div>
  );
}

export default function Research() {
  const { t, lang, dir } = useLang();
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", msg: "" });
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  const getStr = (obj) => obj[lang] || obj.en;

  const submit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setState({ status: "error", msg: t("research.email.invalid") });
      return;
    }
    setState({ status: "loading" });
    try {
      await subscribeEmail(email, "research_library");
      setState({ status: "success", msg: t("research.email.success") });
      setEmail("");
    } catch {
      setState({ status: "error", msg: t("research.email.error") });
    }
  };

  return (
    <main
      data-testid="research-page"
      dir={dir}
      className={`pt-32 pb-20 max-w-7xl mx-auto px-5 sm:px-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
    >
      <Reveal>
        <p className="eyebrow mb-3">{t("research.page.eyebrow")}</p>
        <h1 className="section-header">{t("research.page.title")}</h1>
        <p className="text-ink-dim mt-4 max-w-2xl">
          {t("research.page.desc")}
        </p>
      </Reveal>

      {/* Featured */}
      {featured && (
        <Reveal>
          <article
            data-testid="featured-article"
            className="mt-12 glass-strong glow-border glow-border-active rounded-3xl p-8 sm:p-12 grid lg:grid-cols-12 gap-8 relative overflow-hidden"
          >
            <div className={`absolute -top-32 ${dir === 'rtl' ? '-left-32' : '-right-32'} w-96 h-96 rounded-full bg-moss-light/10 blur-3xl pointer-events-none`} />
            <div className="lg:col-span-8 relative z-10">
              <span className="pill pill-active">{getStr(featured.tag)}</span>
              <h2 className="section-header mt-4">{getStr(featured.title)}</h2>
              <p className="text-ink-dim mt-4 max-w-2xl">{getStr(featured.description)}</p>
              <button
                data-testid="read-featured-btn"
                onClick={() => setOpen(featured)}
                className="btn-primary mt-7 inline-flex items-center gap-2"
              >
                {t("research.article.read")} <ArrowLeft size={16} className={dir === 'ltr' ? 'rotate-180' : ''} />
              </button>
            </div>
          </article>
        </Reveal>
      )}

      {/* Articles grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {rest.map((a, i) => (
          <Reveal key={a.id} delay={i * 90}>
            <article
              data-testid={`article-card-${a.id}`}
              onClick={() => setOpen(a)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(a)}
              className="glass glow-border rounded-2xl p-7 h-full flex flex-col cursor-pointer hover:translate-y-[-2px] transition-transform"
            >
              <span className="pill self-start">{getStr(a.tag)}</span>
              <h3 className="font-display font-bold text-xl mt-4 leading-tight">{getStr(a.title)}</h3>
              <p className="text-ink-dim text-sm mt-3 flex-1 leading-relaxed">{getStr(a.description)}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-ink-dim font-mono inline-flex items-center gap-1.5">
                  <Calendar size={12} /> {t("research.article.date")}
                </span>
                <button
                  data-testid={`read-article-${a.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(a);
                  }}
                  className={`text-sm text-moss-light hover:text-white inline-flex items-center gap-1.5 group`}
                >
                  {t("research.article.read")}
                  <ArrowLeft size={14} className={`transition-transform ${dir === 'ltr' ? 'rotate-180 group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`} />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Email signup */}
      <Reveal>
        <div className="mt-16 glass-strong rounded-3xl p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display font-bold text-2xl">{t("research.signup.title")}</h3>
            <p className="text-ink-dim mt-3">{t("research.signup.desc")}</p>
          </div>
          <form data-testid="research-subscribe-form" onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
            <input
              data-testid="research-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("research.signup.placeholder")}
              className="heja-input flex-1"
              dir="ltr"
            />
            <button
              data-testid="research-subscribe-btn"
              type="submit"
              disabled={state.status === "loading"}
              className="btn-primary"
            >
              {state.status === "loading" ? t("notifySending") : t("research.signup.btn")}
            </button>
          </form>
          {state.msg && (
            <p className={`text-sm lg:col-span-2 ${state.status === "error" ? "text-red-400" : "text-moss-light"}`}>
              {state.msg}
            </p>
          )}
        </div>
      </Reveal>

      <ArticleModal article={open} onClose={() => setOpen(null)} />
    </main>
  );
}
