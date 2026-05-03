export const SCIENTIFIC_SOURCES = [
  {
    code: "ECHA",
    name: "European Chemicals Agency",
    role: "Chemical hazard classification for cleaning and industrial products",
    url: "https://echa.europa.eu",
    blurb:
      "Official EU agency providing information on chemical substances and their hazard classifications. When Hêja flags a cleaning product ingredient, we reference ECHA data — not our own opinion.",
    short: "Official EU database of chemical substance classifications.",
  },
  {
    code: "IARC",
    name: "International Agency for Research on Cancer",
    role: "Carcinogen classification data",
    url: "https://www.iarc.who.int",
    blurb:
      "Part of the World Health Organization. When Hêja references cancer-related research, IARC publications are our primary source. All classifications come directly from IARC — not from Hêja.",
    short: "WHO body evaluating carcinogenic risks to humans.",
  },
  {
    code: "CosIng",
    name: "European Commission Cosmetic Ingredients Database",
    role: "Personal care and cosmetic ingredients",
    url: "https://ec.europa.eu/growth/tools-databases/cosing/",
    blurb:
      "Official EU database of cosmetic ingredients and their regulatory status. Used for all personal care and cosmetic product cross-references.",
    short: "European Commission database of cosmetic ingredient regulations.",
  },
  {
    code: "Codex Alimentarius",
    name: "International Food Standards",
    role: "Food additives and food ingredient standards",
    url: "https://www.fao.org/fao-who-codexalimentarius/",
    blurb:
      "Joint FAO/WHO international food standards program. Used for all food product ingredient cross-references and additive evaluations.",
    short: "International FAO/WHO food standards program.",
  },
  {
    code: "Open Food Facts",
    name: "Open Food Facts Global Ingredient Database",
    role: "Primary product database",
    url: "https://world.openfoodfacts.org",
    blurb:
      "Open-source global database with over 3 million products contributed by volunteers worldwide. Our primary source for product ingredient lists.",
    short: "Open-source global product ingredient database.",
  },
  {
    code: "PubMed",
    name: "National Library of Medicine PubMed Database",
    role: "Peer-reviewed research",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    blurb:
      "World's largest database of peer-reviewed biomedical and health research literature.",
    short: "World's largest database of peer-reviewed biomedical research.",
  },
];

export const LOCAL_AUTHORITIES = [
  {
    name: "Kurdistan Standardization and Quality Control Administration (KSQCA)",
    blurb:
      "Official body for product standards in Kurdistan Region. Our data does not replace KSQCA determinations.",
  },
  {
    name: "Iraqi Ministry of Health",
    blurb:
      "Official health authority for Iraq. Any Ministry of Health determination supersedes our automated cross-references.",
  },
  {
    name: "Iraqi Commission for Market Regulation",
    blurb:
      "Consumer protection enforcement body. We support their mission of protecting Iraqi consumers.",
  },
];

