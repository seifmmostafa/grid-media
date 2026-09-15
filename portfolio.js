/* ============================================
   GRID MEDIA PRODUCTIONS — PORTFOLIO SCRIPT
   High Performance Showcase, Direct Instagram Play,
   Interactive Filter Pills & Bilingual Support
============================================ */

// ===== 10 PROJECTS DATA WITH REAL REELS & THUMBNAILS =====
const projectsData = [
  {
    id: 'reel-1',
    shortcode: 'DEk2FchSjdp',
    url: 'https://www.instagram.com/seif_filmmaker/reel/DEk2FchSjdp/',
    account: '@seif_filmmaker',
    category: 'cinematic',
    catAr: 'إنتاج سينمائي',
    catEn: 'Cinematic Production',
    titleAr: 'إخراج وإنتاج سينمائي إبداعي — فيلم قصير',
    titleEn: 'Cinematic Direction & Creative Vision',
    descAr: 'رؤية إخراجية سينمائية متقدمة للمخرج سيف الدين بالتعاون مع Sola Studio، تبرز قوة زوايا الكاميرا والإضاءة والدراما البصرية.',
    descEn: 'An advanced cinematic directorial vision showcasing dynamic framing, lighting drama, and compelling visual narrative.',
    img: 'thumbs/reel_1.jpg'
  },
  {
    id: 'reel-2',
    shortcode: 'DdRzTD8Bt7s',
    url: 'https://www.instagram.com/_gridmedia_/reel/DdRzTD8Bt7s/',
    account: '@_gridmedia_',
    category: 'graduation',
    catAr: 'حفلات تخرج',
    catEn: 'Graduation Ceremonies',
    titleAr: 'حفل تخرج تجارة بنات جامعة الأزهر بأسيوط',
    titleEn: 'Al-Azhar University Commerce Graduation Gala',
    descAr: '«صار حقاً حلمنا.. بعد صبرٍ جاءنا».. توثيق مشاعر الفرح وطاقة الاحتفال لدفعة استثنائية بتنظيم CRC Event.',
    descEn: 'Capturing the heartfelt joy, cheers, and triumph of graduates in a vibrant celebration filmed with cinematic precision.',
    img: 'thumbs/reel_2.jpg'
  },
  {
    id: 'reel-3',
    shortcode: 'DdJx5yytzpq',
    url: 'https://www.instagram.com/_gridmedia_/reel/DdJx5yytzpq/',
    account: '@_gridmedia_',
    category: 'graduation',
    catAr: 'حفلات تخرج',
    catEn: 'Graduation Ceremonies',
    titleAr: 'حفل تخرج كلية الفنون الجميلة',
    titleEn: 'Faculty of Fine Arts Graduation Ceremony',
    descAr: 'احتفال فني نابض بالحياة يوثق بهجة خريجي كلية الفنون الجميلة بطاقة شبابية وتفاصيل بصرية بديعة.',
    descEn: 'A lively celebration immortalizing the artistic spirit and celebratory joy of Fine Arts graduates.',
    img: 'thumbs/reel_3.jpg'
  },
  {
    id: 'reel-4',
    shortcode: 'DbV_NgjNUt7',
    url: 'https://www.instagram.com/_gridmedia_/reel/DbV_NgjNUt7/',
    account: '@_gridmedia_',
    category: 'events',
    catAr: 'فعاليات ومناسبات',
    catEn: 'Events & Occasions',
    titleAr: 'تغطية ومونتاج سينمائي فوري في نفس اليوم (Same Day Edit)',
    titleEn: 'Same-Day Event Coverage & Rapid Edit',
    descAr: 'سرعة واحترافية فائقة في توثيق الفعالية ومونتاجها وعرض النتيجة في نفس اليوم بأعلى المعايير البصرية.',
    descEn: 'Rapid high-end production showcasing live event highlights edited and delivered on the very same day.',
    img: 'thumbs/reel_4.jpg'
  },
  {
    id: 'reel-5',
    shortcode: 'DaDMsTfN8F0',
    url: 'https://www.instagram.com/_gridmedia_/reel/DaDMsTfN8F0/',
    account: '@_gridmedia_',
    category: 'graduation',
    catAr: 'حفلات تخرج',
    catEn: 'Graduation Ceremonies',
    titleAr: 'حفل تخرج كلية طب الأسنان — جامعة دراية',
    titleEn: 'Faculty of Dentistry Gala — Deraya University',
    descAr: 'توثيق أسطوري لواحدة من أبهج حفلات التخرج مع تفاعل حي وطاقة شبابية مفعمة بالفرح والإنجاز.',
    descEn: 'Immortalizing the smiles, pride, and electric celebration of dentistry graduates at Deraya University.',
    img: 'thumbs/reel_5.jpg'
  },
  {
    id: 'reel-6',
    shortcode: 'DVMFsjigp5b',
    url: 'https://www.instagram.com/_gridmedia_/reel/DVMFsjigp5b/',
    account: '@_gridmedia_',
    category: 'graduation',
    catAr: 'حفلات تخرج',
    catEn: 'Graduation Ceremonies',
    titleAr: 'حفلة كلية الطب الرسمية — جامعة أسيوط',
    titleEn: 'Official Medicine Faculty Gala — Assiut University',
    descAr: 'إنتاج بصري راقٍ يوثق لحظات الفخر والاعتزاز لأطباء المستقبل في صرح جامعة أسيوط العريق.',
    descEn: 'Dignified cinematic video honoring future physicians at Assiut University in a grand official gala.',
    img: 'thumbs/reel_6.jpg'
  },
  {
    id: 'reel-7',
    shortcode: 'DKf4-2cIZ6j',
    url: 'https://www.instagram.com/_gridmedia_/reel/DKf4-2cIZ6j/',
    account: '@_gridmedia_',
    category: 'cinematic',
    catAr: 'إنتاج سينمائي',
    catEn: 'Cinematic Production',
    titleAr: 'إنتاج بصري إبداعي بالتعاون مع MS Company',
    titleEn: 'Cinematic Visual Production with MS Company',
    descAr: 'إيقاع سريع وتناغم بصري استعراضي يجمع بين فن المونتاج والتصوير الاحترافي لإبهار الجمهور.',
    descEn: 'Dynamic motion, fast-paced editing, and rich visual storytelling in collaboration with MS Company.',
    img: 'thumbs/reel_7.jpg'
  },
  {
    id: 'reel-8',
    shortcode: 'DRDT1XaDd6J',
    url: 'https://www.instagram.com/_gridmedia_/reel/DRDT1XaDd6J/',
    account: '@_gridmedia_',
    category: 'events',
    catAr: 'فعاليات ومناسبات',
    catEn: 'Events & Occasions',
    titleAr: 'أجواء استعراضية وأضواء حية في فعالية جماهيرية',
    titleEn: 'Festive Costumes & Dynamic Lighting Coverage',
    descAr: 'لقطات استعراضية بزوايا سينمائية ترصد الأزياء المبتكرة والإضاءة المسرحية والطاقة الحماسية للحضور.',
    descEn: 'A night of costumes, vibrant lights, and festival energy captured with captivating camera angles.',
    img: 'thumbs/reel_8.jpg'
  },
  {
    id: 'reel-9',
    shortcode: 'DYCzzz-Mfmm',
    url: 'https://www.instagram.com/assiutcement/reel/DYCzzz-Mfmm/',
    account: '@assiutcement',
    category: 'brands',
    catAr: 'إعلانات وبراندات',
    catEn: 'Commercials & Brands',
    titleAr: 'تغطية ملتقى الأعمال بفندق أسمنت أسيوط مع صلاح أبو المجد',
    titleEn: 'Business Summit Coverage at Assiut Cement Hotel',
    descAr: 'إنتاج مؤسسي ضخم يوثق أكبر حدث لرواد الأعمال في صعيد مصر مع صلاح أبو المجد وتنظيم Educon Academy.',
    descEn: 'High-level corporate coverage for Upper Egypt\'s largest business gathering featuring Salah Abo El-Magd.',
    img: 'thumbs/reel_9.jpg'
  },
  {
    id: 'reel-10',
    shortcode: 'DKR7rvaoBLW',
    url: 'https://www.instagram.com/_gridmedia_/reel/DKR7rvaoBLW/',
    account: '@_gridmedia_',
    category: 'brands',
    catAr: 'إعلانات وبراندات',
    catEn: 'Commercials & Brands',
    titleAr: 'إعلان تجاري واستعراض براند Sonic Store',
    titleEn: 'Commercial Promo for Sonic Store',
    descAr: 'محتوى ترويجي سينمائي يستعرض منتجات وهوية متجر Sonic Store بجاذبية تسويقية واحترافية عالية.',
    descEn: 'High-impact commercial video showcasing brand identity, products, and commercial appeal for Sonic Store.',
    img: 'thumbs/reel_10.jpg'
  }
];

