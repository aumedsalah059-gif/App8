import React from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";
import SourceIcon from "../components/SourceIcon";
import { SCIENTIFIC_SOURCES, LOCAL_AUTHORITIES } from "../data/staticContent";
import { useLang } from "../context/LangContext";

// Translations specific to the Sources page.
const STRINGS = {
  ku: {
    eyebrow: "سەرچاوەکان",
    title: "سەرچاوە زانستییەکانمان",
    intro:
      "هەر ئاماژەیەکی توێژینەوە لە هێژا لینک دەدات بۆ یەکێک لەم دەستە فەرمییانە. ئێمە هەرگیز گوتەی بێ سەرچاوە ناکەین.",
    notice: (
      <>
        هێژا توێژینەوەی سەربەخۆ ئەنجام نادات. ئێمە تەنها ڕووکارێکی گەڕانین بۆ زانیاری
        زانستی و ڕێکخستنیی گشتی بەردەست. هەموو ئاماژەکان ئاماژە دەکەن بۆ سەرچاوەی
        ڕەسەن کە تۆ خۆت دەتوانیت پشتڕاستی بکەیتەوە. ئەگەر کەسێک پرسیار بکات کێ دەڵێت
        ئەم پێکهاتەیە ئاماژەی توێژینەوەی هەیە — وەڵامەکە هەمیشە یەکێکە لەو دەستانەی
        لە خوارەوە لیست کراون. <strong>هەرگیز هێژا نا.</strong>
      </>
    ),
    roleLabel: "ئەرک لە هێژا:",
    noonEyebrow: "داپۆشینی ناوخۆیی",
    noonTitle: "بنکەدراوەی نوون عێراق",
    noonText:
      "بنکەدراوەیەکی تایبەت بە عێراق کە داپۆشینی بازاڕی ناوخۆیی بۆ کوردستان و عێراق دابین دەکات. تەواوکاری Open Food Facts دەکات بۆ ئەو بەرهەمانەی بە شێوەی ناوخۆیی بڵاو دەکرێنەوە.",
    authEyebrow: "دەسەڵاتە ناوخۆییەکان",
    authTitle: "دەسەڵاتە ڕێکخستنییە ناوخۆییەکان کە ڕێزیان لێ دەگرین",
    authIntro:
      "بڕیارەکانی ئەوان پێشینە دەگرن بەسەر هەر لێکدانەوەیەکی ئۆتۆماتیکیی هێژاوە.",
  },
  ar: {
    eyebrow: "المصادر",
    title: "مصادرنا العلمية",
    intro: "كل إشارة بحثية على هيجا ترتبط بإحدى هذه الجهات الرسمية. نحن لا نقدم أبداً ادعاءات غير مدعومة بمصادر.",
    notice: (
      <>
        هيجا لا تجري أبحاثاً مستقلة. نحن ببساطة واجهة بحث للمعلومات العلمية والتنظيمية المتاحة للجمهور. جميع الادعاءات ترتبط بمصادر أصلية يمكنك التحقق منها بنفسك. إذا سأل شخص من يقول أن هذا المكون مميز بإشارة؟ — الإجابة دائمًا هي إحدى الجهات المذكورة أدناه. <strong>ولا أبداً هيجا.</strong>
      </>
    ),
    roleLabel: "الدور على منصة هيجا:",
    noonEyebrow: "تغطية محلية",
    noonTitle: "قاعدة بيانات نون العراقية",
    noonText: "قاعدة بيانات خاصة بالعراق توفر تغطية للسوق المحلي في كردستان والعراق. وهي مكملة لـ Open Food Facts للمنتجات الموزعة محلياً.",
    authEyebrow: "السلطات المحلية",
    authTitle: "أجهزة الرقابة والتنظيم المحلية التي نحترمها",
    authIntro: "تأخذ قراراتهم الأولوية على أي مرجع ترافقي آلي من هيجا.",
  },
  en: {
    eyebrow: "Sources",
    title: "Our Scientific Sources",
    intro: "Every research flag on Hêja links to one of these official bodies. We never make unverified claims.",
    notice: (
      <>
        Hêja does not conduct independent research. We are simply a search interface for publicly available scientific and regulatory information. All claims link to original sources that you can verify yourself. If someone asks who says this ingredient is flagged — the answer is always one of the bodies listed below. <strong>Never Hêja.</strong>
      </>
    ),
    roleLabel: "Role on Hêja:",
    noonEyebrow: "Local Coverage",
    noonTitle: "Noon Iraq Database",
    noonText: "An Iraq-specific database providing local market coverage for Kurdistan and Iraq. It complements Open Food Facts for locally distributed products.",
    authEyebrow: "Local Authorities",
    authTitle: "Local Regulatory Authorities We Respect",
    authIntro: "Their decisions take precedence over any automated cross-reference by Hêja.",
  }
};