export const ARTICLES = [
  {
    id: "feat-overview",
    featured: true,
    tag: { ku: "توێژینەوەی تایبەت", en: "Special Research", ar: "بحث خاص" },
    title: {
      ku: "بنکەدراوە گشتییەکان چی دەربارەی ٩١ بەرهەمی بازاڕەکانی کوردستان دەردەخەن",
      en: "What Public Databases Reveal About 91 Products in Kurdistan Markets",
      ar: "ما تكشفه القواعد العامة للبيانات عن 91 منتجاً في أسواق كردستان"
    },
    description: {
      ku: "تێڕوانینێکی گشتی لەسەر شێوازی بەراوردکردنمان و گرنگترین دەرئەنجامەکانی شیکارکردنی ئەو بەرهەمانەی لە بازاڕە ناوخۆییەکاندا بەردەستن.",
      en: "An overview of our cross-referencing methodology and the most important findings from analyzing products available in local markets.",
      ar: "نظرة عامة على منهجية الإسناد الترافقي التي نتبعها وأهم النتائج من تحليل المنتجات المتوفرة في الأسواق المحلية."
    },
    body: {
      ku: [
        "هێژا بنکەدراوەیەکی گشتی و بە میتۆدی کراوە بەڕێوە دەبات بۆ ئەو بەرهەمانەی لە سەرتاسەری بازاڕەکانی کوردستاندا دەفرۆشرێن. هەر بەرهەمێک لە بەرامبەر شەش دامەزراوەی زانستی نێودەوڵەتی بەراورد دەکرێت: ECHA، IARC، CosIng، Codex Alimentarius، Open Food Facts و PubMed.",
        "ئەم وتارە تێڕوانینێکی گشتی پێشکەش دەکات لەسەر چۆنیەتی کۆکردنەوەی لیستی پێکهاتەکان، چۆن هەر پێکهاتەیەک لەگەڵ تۆماری بنکەدراوەکان بەراورد دەکرێت، و چۆن نمرەی شەفافیەت وەک دەرئەنجامێکی بیرکارییانە دەرئەنجام دەدرێت — هەرگیز بۆچوونی مرۆیی نییە.",
        "دەرئەنجامەکان بە بەردەوامی پیشانیان داوە کە خۆراکە تەقلیدییە ناوخۆییەکان کەمترین ژمارەی ئاماژەی توێژینەوەیان هەیە، لە کاتێکدا پاککەرەوە پیشەسازییە هاوردەکراوەکان و خواردنەوە پرۆسێسکراوەکان زۆرترین ئاماژەیان هەیە. هیچ کام لەم دەرئەنجامانە ڕاوێژی پزیشکی یان یاسایی نییە."
      ],
      en: [
        "Hêja maintains an open-methodology public database of products sold across Kurdistan markets. Every product is cross-referenced against six international scientific bodies: ECHA, IARC, CosIng, Codex Alimentarius, Open Food Facts, and PubMed.",
        "This article provides an overview of how ingredient lists are collected, how each ingredient is matched against database records, and how the Transparency Index is generated as a mathematical outcome — never a human opinion.",
        "The findings have consistently shown that traditional local foods return the fewest research flags, while imported industrial cleaners and processed beverages return the most. None of these findings constitute medical or legal advice."
      ],
      ar: [
        "تدير منصة هيجا قاعدة بيانات عامة بمنهجية مفتوحة للبيانات تخص المنتجات المباعة في أسواق كردستان. يتم تقاطع جميع المنتجات مع ست هيئات علمية دولية: ECHA و IARC و CosIng و Codex Alimentarius و Open Food Facts و PubMed.",
        "تمثل هذه المقالة نظرة عامة حول كيفية جمع قوائم المكونات، وكيفية مطابقة كل مكون مع سجلات قاعدة البيانات، وكيف يتم استخراج مؤشر الشفافية كنتيجة عملية رياضية - وليس كرأي بشري على الإطلاق.",
        "دائماً ما أظهرت النتائج أن الأطعمة التقليدية المحلية تسجل أقل إشارات بحثية وتنبيهات، في حين تسجل المنظفات الصناعية والمشروبات المصنعة والمستوردة الإشارات الأعلى. أياً من هذه النتائج لا تشكل نصيحة طبية أو قانونية."
      ]
    }
  },
  {
    id: "porcoz-nitric",
    tag: { ku: "پاککەرەوەی ماڵ", en: "Household Cleaners", ar: "منظفات منزلية" },
    title: {
      ku: "بەراوردکردنی پۆرچۆز: ECHA چی دەربارەی ترشی نایترێک لە پاککەرەوەکانی ماڵدا دەڵێت",
      en: "Porcoz Cross-Reference: What ECHA Says About Nitric Acid in Household Cleaners",
      ar: "مرجع منتج بورجوز: ماذا تقول وكالة ECHA عن حمض النتريك في المنظفات المنزلية"
    },
    description: {
      ku: "بنکەدراوە گشتییەکان ئاماژە دەکەن کە ترشی نایترێک ئاماژەی پۆلێنکردنی بەرز لە دامەزراوە یاساییەکانەوە وەردەگرێت. ئەمە ئەو شتەیە کە توێژینەوە دەیڵێت.",
      en: "Public databases indicate that Nitric Acid receives severe hazard classifications from regulatory bodies. Here is what the research says.",
      ar: "تشير قواعد البيانات العامة إلى أن حمض النتريك يحصل على تصنيفات خطورة شديدة ومشددة في التنظيم. إليك ما تقوله الأبحاث."
    },
    body: {
      ku: [
        "ترشی نایترێک (HNO₃) لە لایەن ECHA لەژێر چەند پۆلێنێکی مەترسیدا پۆلێنکراوە، لەوانە H314 (دەبێتە هۆی سووتانی توندی پێست و زیان بە چاو). هێژا ئاماژە لە هەر بەرهەمێک دەکات کە لیستی پێکهاتەکانی ترشی نایترێکی تێدا بێت بە هەر چڕییەک.",
        "بەراوردی بنکەدراوە پێشنیار دەکات کە ئەو بەکاربەرانەی بەرهەمی ترشی نایترێکیان لە دەستدایە دەستەوانەی بەرگری لە کیمیا و پاراستنی تەواوی چاو بپۆشن. ئێمە هەرگیز ئامۆژگاری بەدوورگرتن ناکەین — ئامۆژگاری ڕاوێژکردن لە تۆماری ECHA ی ڕەسەن دەکەین."
      ],
      en: [
        "Nitric Acid (HNO₃) is classified by ECHA under multiple hazard classifications, including H314 (Causes severe skin burns and eye damage). Hêja flags any product containing Nitric Acid in its ingredient list at any concentration.",
        "Database cross-references suggest that consumers handling nitric acid products should wear chemical-resistant gloves and full eye protection. We never advise avoidance — we advise consulting the original ECHA records."
      ],
      ar: [
        "يتم تصنيف حمض النتريك (HNO₃) بواسطة وكالة ECHA تحت تصنيفات مخاطر متعددة، ومنها H314 (يسبب حروقًا شديدة للجلد وتلفًا للعين). تُشير منصة هيجا إلى أي منتج يحتوي على حمض النتريك ضمن قائمة مكوناته بأي تركيز.",
        "تقترح مراجع قاعدة البيانات المتقاطعة للمستهلكين الذين يتعاملون مع منتجات تحتوى على حمض النتريك ارتداء قفازات مقاومة للمواد الكيميائية وحماية كاملة للعين تماماً. نحن لا ننصح أبداً بالامتناع عن الاستعمال — بل ننصح بالرجوع واستشارة السجلات الأصلية لوكالة ECHA."
      ]
    }
  },
  {
    id: "vimto-benzoate",
    tag: { ku: "خواردنەوەکان", en: "Beverages", ar: "مشروبات" },
    title: {
      ku: "ڤیمتۆی ڕەسەن: کارلێکی سۆدیۆم بێنزۆوەیت و ترشی ئاسکۆربیک لە ئەدەبیاتی زانستیدا",
      en: "Vimto Original: Sodium Benzoate and Ascorbic Acid Interaction in Scientific Literature",
      ar: "فيمتو الأصلي: بنزوات الصوديوم وتفاعلات حمض الأسكوربيك في المؤلفات العلمية"
    },
    description: {
      ku: "بنکەدراوە گشتییەکان ئاماژە بە کارلێکێکی کیمیایی ناسراو دەکەن لە نێوان دوو پێکهاتە کە لەم خواردنەوە بەناوبانگەدا دەدۆزرێنەوە.",
      en: "Public databases point to a known chemical interaction between two ingredients found in this popular beverage.",
      ar: "تشير قواعد البيانات العامة إلى تفاعل كيميائي معروف بين مكونين موجودين في هذا المشروب الشائع."
    },
    body: {
      ku: [
        "توێژینەوەی بڵاوکراوە لە PubMed ئاماژە دەکات کە سۆدیۆم بێنزۆوەیت و ترشی ئاسکۆربیک (ڤیتامین C) دەتوانن لە هەندێک حاڵەتدا کارلێک بکەن و بڕێکی زۆر کەمی بێنزین دروست بکەن. ئەم کارلێکە بە باشی تۆمارکراوە، بەڵام ئەو بڕانەی لە خواردنەوە بازرگانییەکاندا دەدۆزرێنەوە زۆر کەمن.",
        "هێژا ئاماژە بەم کۆمەڵە دەکات چونکە لە ئەدەبیاتی بڵاوکراوەدا دەردەکەوێت. ئێمە هیچ بانگەشەیەک لەسەر سەلامەتی ناکەین. تۆمارەکانی PubMed ی ئاماژەپێکراو بخوێنەوە و ڕاوێژ بە پسپۆڕێکی شارەزا بکە."
      ],
      en: [
        "Published research in PubMed indicates that Sodium Benzoate and Ascorbic Acid (Vitamin C) can interact under certain conditions to form trace amounts of benzene. This interaction is well documented, though the amounts found in commercial beverages are typically very low.",
        "Hêja flags this combination because it appears in published literature. We make no safety claims. Read the cited PubMed records and consult a qualified professional."
      ],
      ar: [
        "تشير الأبحاث المنشورة في PubMed إلى أن بنزوات الصوديوم وحمض الأسكوربيك (فيتامين C) يمكن أن يتفاعلا في ظروف معينة لتكوين كميات ضئيلة من البنزين. هذا التفاعل موثق بشكل جيد، على الرغم من أن الكميات الموجودة في المشروبات التجارية عادة ما تكون منخفضة جداً.",
        "تُشير هيجا إلى هذا التركيب والمزيج نظراً لظهوره في المنشورات والمؤلفات. نحن لا نضمن أي ادعاءات تتعلق بالسلامة. اقرأ سجلات PubMed المذكورة واستشر مهنياً أو خبيراً مختصاً."
      ]
    }
  },
  {
    id: "das-bulgur",
    tag: { ku: "بەرهەمە ناوخۆییەکان", en: "Local Products", ar: "منتجات محلية" },
    title: {
      ku: "بولگوری داس: بۆچی ئەم بەرهەمە ناوخۆییە کەمترین ژمارەی ئاماژەی توێژینەوەی هەیە لە بنکەدراوەکەماندا",
      en: "DAS Bulgur: Why This Local Product Has the Fewest Research Flags in Our Database",
      ar: "برغل داس: لماذا يمتلك هذا المنتج المحلي أقل إشارات بحثية في قاعدة بياناتنا"
    },
    description: {
      ku: "بەراوردی ئۆتۆماتیکی ئاماژە دەکات کە ئەم خۆراکە ناوخۆییە سفر ماددەی ئاماژەپێکراوی تێدایە لە هەر شەش بنکەدراوەکەدا.",
      en: "Automated cross-referencing indicates that this local food contains zero flagged substances across all six databases.",
      ar: "تشير المراجع والمعلومات المتطابقة الآلية إلى أن هذا الطعام المحلي يحتوي على صفر من المواد الموسومة أو المُنبهة في جميع قواعد البيانات الست."
    },
    body: {
      ku: [
        "بولگوری داس نمرەی ١٠٠ ی لە نمرەی شەفافیەتدا وەرگرتووە چونکە بەراوردکردن سفر ئاماژەی پێکهاتەی گەڕاندەوە لە ECHA، IARC، CosIng، Codex Alimentarius، Open Food Facts و PubMed.",
        "ئەمە پشتگیری نییە — تەنها چاودێرییەکی بیرکارییانەیە. خۆراکە تەقلیدییە ناوخۆییە تاک‌-پێکهاتەییەکان بە بەردەوامی پاکترین دەرئەنجامی بەراوردکردنیان لێ دەردەچێت."
      ],
      en: [
        "DAS Bulgur received a Transparency Index of 100 because the cross-reference returned zero ingredient flags in ECHA, IARC, CosIng, Codex Alimentarius, Open Food Facts, and PubMed.",
        "This is not an endorsement — it is just a mathematical observation. Single-ingredient traditional local foods consistently return the cleanest cross-reference outcomes."
      ],
      ar: [
        "حصل برغل داس على مؤشر شفافية 100 لأنه بعد مطابقتنا للمكونات المتقاطعة مع قواعد البيانات، كان لديه صفر من مؤشرات وإشارات المكونات في كل من ECHA و IARC و CosIng و Codex Alimentarius و Open Food Facts و PubMed.",
        "هذا ليس تصديقاً أو ترويجاً — بل هو مجرد ملاحظة ومقررات رياضية. دائماً ما تعود الأطعمة التقليدية المحلية ذات المكون الواحد بأسلم النتائج المرجعية والإحصائية المتطابقة."
      ]
    }
  },
  {
    id: "cola-phosphoric",
    tag: { ku: "خواردنەوەکان", en: "Beverages", ar: "مشروبات" },
    title: {
      ku: "خواردنەوەی کۆلا: توێژینەوە بڵاوکراوەکان چی دەربارەی ترشی فۆسفۆریک و ڕەنگی کارامەل دەڵێن",
      en: "Cola Beverages: What Published Research Says About Phosphoric Acid and Caramel Color",
      ar: "مشروبات الكولا: ماذا تقول الأبحاث المنشورة عن حمض الفوسفوريك ولون الكراميل"
    },
    description: {
      ku: "تۆمارەکانی بنکەدراوەی IARC و ECHA بۆ پێکهاتە باوەکانی کۆلا — ئەدەبیاتی توێژینەوە چی ئاماژەی پێ دەکات.",
      en: "IARC and ECHA database records for common cola ingredients — what the research literature indicates.",
      ar: "سجلات قواعد بيانات IARC و ECHA للمكونات الشائعة لمشروب الكولا — وهذا ما تشير إليه المؤلفات البحثية المنشورة."
    },
    body: {
      ku: [
        "ڕەنگی کارامەل ٤-MEI لە گرووپی IARC 2B دا ئاماژەی پێکراوە (لەوانەیە بۆ مرۆڤ شێرپەنجەزا بێت). ترشی فۆسفۆریک لە ECHA دا لەژێر پۆلێنی هاندانی پێست و چاو لە سەرووی ئەو چڕییە دیاریکراوەکانەوە ئاماژەی پێکراوە.",
        "هێژا ئاماژەکانی بنکەدراوە ڕاپۆرت دەکات. ئێمە ڕانەگەیاندوومانە کە هیچ بەرهەمێک نائاسایشە. تۆمارە ڕەسەنەکان بخوێنەوە و بۆچوونێکی ئاگادارانەی خۆت دروست بکە."
      ],
      en: [
        "Caramel Color 4-MEI is flagged in IARC Group 2B (possibly carcinogenic to humans). Phosphoric Acid is flagged in ECHA under skin and eye irritation classifications above specific concentrations.",
        "Hêja reports database flags. We have not declared any product unsafe. Read the original records and form your own informed opinion."
      ],
      ar: [
        "لون الكراميل 4-MEI مشار وموسوم ضمن مجموعة IARC 2B (من المحتمل أن يكون مُسرطناً للبشر). حمض الفوسفوريك موسوم في ECHA وتصنيفه أنه يسبب تهيج الجلد والعين إذا كان فوق تركيزات محددة.",
        "تقوم هيجا بنقل وتحويل تنبيهات وشارات قواعد البيانات. نحن لم نعلن عن أي منتج بأنه غير آمن. اقرأ السجلات الأصلية بنفسك لتشكيل رأيك المدروس بعناية."
      ]
    }
  },
  {
    id: "baby-care",
    tag: { ku: "چاودێری منداڵ", en: "Baby Care", ar: "رعاية الطفل" },
    title: {
      ku: "بەرهەمەکانی منداڵان لە کوردستان: بەراوردکردنی پێکهاتەکانی چاودێری منداڵ لەگەڵ بنکەدراوە سەلامەتییەکان",
      en: "Baby Products in Kurdistan: Cross-Referencing Baby Care Ingredients with Safety Databases",
      ar: "منتجات الأطفال في كردستان: مطابقة مكونات العناية بالطفل مع قواعد بيانات السلامة"
    },
    description: {
      ku: "بەراوردکردنی پێکهاتەکانی بەرهەمی منداڵان لەگەڵ بنکەدراوەکانی ECHA و CosIng بۆ بەرهەمەکانی بازاڕی کوردستان.",
      en: "Comparing baby product ingredients with ECHA and CosIng databases for Kurdistan market products.",
      ar: "مقارنة مكونات منتجات الأطفال مع قواعد بيانات ECHA و CosIng للمنتجات في أسواق كردستان."
    },
    body: {
      ku: [
        "بەرهەمەکانی چاودێری منداڵ لەگەڵ CosIng (یاسای کۆزمەتیک) و ECHA (مەترسییە کیمیاییەکان) بەراورد دەکرێن. زۆرێک لە بەرهەمە هاوردەکراوەکان «بۆن» وەک یەک پێکهاتە لیست دەکەن، کاتێک CosIng بە تێکەڵەیەکی ئاڵۆزی پۆلێن دەکات.",
        "بەراوردی بنکەدراوە پێشنیار دەکات ئەو بەرهەمانە هەڵبژێردرێن کە لیستی پێکهاتەی تەواویان هەیە."
      ],
      en: [
        "Baby care products are cross-referenced with CosIng (Cosmetics Regulation) and ECHA (Chemical Hazards). Many imported products list 'Fragrance' as a single ingredient, whereas CosIng classifies it as a complex mixture.",
        "Database cross-references suggest choosing products that have full ingredient lists."
      ],
      ar: [
        "يتم مطابقة منتجات العناية بالطفل مع CosIng (تنظيم مستحضرات التجميل) و ECHA (المخاطر الكيميائية). تدرج العديد من المنتجات المستوردة 'عِطر' أو 'Fragrance' كمكون واحد فقط، على الرغم من أن CosIng يصنفه على أنه خليط معقد.",
        "تقترح المراجع المتوافقة ضمن قواعد البيانات اختيار المنتجات التي تحتوي على قوائم كاملة ومدرجة بالكامل للمكونات."
      ]
    }
  },
  {
    id: "traditional-vs-processed",
    tag: { ku: "خۆراک", en: "Food", ar: "الأطعمة" },
    title: {
      ku: "خۆراکە تەقلیدییەکان لە بەرامبەر بەرهەمە پرۆسێسکراوەکان: بەراوردێکی بنکەدراوە",
      en: "Traditional Foods vs. Processed Products: A Database Comparison",
      ar: "الأطعمة التقليدية مقابل المنتجات المصنعة: مقارنة في قاعدة البيانات"
    },
    description: {
      ku: "چۆن خۆراکە تەقلیدییە ناوخۆییەکانی کوردی بەراورد دەکرێن لەگەڵ بەرهەمە پرۆسێسکراوە هاوردەکراوەکان کاتێک لەگەڵ بنکەدراوە نێودەوڵەتییەکانی پێکهاتەدا بەراورد دەکرێن.",
      en: "How local Kurdish traditional foods compare against imported processed products when cross-referenced with international ingredient databases.",
      ar: "كيف تقارن الأطعمة التقليدية الكردية المحلية بالمنتجات المصنعة المستوردة عند مطابقتها مع قواعد بيانات المكونات الدولية."
    },
    body: {
      ku: [
        "خۆراکە تەقلیدییە ناوخۆییە کوردییەکان وەک بولگور، نیسک و ماست بە بەردەوامی نمرەی ٨٠–١٠٠ یان لە نمرەی شەفافیەتدا وەردەگرن، چونکە کەم یان هیچ زیادەیەکیان تێدا نییە کە لە تۆماری بنکەدراوە یاساییەکاندا ئاماژەیان پێکرابێت.",
        "خواردنەوە و چەرەزە پرۆسێسکراوە هاوردەکراوەکان نمرەی کەمتر وەردەگرن چونکە چەند زیادەیەکیان تێدایە کە لە تۆمارەکانی Codex Alimentarius و Open Food Facts دا تێبینی توێژینەوەیان لەگەڵە."
      ],
      en: [
        "Local Kurdish traditional foods like bulgur, lentils, and yogurt consistently score 80–100 in the Transparency Index, as they contain little or no additives flagged in regulatory database records.",
        "Imported processed beverages and snacks score lower because they contain multiple additives that carry research notes in Codex Alimentarius and Open Food Facts records."
      ],
      ar: [
        "تسجل الأطعمة التقليدية المحلية الكردية مثل البرغل والعدس والزبادي باستمرار 80 - 100 ضمن مؤشر الشفافية، لأنها تحتوي على إضافات ضئيلة أو معدومة من التي حُددت كموسومة أو منبهة في سجلات القواعد التنظيمية للبيانات.",
        "تحصل المشروبات والوجبات الخفيفة المستوردة على درجات أقل ومؤشر شفافية أدنى لأنها تحتوي على العديد من الإضافات الكيميائية والتي تمتلك بدورها ملاحظات بحثية في سجلات Codex Alimentarius و Open Food Facts."
      ]
    }
  }
];