// ===== TRANSLATIONS =====
const portfolioI18n = {
  ar: {
    pageTitle: 'معرض أعمالنا | جريد ميديا برودكشن — إنتاج سينمائي وبصري',
    langLabel: 'EN',
    langTitle: 'Switch to English',
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navServices: 'خدماتنا',
    navProcess: 'مراحل العمل',
    navPortfolio: 'أعمالنا 🎬',
    navContact: 'تواصل معنا',
    heroBadge: 'معرض الأعمال السينمائية',
    heroTitle: 'نصنع الصورة ونروي القصة... <span class="text-gold">أعمال تتحدث عن نفسها</span>',
    heroDesc: 'مجموعة مختارة من أبرز مشاريعنا في إنتاج الفيديو السينمائي، تغطيات الفعاليات الكبرى، الإعلانات التجارية، وحفلات التخرج لشركاء نجاحنا في مصر.',
    statProjects: '10 أعمال سينمائية مختارة',
    statCities: '10+ مدن في أنحاء مصر',
    statQuality: '100% جودة وإنتاج سينمائي',
    filterAll: 'جميع الأعمال (10)',
    filterGraduation: 'حفلات تخرج',
    filterEvents: 'فعاليات ومناسبات',
    filterBrands: 'إعلانات وبراندات',
    filterCinematic: 'إنتاج سينمائي',
    btnWatch: 'مشاهدة على إنستجرام',
    openInstagram: 'فتح على إنستجرام',
    ctaTitle: 'معجب بأعمالنا؟ <span class="text-gold">جاهز لتنفيذ مشروعك؟</span>',
    ctaDesc: 'تواصل معنا الآن ودعنا نناقش فكرتك ونحولها لتجربة بصرية استثنائية.',
    ctaWhatsapp: 'تواصل عبر واتساب',
    ctaQuote: 'اطلب عرض سعر لمشروعك',
    footerTagline: 'صناعة محتوى بصري. إنتاج إبداعي. وتجربة متكاملة من الفكرة حتى الصورة النهائية.',
    footerLinksTitle: 'روابط سريعة',
    footerServicesTitle: 'خدماتنا',
    footerCopy: '© 2024 جريد ميديا برودكشن. جميع الحقوق محفوظة.',
    footerFounder: 'المؤسس والرئيس التنفيذي — <strong>سيف الدين مؤمن</strong>',
    tooltipWhatsapp: 'تواصل معنا'
  },
  en: {
    pageTitle: 'Our Work | Grid Media Productions — Cinematic & Visual Content',
    langLabel: 'عربي',
    langTitle: 'التبديل إلى العربية',
    navHome: 'Home',
    navAbout: 'About Us',
    navServices: 'Services',
    navProcess: 'Our Process',
    navPortfolio: 'Our Work 🎬',
    navContact: 'Contact Us',
    heroBadge: 'Cinematic Portfolio',
    heroTitle: 'We Craft the Image & Tell the Story... <span class="text-gold">Work That Speaks for Itself</span>',
    heroDesc: 'A curated selection of our premier cinematic video productions, live event coverages, commercials, and milestone celebrations across Egypt.',
    statProjects: '10 Selected Cinematic Projects',
    statCities: '10+ Cities Across Egypt',
    statQuality: '100% Cinematic Quality',
    filterAll: 'All Projects (10)',
    filterGraduation: 'Graduation Ceremonies',
    filterEvents: 'Events & Occasions',
    filterBrands: 'Commercials & Brands',
    filterCinematic: 'Cinematic Production',
    btnWatch: 'Watch on Instagram',
    openInstagram: 'Open on Instagram',
    ctaTitle: 'Impressed by Our Work? <span class="text-gold">Ready to Start Yours?</span>',
    ctaDesc: 'Get in touch with us now to discuss your idea and transform it into an unforgettable visual experience.',
    ctaWhatsapp: 'Chat on WhatsApp',
    ctaQuote: 'Request a Project Quote',
    footerTagline: 'Visual content production. Creative production. A complete experience from idea to final image.',
    footerLinksTitle: 'Quick Links',
    footerServicesTitle: 'Our Services',
    footerCopy: '© 2024 Grid Media Productions. All rights reserved.',
    footerFounder: 'Founder & CEO — <strong>Seif El-Din Moamen</strong>',
    tooltipWhatsapp: 'Contact Us'
  }
};