const KU_SOURCES = {
  ECHA: {
    name: "دەستەی ئەورووپی بۆ کیمیاییەکان",
    role: "پۆلێنکردنی مەترسی کیمیایی بۆ بەرهەمی پاککردنەوە و پیشەسازی",
    blurb: "دەزگایەکی فەرمی یەکێتی ئەورووپایە کە زانیاری دەربارەی ماددە کیمیاییەکان و پۆلێنکردنی مەترسییەکانیان دابین دەکات. کاتێک هێژا ئاماژە دەکات بە پێکهاتەیەکی بەرهەمێکی پاککردنەوە، ئێمە پشت بە داتای ECHA دەبەستین — نەک بۆچوونی خۆمان.",
  },
  IARC: {
    name: "دەستەی نێودەوڵەتی بۆ توێژینەوەی شێرپەنجە",
    role: "داتای پۆلێنکردنی شێرپەنجەزایی",
    blurb: "بەشێکە لە ڕێکخراوی تەندروستی جیهانی. کاتێک هێژا ئاماژە بە توێژینەوەی پەیوەست بە شێرپەنجە دەکات، بڵاوکراوەکانی IARC سەرچاوەی سەرەکیمانن. هەموو پۆلێنکردنەکان ڕاستەوخۆ لە IARCەوە دێن — نەک لە هێژاوە.",
  },
  CosIng: {
    name: "بنکەدراوەی پێکهاتەی جوانکاری کۆمیسیۆنی ئەورووپا",
    role: "پێکهاتەکانی چاودێریی کەسی و جوانکاری",
    blurb: "بنکەدراوەی فەرمی یەکێتی ئەورووپایە بۆ پێکهاتەکانی جوانکاری و دۆخی ڕێکخستنیان. بۆ هەموو لێکدانەوەکانی پێکهاتەی بەرهەمی چاودێریی کەسی و جوانکاری بەکار دێت.",
  },
  "Codex Alimentarius": {
    name: "ستانداردە نێودەوڵەتییەکانی خواردن",
    role: "زیادکراوە و ستانداردەکانی پێکهاتەی خواردن",
    blurb: "بەرنامەی هاوبەشی ستانداردە نێودەوڵەتییەکانی خواردن نێوان FAO/WHO. بۆ هەموو لێکدانەوەکانی پێکهاتە و هەڵسەنگاندنی زیادکراوەکانی بەرهەمی خواردن بەکار دێت.",
  },
  "Open Food Facts": {
    name: "بنکەدراوەی جیهانیی پێکهاتەی Open Food Facts",
    role: "بنکەدراوەی سەرەکیی بەرهەمەکان",
    blurb: "بنکەدراوەیەکی سەرچاوەکراوەی جیهانییە کە زیاتر لە ٣ ملیۆن بەرهەمی تێدایە و بەشدارانی ولونتیر لە سەرتاسەری جیهانەوە بەشدارن. سەرچاوەی سەرەکیمانە بۆ لیستی پێکهاتەکانی بەرهەمەکان.",
  },
  PubMed: {
    name: "بنکەدراوەی PubMed ی کتێبخانەی نیشتمانیی پزیشکی",
    role: "توێژینەوەی پێداچوونەوەکراو",
    blurb: "گەورەترین بنکەدراوەی جیهانە بۆ نووسراوەی توێژینەوەی بایۆپزیشکی و تەندروستی پێداچوونەوەکراو.",
  },
};

