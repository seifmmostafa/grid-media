/* ============================================
   GRID MEDIA PRODUCTIONS — JAVASCRIPT v2
   With Full Arabic / English Language Toggle
============================================ */

// ===== TRANSLATIONS =====
const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    langLabel: 'EN',
    langTitle: 'Switch to English',

    // Hero
    heroBadge: 'إنتاج إبداعي متكامل',
    heroTitle1: 'نصنع الصورة',
    heroTitleSep: '...',
    heroTitle2: 'ونحوّل الأفكار',
    heroTitle3: 'إلى تجربة بصرية',
    heroSub: 'من أول تواصل العميل معانا، بنبدأ نفهم احتياجاته، ونساعده يحدد الحل المناسب، ونخطط للتنفيذ، وننتج المحتوى، وبعدها نراجع النتيجة معاه.',
    heroCta1: 'ابدأ مشروعك',
    heroCta2: 'اكتشف خدماتنا',
    stat1Num: '10+', stat1Label: 'مدن في مصر',
    stat2Num: '5+',  stat2Label: 'خدمات متكاملة',
    stat3Num: '7',   stat3Label: 'مراحل تنفيذ',
    heroScroll: 'اكتشف المزيد',

    // About
    aboutLabel: 'من نحن',
    aboutTitle: 'شركة متخصصة في <span class="text-gold">إنتاج المحتوى البصري</span>',
    aboutText1: '<strong>جريد ميديا برودكشن</strong> هي شركة متخصصة في إنتاج المحتوى البصري وصناعة الفيديو وتغطية وتنفيذ الفعاليات والمشروعات المختلفة.',
    aboutText2: 'بنقدم محتوى بصري احترافي وسينمائي، بيتم تصميمه وتنفيذه حسب طبيعة كل مشروع واحتياجات كل عميل.',
    aboutQuote: 'إحنا مش بنصور وخلاص... إحنا بنفهم الفكرة، ونبني عليها الصورة.',
    founderName: 'سيف الدين مؤمن',
    founderTitle: 'المؤسس والرئيس التنفيذي',
    floatTitle1: 'إنتاج سينمائي', floatSub1: 'محتوى بصري احترافي',
    floatTitle2: 'هوية مخصصة',  floatSub2: 'لكل مشروع أسلوبه',

    // Services
    servicesLabel: 'ماذا نقدم',
    servicesTitle: 'حلول متكاملة في <span class="text-gold">الإنتاج البصري</span>',
    servicesDesc: 'بنقدم حلول تناسب أنواع مختلفة من المشاريع والفعاليات',
    svc1Title: 'إنتاج المحتوى البصري المخصص',
    svc1Desc: 'تنفيذ مشاريع محتوى مخصصة حسب احتياجات العميل، بداية من الفكرة والتخطيط، مرورًا بالتصوير والإنتاج، وحتى التسليم النهائي. كل مشروع له أسلوبه وهويته الخاصة.',
    svc1Tag: 'من الفكرة للصورة',
    svc2Title: 'محتوى الشركات والبراندات',
    svc2Desc: 'صناعة محتوى بصري يساعد الشركات والبراندات على تقديم نفسها وهويتها بصورة واضحة واحترافية تعكس قيمتها.',
    svc2Tag: 'هوية بصرية',
    svc3Title: 'المحتوى الإعلاني والترويجي',
    svc3Desc: 'إنتاج فيديوهات ومحتوى بصري للشركات، البراندات، الأماكن والمشروعات، بهدف تقديمها بصورة جذابة واحترافية تخدم أهدافها.',
    svc3Tag: 'إعلان احترافي',
    svc4Title: 'حفلات التخرج والاحتفالات',
    svc4Desc: 'إنتاج محتوى بصري يعكس أجواء الاحتفال والطاقة واللحظات المهمة، بداية من التصوير وحتى إنتاج المحتوى النهائي.',
    svc4Tag: 'لحظات لا تُنسى',
    svc5Title: 'الفعاليات والمناسبات',
    svc5Desc: 'تغطية وإنتاج محتوى بصري للفعاليات، الحفلات، المؤتمرات، والمناسبات المختلفة، مع التركيز على تفاصيل الحدث وأجوائه وروحه.',
    svc5Tag: 'تغطية شاملة',

    // Process
    processLabel: 'كيف نعمل',
    processTitle: 'مراحل العمل <span class="text-gold">السبع</span>',
    processDesc: 'كل مشروع مختلف، وعملنا يبدأ دائمًا بفهم العميل أولاً',
    step1Title: 'فهم المشروع',
    step1Desc: 'أول خطوة هي التواصل مع العميل وفهم تفاصيل المشروع. بنعرف طبيعة المشروع، أهدافه، متطلباته، المواعيد، والنتيجة اللي العميل عايز يوصل لها.',
    step1High: 'نفهم رؤية العميل قبل أي خطوة في التنفيذ',
    step2Title: 'الاستشارة واختيار الحل',
    step2Desc: 'بعد ما نفهم احتياجات العميل، بنساعده في تحديد الخدمات والباقة المناسبة للمشروع. مش بنعتمد على باقة ثابتة لكل الناس.',
    step2High: 'حل مخصص لكل مشروع',
    step3Title: 'التخطيط وتحديد التكلفة',
    step3Desc: 'بنراجع كل تفاصيل المشروع ونحدد نطاق العمل، وطريقة التنفيذ، والمخرجات المطلوبة. وبناءً على ده بنحدد التكلفة المناسبة.',
    step3High: 'شفافية كاملة في التسعير',
    step4Title: 'التجهيز قبل التنفيذ',
    step4Desc: 'قبل بداية التصوير، بنبدأ مرحلة التجهيز والتخطيط. بنراجع تفاصيل المشروع، ونحدد طريقة العمل والتصوير.',
    step4High: 'نبدأ التنفيذ وإحنا عارفين بالضبط هدفنا',
    step5Title: 'التنفيذ والإنتاج',
    step5Desc: 'بنركز على القصة، التفاصيل، الطاقة، الأجواء، وطريقة تقديم الصورة، علشان النتيجة النهائية تكون تجربة بصرية متكاملة.',
    step5High: 'محتوى بصري له قيمة وتأثير',
    step6Title: 'ما بعد الإنتاج',
    step6Desc: 'بعد انتهاء التصوير، يبدأ العمل على المادة المصورة.',
    step6High: 'لكل مشروع أسلوبه وهويته الخاصة',
    step7Title: 'المراجعة والتسليم النهائي',
    step7Desc: 'قبل التسليم النهائي، بنتابع مع العميل ونتأكد إن النتيجة ماشية في الاتجاه اللي هو محتاجه.',
    step7High: 'شغل يمثلك، يخدم هدفك، بالمستوى اللي كنا مستهدفينه',

    // Why
    whyLabel: 'لماذا جريد؟',
    whyTitle: 'مش مجرد فريق تصوير — <span class="text-gold">تجربة إنتاج متكاملة</span>',
    whyText: 'إحنا بنتعامل مع كل مشروع كـ <strong>تجربة إنتاج متكاملة</strong>. من أول تواصل العميل معانا، بنبدأ نفهم احتياجاته، ونساعده يحدد الحل المناسب، ونخطط للتنفيذ، وننتج المحتوى.',
    wp1Title: 'نفهم المشروع أولاً', wp1Desc: 'بنبدأ بفهم رؤيتك وأهدافك قبل أي خطوة تنفيذية',
    wp2Title: 'حلول مخصصة وليست باقات ثابتة', wp2Desc: 'كل مشروع بياخد الحل اللي يناسبه فعلاً',
    wp3Title: 'جودة سينمائية في كل مشروع', wp3Desc: 'محتوى بصري يعبر عن المشروع بشكل يحقق الهدف',
    wp4Title: 'شراكة حقيقية مع العميل', wp4Desc: 'بنراجع النتيجة معاك ونضمن رضاك الكامل',
    phiText: 'مش كل مشروع شبه التاني. ومش كل قصة ينفع تتحكي بنفس الطريقة.',
    phiSub: 'علشان كده، إحنا مش بنحاول نكرر نفس الشغل في كل مرة. بنبدأ من احتياجات المشروع نفسه، وبعدها بنبني طريقة الإنتاج المناسبة له.',
    phiResult: 'النجاح إن النتيجة تحقق الهدف وتوصل الإحساس',
    tagline1: 'كل مشروع', tagline2: 'بيبدأ بفكرة.', tagline3: 'إحنا بنحوّلها', tagline4: 'لتجربة بصرية.',

    // Cities
    citiesLabel: 'خبرتنا وانتشارنا',
    citiesTitle: 'نعمل في <span class="text-gold">أكثر من ١٠ مدن</span> في مصر',
    citiesDesc: 'والانتشار في مناطق مختلفة خلانا نتعامل مع أنواع متعددة من المشاريع والعملاء',

    // Contact
    contactLabel: 'تواصل معنا',
    contactTitle: 'جاهز تبدأ <span class="text-gold">مشروعك؟</span>',
    contactSub: 'تواصل معانا وهنبدأ بفهم احتياجاتك وتحديد الحل المناسب لمشروعك',
    nameLabel: 'الاسم', namePlaceholder: 'اسمك الكريم',
    phoneLabel: 'رقم التواصل', phonePlaceholder: 'رقم الهاتف',
    projectLabel: 'نوع المشروع', projectDefault: 'اختار نوع المشروع',
    opt1: 'فعاليات ومناسبات', opt2: 'حفلات تخرج', opt3: 'محتوى إعلاني وترويجي',
    opt4: 'محتوى الشركات والبراندات', opt5: 'إنتاج محتوى مخصص', opt6: 'أخرى',
    msgLabel: 'تفاصيل المشروع', msgPlaceholder: 'أخبرنا أكثر عن مشروعك...',
    submitBtn: 'أرسل طلبك', submitting: 'جاري الإرسال...',
    successTitle: 'تم إرسال طلبك!',
    successMsg: 'سنتواصل معك في أقرب وقت ممكن لبدء رحلة مشروعك.',

    // Footer
    footerTagline: 'صناعة محتوى بصري. إنتاج إبداعي. وتجربة متكاملة من الفكرة حتى الصورة النهائية.',
    footerLinksTitle: 'روابط سريعة',
    footerServicesTitle: 'خدماتنا',
    footerCopy: '© 2024 جريد ميديا برودكشن. جميع الحقوق محفوظة.',
    footerFounder: 'المؤسس والرئيس التنفيذي — <strong>سيف الدين مؤمن</strong>',
  },

  en: {
    dir: 'ltr',
    lang: 'en',
    langLabel: 'عربي',
    langTitle: 'التبديل إلى العربية',

    heroBadge: 'Complete Creative Production',
    heroTitle1: 'We Craft the Image',
    heroTitleSep: '...',
    heroTitle2: 'We Transform Ideas',
    heroTitle3: 'Into Visual Experiences',
    heroSub: 'From the first moment you reach out, we start understanding your needs, help you identify the right solution, plan the execution, produce the content, and review the results together.',
    heroCta1: 'Start Your Project',
    heroCta2: 'Explore Our Services',
    stat1Num: '10+', stat1Label: 'Cities in Egypt',
    stat2Num: '5+',  stat2Label: 'Integrated Services',
    stat3Num: '7',   stat3Label: 'Execution Phases',
    heroScroll: 'Discover More',

    aboutLabel: 'Who We Are',
    aboutTitle: 'Specialists in <span class="text-gold">Visual Content Production</span>',
    aboutText1: '<strong>Grid Media Productions</strong> is a company specialized in visual content production, video production, and coverage and execution of events and various projects.',
    aboutText2: 'We deliver professional and cinematic visual content, designed and executed according to each project\'s nature and each client\'s needs.',
    aboutQuote: 'We don\'t just shoot and call it done... We understand the idea, and build the image on top of it.',
    founderName: 'Seif El-Din Moamen',
    founderTitle: 'Founder & CEO',
    floatTitle1: 'Cinematic Production', floatSub1: 'Professional visual content',
    floatTitle2: 'Custom Identity',       floatSub2: 'Each project, its own style',

    servicesLabel: 'What We Offer',
    servicesTitle: 'Integrated Solutions in <span class="text-gold">Visual Production</span>',
    servicesDesc: 'We offer solutions that suit various types of projects and events',
    svc1Title: 'Custom Visual Content Production',
    svc1Desc: 'Executing custom content projects based on client needs, from concept and planning, through filming and production, to final delivery. Every project has its own style.',
    svc1Tag: 'From Idea to Image',
    svc2Title: 'Corporate & Brand Content',
    svc2Desc: 'Creating visual content that helps companies and brands present themselves and their identity clearly and professionally, reflecting their value.',
    svc2Tag: 'Visual Identity',
    svc3Title: 'Advertising & Promotional Content',
    svc3Desc: 'Production of videos and visual content for companies, brands, venues, and projects, aiming to present them attractively and professionally.',
    svc3Tag: 'Professional Advertising',
    svc4Title: 'Graduation & Celebrations',
    svc4Desc: 'Visual content production that reflects the atmosphere, energy, and key moments of celebrations, from filming through to final content delivery.',
    svc4Tag: 'Unforgettable Moments',
    svc5Title: 'Events & Occasions',
    svc5Desc: 'Coverage and visual content production for events, concerts, conferences, and various occasions, with focus on the event\'s details, atmosphere, and spirit.',
    svc5Tag: 'Full Coverage',

    processLabel: 'How We Work',
    processTitle: 'The <span class="text-gold">Seven</span> Phases',
    processDesc: 'Every project is different, and our work always starts with understanding the client first',
    step1Title: 'Understanding the Project',
    step1Desc: 'The first step is communicating with the client and understanding the project details — its nature, goals, requirements, timelines, and the outcome the client wants to achieve.',
    step1High: 'We understand the client\'s vision before any execution step',
    step2Title: 'Consultation & Solution Selection',
    step2Desc: 'After understanding the client\'s needs, we help them identify the right services and package for the project. We don\'t rely on a fixed package for everyone.',
    step2High: 'A custom solution for every project',
    step3Title: 'Planning & Cost Estimation',
    step3Desc: 'We review all project details, define the scope of work, execution method, and required deliverables. Based on this, we determine the appropriate cost.',
    step3High: 'Full transparency in pricing',
    step4Title: 'Pre-Production Preparation',
    step4Desc: 'Before filming begins, we start the preparation and planning phase. We review project details and define the work and filming approach.',
    step4High: 'We start execution knowing exactly what we want to achieve',
    step5Title: 'Execution & Production',
    step5Desc: 'We focus on the story, details, energy, atmosphere, and how to present the image, so the final result is a complete visual experience.',
    step5High: 'Visual content with value and impact',
    step6Title: 'Post-Production',
    step6Desc: 'After filming is complete, work begins on the captured material.',
    step6High: 'Every project has its own style and identity',
    step7Title: 'Review & Final Delivery',
    step7Desc: 'Before final delivery, we follow up with the client to ensure the result is heading in the direction they need.',
    step7High: 'Work that represents you, serves your goal, at the level we targeted from the start',

    whyLabel: 'Why Grid?',
    whyTitle: 'Not Just a Filming Team — <span class="text-gold">A Complete Production Experience</span>',
    whyText: 'We treat every project as a <strong>complete production experience</strong>. From the first moment the client reaches out, we understand their needs, help define the right solution, plan execution, and produce the content.',
    wp1Title: 'We Understand the Project First', wp1Desc: 'We start by understanding your vision and goals before any execution step',
    wp2Title: 'Custom Solutions, Not Fixed Packages', wp2Desc: 'Every project gets the solution that actually fits it',
    wp3Title: 'Cinematic Quality in Every Project', wp3Desc: 'Visual content that represents the project in a way that achieves the goal',
    wp4Title: 'A Real Partnership with the Client', wp4Desc: 'We review results with you and ensure your complete satisfaction',
    phiText: 'Not every project is the same. Not every story can be told the same way.',
    phiSub: 'That\'s why we don\'t try to repeat the same work every time. We start from the project\'s own needs, then build the appropriate production approach.',
    phiResult: 'Success means the result achieves the goal and delivers the feeling',
    tagline1: 'Every project', tagline2: 'starts with an idea.', tagline3: 'We transform it', tagline4: 'into a visual experience.',

    citiesLabel: 'Our Experience & Reach',
    citiesTitle: 'We Work in <span class="text-gold">10+ Cities</span> Across Egypt',
    citiesDesc: 'Our presence across different regions has allowed us to work with diverse projects and clients',

    contactLabel: 'Contact Us',
    contactTitle: 'Ready to Start <span class="text-gold">Your Project?</span>',
    contactSub: 'Reach out to us and we\'ll start by understanding your needs and identifying the right solution for your project',
    nameLabel: 'Name', namePlaceholder: 'Your name',
    phoneLabel: 'Phone Number', phonePlaceholder: 'Phone number',
    projectLabel: 'Project Type', projectDefault: 'Select project type',
    opt1: 'Events & Occasions', opt2: 'Graduation Ceremonies', opt3: 'Advertising & Promotional Content',
    opt4: 'Corporate & Brand Content', opt5: 'Custom Content Production', opt6: 'Other',
    msgLabel: 'Project Details', msgPlaceholder: 'Tell us more about your project...',
    submitBtn: 'Send Request', submitting: 'Sending...',
    successTitle: 'Request Sent!',
    successMsg: 'We\'ll reach out to you as soon as possible to start your project journey.',

    footerTagline: 'Visual content production. Creative production. A complete experience from idea to final image.',
    footerLinksTitle: 'Quick Links',
    footerServicesTitle: 'Our Services',
    footerCopy: '© 2024 Grid Media Productions. All rights reserved.',
    footerFounder: 'Founder & CEO — <strong>Seif El-Din Moamen</strong>',
  }
};