// Current State
let currentLang = localStorage.getItem('gridLang') || 'ar';
let activeFilter = 'all';

// DOM Elements
const html = document.documentElement;
const body = document.body;
const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');

// ===== APPLY LANGUAGE =====
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gridLang', lang);
  const t = portfolioI18n[lang];

  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';

  document.title = t.pageTitle;
  if (langLabel) langLabel.textContent = t.langLabel;
  if (langToggle) langToggle.title = t.langTitle;

  // Generic data-ar / data-en elements
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
  });

  // Specific dynamic elements
  const elMap = {
    '#portfolioBadgeText': t.heroBadge,
    '#portfolioHeroTitle': t.heroTitle,
    '#portfolioHeroDesc': t.heroDesc,
    '#statProjectsText': t.statProjects,
    '#statCitiesText': t.statCities,
    '#statQualityText': t.statQuality,
    '#ctaTitle': t.ctaTitle,
    '#ctaDesc': t.ctaDesc,
    '#ctaWhatsappText': t.ctaWhatsapp,
    '#ctaQuoteText': t.ctaQuote,
    '#footerTagline': t.footerTagline,
    '#footerLinksTitle': t.footerLinksTitle,
    '#footerServicesTitle': t.footerServicesTitle,
    '#footerCopy': t.footerCopy,
    '#footerFounder': t.footerFounder,
    '#whatsappTooltip': t.tooltipWhatsapp
  };

  Object.entries(elMap).forEach(([selector, val]) => {
    const el = document.querySelector(selector);
    if (el) {
      if (selector.includes('Title') || selector.includes('footerFounder')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update Project cards text
  projectsData.forEach((project, idx) => {
    const cardCat = document.getElementById(`card-cat-${idx}`);
    const cardTitle = document.getElementById(`card-title-${idx}`);
    const cardDesc = document.getElementById(`card-desc-${idx}`);
    const cardBtnText = document.getElementById(`card-btn-text-${idx}`);

    if (cardCat) cardCat.textContent = lang === 'ar' ? project.catAr : project.catEn;
    if (cardTitle) cardTitle.textContent = lang === 'ar' ? project.titleAr : project.titleEn;
    if (cardDesc) cardDesc.textContent = lang === 'ar' ? project.descAr : project.descEn;
    if (cardBtnText) cardBtnText.textContent = t.btnWatch;
  });
}

// ===== FILTER PROJECTS =====
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      activeFilter = btn.dataset.filter;

      projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        if (activeFilter === 'all' || cardCategory === activeFilter) {
          card.style.display = 'flex';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  // Apply initial language
  applyLanguage(currentLang);

  // Language toggle button
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(nextLang);
    });
  }

  // Mobile Hamburger Menu
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

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  document.addEventListener('click', (e) => {
    if (navbar && !navbar.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Initialize filters
  initFilters();
});