const AR_SOURCES = {
  ECHA: {
    name: "الوكالة الأوروبية للمواد الكيميائية",
    role: "تصنيف المخاطر الكيميائية للتنظيف والمنتجات الصناعية",
    blurb: "بوابة رسمية في الاتحاد الأوروبي تقدم معلومات عن المواد الكيميائية وتصنيفات مخاطرها. عندما نضع إشارة على مكون منتج تنظيف، نحن نستشهد بناءً على بيانات ECHA — وليس من رأينا الخاص.",
  },
  IARC: {
    name: "الوكالة الدولية لأبحاث السرطان",
    role: "بيانات تصنيف المواد المسرطنة",
    blurb: "جزء من منظمة الصحة العالمية. عندما يستند هيجا إلى أبحاث متعلقة بالسرطان، فإن منشورات IARC هي مصدرنا الرئيسي. كل التصنيفات تأتي مباشرة من IARC — وليس من هيجا.",
  },
  CosIng: {
    name: "قاعدة بيانات مكونات مستحضرات التجميل بالمفوضية الأوروبية",
    role: "العناية الشخصية والمكونات التجميلية",
    blurb: "قاعدة بيانات رسمية في الاتحاد الأوروبي لمكونات التجميل وحالتها التنظيمية. تستخدم في جميع الإشارات والملصقات المتعلقة بمنتجات العناية الشخصية.",
  },
  "Codex Alimentarius": {
    name: "دستور الأغذية (القياسات العالمية للغذاء)",
    role: "المضافات الغذائية ومعايير المكونات",
    blurb: "برنامج المواصفات الغذائية المشترك بين منظمة الأغذية والزراعة ومنظمة الصحة العالمية. يُستخدم لجميع مراجع مكونات الأغذية وتقييمات المضافات.",
  },
  "Open Food Facts": {
    name: "قاعدة بيانات مكونات Open Food Facts المفتوحة",
    role: "قاعدة البيانات الأساسية للمنتجات",
    blurb: "قاعدة بيانات عالمية ومفتوحة المصدر تضم أكثر من 3 ملايين منتج ساهم بها متطوعون من جميع أنحاء العالم. مصدرنا الأساسي لقوائم مكونات المنتجات.",
  },
  PubMed: {
    name: "قاعدة بيانات المكتبة الوطنية للطب PubMed",
    role: "بحوث مراجعة وموثقة من المتخصصين",
    blurb: "أكبر قاعدة بيانات في العالم في مجال البحوث الطبية الحيوية المراجعة من قِبل الأقران.",
  },
};

const KU_AUTHORITIES = {
  "Kurdistan Standardization and Quality Control Administration (KSQCA)": {
    name: "دەزگای ستاندارد و کۆنترۆڵی جۆری هەرێمی کوردستان (KSQCA)",
    blurb: "دەستەی فەرمی ستانداردی بەرهەمەکان لە هەرێمی کوردستان. داتاکانی ئێمە جێگیری بڕیارەکانی KSQCA ناگرنەوە.",
  },
  "Iraqi Ministry of Health": {
    name: "وەزارەتی تەندروستی عێراق",
    blurb: "دەسەڵاتی فەرمیی تەندروستییە بۆ عێراق. هەر بڕیارێکی وەزارەتی تەندروستی پێشینە دەگرێت بەسەر لێکدانەوە ئۆتۆماتیکییەکانی ئێمەوە.",
  },
  "Iraqi Commission for Market Regulation": {
    name: "دەستەی عێراقی بۆ ڕێکخستنی بازاڕ",
    blurb: "دەزگای جێبەجێکردنی پاراستنی بەکاربەرە. ئێمە پشتیوانی لە ئەرکیان دەکەین بۆ پاراستنی بەکاربەرانی عێراقی.",
  },
};