// ===== CURRENT LANGUAGE =====
let currentLang = 'ar';

// ===== APPLY LANGUAGE =====
function applyLanguage(lang) {
  const t = translations[lang];
  const html = document.documentElement;
  const body = document.body;

  // Update HTML attributes
  html.setAttribute('lang', t.lang);
  html.setAttribute('dir', t.dir);
  body.style.direction = t.dir;

  // Nav label & title
  const langLabel = document.getElementById('langLabel');
  const langToggle = document.getElementById('langToggle');
  if (langLabel) langLabel.textContent = t.langLabel;
  if (langToggle) langToggle.title = t.langTitle;

  // All elements with data-ar / data-en
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
  });

  // ---- HERO ----
  setText('#heroBadgeText', t.heroBadge);
  setHTML('#heroTitle1', t.heroTitle1);
  setHTML('#heroTitle2', t.heroTitle2);
  setHTML('#heroTitle3', t.heroTitle3);
  setText('#heroSub', t.heroSub);
  setText('#heroCta1', t.heroCta1);
  setText('#heroCta2', t.heroCta2);
  setText('#stat1Num', t.stat1Num); setText('#stat1Label', t.stat1Label);
  setText('#stat2Num', t.stat2Num); setText('#stat2Label', t.stat2Label);
  setText('#stat3Num', t.stat3Num); setText('#stat3Label', t.stat3Label);
  setText('#heroScrollText', t.heroScroll);

  // ---- ABOUT ----
  setText('#aboutLabel', t.aboutLabel);
  setHTML('#aboutTitle', t.aboutTitle);
  setHTML('#aboutText1', t.aboutText1);
  setText('#aboutText2', t.aboutText2);
  setText('#aboutQuote', t.aboutQuote);
  setText('#founderName', t.founderName);
  setText('#founderTitle', t.founderTitle);
  setText('#floatTitle1', t.floatTitle1); setText('#floatSub1', t.floatSub1);
  setText('#floatTitle2', t.floatTitle2); setText('#floatSub2', t.floatSub2);

  // ---- SERVICES ----
  setText('#servicesLabel', t.servicesLabel);
  setHTML('#servicesTitle', t.servicesTitle);
  setText('#servicesDesc', t.servicesDesc);
  setText('#svc1Title', t.svc1Title); setText('#svc1Desc', t.svc1Desc); setText('#svc1Tag', t.svc1Tag);
  setText('#svc2Title', t.svc2Title); setText('#svc2Desc', t.svc2Desc); setText('#svc2Tag', t.svc2Tag);
  setText('#svc3Title', t.svc3Title); setText('#svc3Desc', t.svc3Desc); setText('#svc3Tag', t.svc3Tag);
  setText('#svc4Title', t.svc4Title); setText('#svc4Desc', t.svc4Desc); setText('#svc4Tag', t.svc4Tag);
  setText('#svc5Title', t.svc5Title); setText('#svc5Desc', t.svc5Desc); setText('#svc5Tag', t.svc5Tag);

  // ---- PROCESS ----
  setText('#processLabel', t.processLabel);
  setHTML('#processTitle', t.processTitle);
  setText('#processDesc', t.processDesc);
  for (let i = 1; i <= 7; i++) {
    setText(`#step${i}Title`, t[`step${i}Title`]);
    setText(`#step${i}Desc`, t[`step${i}Desc`]);
    setText(`#step${i}High`, t[`step${i}High`]);
  }

  // ---- WHY ----
  setText('#whyLabel', t.whyLabel);
  setHTML('#whyTitle', t.whyTitle);
  setHTML('#whyText', t.whyText);
  setText('#wp1Title', t.wp1Title); setText('#wp1Desc', t.wp1Desc);
  setText('#wp2Title', t.wp2Title); setText('#wp2Desc', t.wp2Desc);
  setText('#wp3Title', t.wp3Title); setText('#wp3Desc', t.wp3Desc);
  setText('#wp4Title', t.wp4Title); setText('#wp4Desc', t.wp4Desc);
  setText('#phiText', t.phiText);
  setText('#phiSub', t.phiSub);
  setText('#phiResult', t.phiResult);
  setText('#tagline1', t.tagline1); setText('#tagline2', t.tagline2);
  setText('#tagline3', t.tagline3); setText('#tagline4', t.tagline4);

  // ---- CITIES ----
  setText('#citiesLabel', t.citiesLabel);
  setHTML('#citiesTitle', t.citiesTitle);
  setText('#citiesDesc', t.citiesDesc);

  // ---- CONTACT ----
  setText('#contactLabel', t.contactLabel);
  setHTML('#contactTitle', t.contactTitle);
  setText('#contactSub', t.contactSub);
  setText('#nameLabel', t.nameLabel);
  const nameInput = document.getElementById('name');
  if (nameInput) nameInput.placeholder = t.namePlaceholder;
  setText('#phoneLabel', t.phoneLabel);
  const phoneInput = document.getElementById('phone');
  if (phoneInput) phoneInput.placeholder = t.phonePlaceholder;
  setText('#projectLabel', t.projectLabel);
  const opts = document.querySelectorAll('#project-type option');
  const optKeys = ['', t.opt1, t.opt2, t.opt3, t.opt4, t.opt5, t.opt6];
  opts.forEach((o, i) => { if (optKeys[i]) o.textContent = optKeys[i]; });
  const sel = document.getElementById('project-type');
  if (sel) sel.options[0].textContent = t.projectDefault;
  setText('#msgLabel', t.msgLabel);
  const msgArea = document.getElementById('message');
  if (msgArea) msgArea.placeholder = t.msgPlaceholder;
  setText('#submitBtnText', t.submitBtn);
  setText('#successTitle', t.successTitle);
  setText('#successMsg', t.successMsg);

  // ---- FOOTER ----
  setText('#footerTagline', t.footerTagline);
  setText('#footerLinksTitle', t.footerLinksTitle);
  setText('#footerServicesTitle', t.footerServicesTitle);
  setText('#footerCopy', t.footerCopy);
  setHTML('#footerFounder', t.footerFounder);

  currentLang = lang;
  localStorage.setItem('gridLang', lang);
}

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el && text !== undefined) el.textContent = text;
}
function setHTML(selector, html) {
  const el = document.querySelector(selector);
  if (el && html !== undefined) el.innerHTML = html;
}

// ===== LANG TOGGLE BUTTON =====
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    // Animate the button
    btn.classList.add('lang-switching');
    setTimeout(() => {
      applyLanguage(newLang);
      btn.classList.remove('lang-switching');
    }, 200);
  });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
}, { passive: true });

// ===== HAMBURGER MENU =====
function closeMobileMenu() {
  if (hamburger) hamburger.classList.remove('active');
  if (navLinks) navLinks.classList.remove('open');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

function toggleMobileMenu() {
  if (!hamburger || !navLinks) return;
  const willOpen = !navLinks.classList.contains('open');
  hamburger.classList.toggle('active', willOpen);
  navLinks.classList.toggle('open', willOpen);
  document.body.style.overflow = willOpen ? 'hidden' : '';
  document.documentElement.style.overflow = willOpen ? 'hidden' : '';
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMobileMenu);
}

document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

document.addEventListener('click', (e) => {
  if (navbar && !navbar.contains(e.target)) {
    closeMobileMenu();
  }
});

// ===== STATS CLICKABLE INTERACTION =====
const statServicesBtn = document.getElementById('statServicesBtn');
if (statServicesBtn) {
  statServicesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const svcSec = document.getElementById('services');
    if (svcSec) {
      svcSec.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.service-card').forEach(c => {
        c.classList.add('highlight-pulse');
        setTimeout(() => c.classList.remove('highlight-pulse'), 1400);
      });
    }
  });
}