const AR_AUTHORITIES = {
  "Kurdistan Standardization and Quality Control Administration (KSQCA)": {
    name: "المديرية العامة للتقييس والسيطرة النوعية الكردستانية (KSQCA)",
    blurb: "الهيئة الرسمية لمعايير المنتجات في إقليم كردستان. بياناتنا لا تحل محل أو تتجاوز قرارات KSQCA.",
  },
  "Iraqi Ministry of Health": {
    name: "وزارة الصحة العراقية",
    blurb: "السلطة الصحية الرسمية في العراق. أي قرار من وزارة الصحة يفوق تلقائياً إشاراتنا المرجعية الآلية.",
  },
  "Iraqi Commission for Market Regulation": {
    name: "هيئة تنظيم السوق وحماية المستهلك العراقية",
    blurb: "جهة إنفاذ وحماية المستهلك. نحن ندعم مهمتها في حماية المستهلكين العراقيين.",
  },
};

export default function Sources() {
  const { lang, dir } = useLang();
  const text = STRINGS[lang] || STRINGS.en;

  return (
    <main
      data-testid="sources-page"
      dir={dir}
      className={`pt-32 pb-20 max-w-7xl mx-auto px-5 sm:px-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
    >
      <Reveal>
        <p className="eyebrow mb-3">{text.eyebrow}</p>
        <h1 className="section-header">{text.title}</h1>
        <p className="text-ink-dim mt-4 max-w-2xl">{text.intro}</p>
      </Reveal>

      <Reveal>
        <div
          data-testid="sources-statement"
          className={`notice-amber p-6 mt-12 ${dir === 'rtl' ? 'rounded-l-xl' : 'rounded-r-xl'}`}
        >
          <p className="text-ink/90 leading-relaxed">{text.notice}</p>
        </div>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {SCIENTIFIC_SOURCES.map((s, i) => {
          let trans = {};
          if (lang === 'ku') trans = KU_SOURCES[s.code] || {};
          if (lang === 'ar') trans = AR_SOURCES[s.code] || {};
          
          return (
            <Reveal key={s.code} delay={i * 80}>
              <article
                data-testid={`source-card-${s.code.toLowerCase().replace(/\s+/g, "-")}`}
                className="glass glow-border rounded-2xl p-7 h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <SourceIcon code={s.code} size={64} />
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    dir="ltr"
                    className="inline-flex items-center gap-1 text-xs text-ink-dim hover:text-moss-light"
                  >
                    {new URL(s.url).host}
                    <ExternalLink size={12} />
                  </a>
                </div>
                <span className={`font-mono text-moss-light text-xs tracking-wider mb-1 ${dir === 'rtl' ? 'text-left' : 'text-left'}`} dir="ltr">
                  {s.code}
                </span>
                <h3 className="font-display font-bold text-xl">{trans.name || s.name}</h3>
                <p className="text-xs text-moss-light/80 mt-1.5 font-medium">
                  {text.roleLabel} {trans.role || s.role}
                </p>
                <p className="text-sm text-ink-dim mt-4 leading-relaxed flex-1">
                  {trans.blurb || s.blurb}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Noon Iraq */}
      <Reveal>
        <div data-testid="noon-iraq-card" className="mt-10 glass-strong rounded-2xl p-7">
          <p className="eyebrow mb-2">{text.noonEyebrow}</p>
          <h3 className="font-display font-bold text-2xl">{text.noonTitle}</h3>
          <p className="text-sm text-ink-dim mt-3 leading-relaxed max-w-3xl">{text.noonText}</p>
        </div>
      </Reveal>

      {/* Local authorities */}
      <section className="mt-16" data-testid="local-authorities">
        <Reveal>
          <p className="eyebrow mb-3">{text.authEyebrow}</p>
          <h2 className="section-header">{text.authTitle}</h2>
          <p className="text-ink-dim mt-4 max-w-2xl">{text.authIntro}</p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {LOCAL_AUTHORITIES.map((a, i) => {
            let trans = {};
            if (lang === 'ku') trans = KU_AUTHORITIES[a.name] || {};
            if (lang === 'ar') trans = AR_AUTHORITIES[a.name] || {};
            
            return (
              <Reveal key={a.name} delay={i * 80}>
                <article className="glass rounded-2xl p-6 h-full" data-testid={`authority-card-${i}`}>
                  <h3 className="font-display font-bold text-lg text-moss-light leading-snug">
                    {trans.name || a.name}
                  </h3>
                  <p className="text-sm text-ink-dim mt-3 leading-relaxed">
                    {trans.blurb || a.blurb}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