// ===== INTERSECTION OBSERVER =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.delay) || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function setupAnimations() {
  const selectors = ['.service-card', '.process-step', '.why-point', '.city-pill',
    '.about-card-big', '.about-content', '.philosophy-card', '.big-tagline', '.section-header'];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fade-in-up');
      el.dataset.delay = i * 70;
      observer.observe(el);
    });
  });
}

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) {
      const inView = scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight;
      link.classList.toggle('active', inView);
    }
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const t = translations[currentLang];
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const projectType = document.getElementById('project-type').value;
    if (!name || !phone || !projectType) {
      [document.getElementById('name'), document.getElementById('phone'), document.getElementById('project-type')]
        .forEach(f => { if (!f.value.trim()) { f.style.borderColor='#C41230'; f.addEventListener('input', ()=>f.style.borderColor='', {once:true}); }});
      return;
    }
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('submitBtnText');
    if (btnText) btnText.textContent = t.submitting;
    submitBtn.disabled = true;
    setTimeout(() => {
      contactForm.style.display = 'none';
      formSuccess.style.display = 'block';
      setText('#successTitle', t.successTitle);
      setText('#successMsg', t.successMsg);
    }, 1200);
  });
}

// ===== PARALLAX =====
const heroBgImg = document.querySelector('.hero-bg-img');
if (heroBgImg && window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    heroBgImg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }, { passive: true });
}

// ===== CURSOR GLOW (desktop) =====
if (window.innerWidth > 1024) {
  const glow = document.createElement('div');
  glow.style.cssText = 'position:fixed;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(232,213,160,0.04) 0%,transparent 70%);pointer-events:none;z-index:0;transform:translate(-50%,-50%);mix-blend-mode:screen;transition:left 0.1s,top 0.1s;';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => { glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px'; });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setupAnimations();
  updateActiveNav();
  initLangToggle();
  // Restore saved language
  const savedLang = localStorage.getItem('gridLang') || 'ar';
  if (savedLang !== 'ar') applyLanguage(savedLang);
});
if (document.readyState !== 'loading') {
  setupAnimations();
  initLangToggle();
}
