/* ============================================
   LUXMARKET - Internationalization (i18n)
   10 languages with data-i18n attribute binding
   ============================================ */

var LuxI18n = (function () {
  'use strict';

  var LANG_KEY = 'language';
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';

  var translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.real_estate': 'Real Estate',
      'nav.cars': 'Cars',
      'nav.yachts': 'Yachts',
      'nav.jets': 'Jets',
      'nav.watches': 'Watches',
      'nav.jewelry': 'Jewelry',
      'nav.motorcycles': 'Motorcycles',
      'nav.helicopters': 'Helicopters',
      'nav.contact': 'Contact',
      'nav.sign_in': 'Sign In',
      'nav.list_item': 'List Your Item',

      // Hero
      'hero.title': 'The World\'s Luxury Marketplace',
      'hero.subtitle': 'Discover exceptional properties, vehicles, and timepieces from verified dealers worldwide.',
      'hero.search_placeholder': 'Search luxury listings...',
      'hero.location_placeholder': 'Location',
      'hero.search_btn': 'Search',
      'hero.all_categories': 'All Categories',

      // Categories
      'categories.title': 'Browse by Category',
      'categories.listings': 'listings',

      // Featured
      'featured.title': 'Featured Listings',
      'featured.view_all': 'View All Listings',
      'featured.save': 'Save',
      'featured.compare': 'Compare',
      'featured.no_image': 'No Image',

      // Dealer CTA
      'dealer_cta.title': 'Are You a Dealer?',
      'dealer_cta.subtitle': 'Join the world\'s most prestigious luxury marketplace. Reach qualified buyers and grow your business.',
      'dealer_cta.btn': 'See Dealer Plans',

      // Footer
      'footer.description': 'The world\'s premier marketplace for luxury goods. Connecting discerning buyers with verified dealers since 2024.',
      'footer.categories': 'Categories',
      'footer.for_dealers': 'For Dealers',
      'footer.pricing': 'Pricing Plans',
      'footer.dashboard': 'Dashboard',
      'footer.api': 'API Documentation',
      'footer.contact': 'Contact',

      // Cookie
      'cookie.title': 'We Value Your Privacy',
      'cookie.description': 'This website uses essential technical cookies to ensure proper functionality, and optional analytics cookies to help us understand how visitors use our platform. No personal data is sold to third parties.',
      'cookie.accept': 'Accept All',
      'cookie.essential': 'Essential Only',
      'cookie.customize': 'Customize',

      // Filters
      'filters.title': 'Filters',
      'filters.price_range': 'Price Range',
      'filters.min': 'Min',
      'filters.max': 'Max',
      'filters.location': 'Location',
      'filters.apply': 'Apply Filters',
      'filters.reset': 'Reset',
      'filters.show': 'Show Filters',
      'filters.hide': 'Hide Filters',

      // Detail
      'detail.description': 'Description',
      'detail.specifications': 'Technical Specifications',
      'detail.features': 'Features & Amenities',
      'detail.contact_dealer': 'Contact Dealer',
      'detail.schedule_viewing': 'Schedule Viewing',
      'detail.show_phone': 'Show Phone Number',
      'detail.similar': 'Similar Listings',
      'detail.member_since': 'Member since',

      // Contact
      'contact.form_title': 'Get In Touch',
      'contact.info_title': 'Contact Information',
      'contact.name': 'Full Name',
      'contact.name_placeholder': 'Your full name',
      'contact.email': 'Email Address',
      'contact.phone': 'Phone Number',
      'contact.subject': 'Subject',
      'contact.select_subject': 'Select a subject',
      'contact.subject_general': 'General Inquiry',
      'contact.subject_dealer': 'Dealer Partnership',
      'contact.subject_listing': 'Listing Question',
      'contact.subject_support': 'Technical Support',
      'contact.subject_press': 'Press & Media',
      'contact.message': 'Message',
      'contact.message_placeholder': 'How can we help you?',
      'contact.send': 'Send Message',
      'contact.phone_label': 'Phone',
      'contact.email_label': 'Email',
      'contact.address_label': 'Address',
      'contact.hours_label': 'Business Hours',
      'contact.map_placeholder': 'Map Placeholder',

      // Pricing
      'pricing.title': 'Plans Built for Luxury Dealers',
      'pricing.subtitle': 'Choose the plan that fits your business needs.',
      'pricing.monthly': 'Monthly',
      'pricing.annual': 'Annual',
      'pricing.free_trial': 'Free Trial',
      'pricing.premium': 'Premium',
      'pricing.elite': 'Elite+',
      'pricing.start_trial': 'Start Free Trial',
      'pricing.get_premium': 'Get Premium',
      'pricing.contact_sales': 'Contact Sales',
      'pricing.compare_features': 'Compare All Features',
      'pricing.faq': 'Frequently Asked Questions',

      // Dashboard
      'dashboard.title': 'Dashboard',
      'dashboard.manage': 'Manage Listings',
      'dashboard.total_listings': 'Total Listings',
      'dashboard.total_views': 'Total Views',
      'dashboard.total_inquiries': 'Total Inquiries',
      'dashboard.conversion_rate': 'Conversion Rate',
      'dashboard.views_over_time': 'Views Over Time',
      'dashboard.inquiries_by_listing': 'Inquiries by Listing',
      'dashboard.traffic_sources': 'Traffic Sources',
      'dashboard.views_by_country': 'Views by Country',
      'dashboard.your_listings': 'Your Listings',
      'dashboard.referrals': 'Referral Program',
      'dashboard.api_integration': 'API Integration'
    },

    it: {
      'nav.home': 'Home',
      'nav.real_estate': 'Immobili',
      'nav.cars': 'Auto',
      'nav.yachts': 'Yacht',
      'nav.jets': 'Jet',
      'nav.watches': 'Orologi',
      'nav.jewelry': 'Gioielli',
      'nav.motorcycles': 'Moto',
      'nav.helicopters': 'Elicotteri',
      'nav.contact': 'Contatti',
      'nav.sign_in': 'Accedi',
      'nav.list_item': 'Pubblica Annuncio',
      'hero.title': 'Il Marketplace del Lusso',
      'hero.subtitle': 'Scopri proprietà, veicoli e orologi esclusivi da rivenditori verificati in tutto il mondo.',
      'hero.search_placeholder': 'Cerca annunci di lusso...',
      'hero.location_placeholder': 'Località',
      'hero.search_btn': 'Cerca',
      'hero.all_categories': 'Tutte le Categorie',
      'categories.title': 'Sfoglia per Categoria',
      'categories.listings': 'annunci',
      'featured.title': 'Annunci in Evidenza',
      'featured.view_all': 'Vedi Tutti gli Annunci',
      'featured.save': 'Salva',
      'featured.compare': 'Confronta',
      'dealer_cta.title': 'Sei un Rivenditore?',
      'dealer_cta.subtitle': 'Unisciti al marketplace di lusso più prestigioso del mondo.',
      'dealer_cta.btn': 'Vedi i Piani Dealer',
      'cookie.title': 'La Tua Privacy è Importante',
      'cookie.description': 'Questo sito utilizza cookie tecnici essenziali e cookie analitici opzionali. Nessun dato personale viene venduto a terzi.',
      'cookie.accept': 'Accetta Tutti',
      'cookie.essential': 'Solo Essenziali',
      'cookie.customize': 'Personalizza',
      'filters.title': 'Filtri',
      'filters.price_range': 'Fascia di Prezzo',
      'filters.apply': 'Applica Filtri',
      'filters.reset': 'Reimposta',
      'contact.form_title': 'Contattaci',
      'contact.send': 'Invia Messaggio',
      'pricing.title': 'Piani per Rivenditori di Lusso',
      'pricing.subtitle': 'Scegli il piano adatto alle tue esigenze.',
      'dashboard.title': 'Pannello di Controllo'
    },

    fr: {
      'nav.home': 'Accueil',
      'nav.real_estate': 'Immobilier',
      'nav.cars': 'Voitures',
      'nav.yachts': 'Yachts',
      'nav.jets': 'Jets',
      'nav.watches': 'Montres',
      'nav.jewelry': 'Bijoux',
      'nav.motorcycles': 'Motos',
      'nav.helicopters': 'Hélicoptères',
      'hero.title': 'Le Marché du Luxe Mondial',
      'hero.subtitle': 'Découvrez des propriétés, véhicules et montres d\'exception.',
      'hero.search_btn': 'Rechercher',
      'categories.title': 'Parcourir par Catégorie',
      'featured.title': 'Annonces en Vedette',
      'cookie.title': 'Nous Respectons Votre Vie Privée',
      'cookie.accept': 'Tout Accepter',
      'cookie.essential': 'Essentiels Uniquement',
      'contact.form_title': 'Nous Contacter',
      'contact.send': 'Envoyer le Message',
      'pricing.title': 'Plans pour Concessionnaires de Luxe'
    },

    de: {
      'nav.home': 'Startseite',
      'nav.real_estate': 'Immobilien',
      'nav.cars': 'Autos',
      'nav.yachts': 'Yachten',
      'nav.jets': 'Jets',
      'nav.watches': 'Uhren',
      'nav.jewelry': 'Schmuck',
      'nav.motorcycles': 'Motorräder',
      'nav.helicopters': 'Hubschrauber',
      'hero.title': 'Der Luxus-Marktplatz der Welt',
      'hero.search_btn': 'Suchen',
      'categories.title': 'Nach Kategorie Durchsuchen',
      'featured.title': 'Ausgewählte Angebote',
      'cookie.title': 'Wir Schätzen Ihre Privatsphäre',
      'cookie.accept': 'Alle Akzeptieren',
      'contact.send': 'Nachricht Senden',
      'pricing.title': 'Pläne für Luxus-Händler'
    },

    es: {
      'nav.home': 'Inicio',
      'nav.real_estate': 'Inmuebles',
      'nav.cars': 'Coches',
      'nav.yachts': 'Yates',
      'nav.jets': 'Jets',
      'nav.watches': 'Relojes',
      'nav.jewelry': 'Joyería',
      'nav.motorcycles': 'Motos',
      'nav.helicopters': 'Helicópteros',
      'hero.title': 'El Mercado de Lujo del Mundo',
      'hero.search_btn': 'Buscar',
      'categories.title': 'Explorar por Categoría',
      'featured.title': 'Anuncios Destacados',
      'cookie.accept': 'Aceptar Todo',
      'contact.send': 'Enviar Mensaje',
      'pricing.title': 'Planes para Distribuidores de Lujo'
    },

    pt: {
      'nav.home': 'Início',
      'nav.real_estate': 'Imóveis',
      'nav.cars': 'Carros',
      'nav.yachts': 'Iates',
      'hero.title': 'O Mercado de Luxo do Mundo',
      'hero.search_btn': 'Pesquisar',
      'categories.title': 'Navegar por Categoria',
      'cookie.accept': 'Aceitar Tudo',
      'contact.send': 'Enviar Mensagem'
    },

    ar: {
      'nav.home': 'الرئيسية',
      'nav.real_estate': 'عقارات',
      'nav.cars': 'سيارات',
      'nav.yachts': 'يخوت',
      'nav.jets': 'طائرات',
      'nav.watches': 'ساعات',
      'nav.jewelry': 'مجوهرات',
      'hero.title': 'سوق الفخامة العالمي',
      'hero.search_btn': 'بحث',
      'categories.title': 'تصفح حسب الفئة',
      'cookie.accept': 'قبول الكل',
      'contact.send': 'إرسال الرسالة'
    },

    zh: {
      'nav.home': '首页',
      'nav.real_estate': '房地产',
      'nav.cars': '汽车',
      'nav.yachts': '游艇',
      'nav.jets': '私人飞机',
      'nav.watches': '手表',
      'nav.jewelry': '珠宝',
      'hero.title': '全球奢侈品市场',
      'hero.search_btn': '搜索',
      'categories.title': '按类别浏览',
      'cookie.accept': '全部接受',
      'contact.send': '发送消息'
    },

    ja: {
      'nav.home': 'ホーム',
      'nav.real_estate': '不動産',
      'nav.cars': '自動車',
      'nav.yachts': 'ヨット',
      'nav.jets': 'ジェット機',
      'nav.watches': '時計',
      'nav.jewelry': 'ジュエリー',
      'hero.title': '世界のラグジュアリーマーケットプレイス',
      'hero.search_btn': '検索',
      'categories.title': 'カテゴリー別に閲覧',
      'cookie.accept': 'すべて承認',
      'contact.send': 'メッセージを送信'
    },

    ru: {
      'nav.home': 'Главная',
      'nav.real_estate': 'Недвижимость',
      'nav.cars': 'Автомобили',
      'nav.yachts': 'Яхты',
      'nav.jets': 'Самолёты',
      'nav.watches': 'Часы',
      'nav.jewelry': 'Ювелирные Изделия',
      'hero.title': 'Мировой Рынок Роскоши',
      'hero.search_btn': 'Поиск',
      'categories.title': 'Просмотр по Категории',
      'cookie.accept': 'Принять Все',
      'contact.send': 'Отправить Сообщение'
    }
  };

  function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
      return translations[currentLang][key];
    }
    // Fallback to English
    if (translations.en[key]) {
      return translations.en[key];
    }
    return key;
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // RTL support for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    applyTranslations();
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var translated = t(key);

      // Check if we should set an attribute instead
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, translated);
      } else {
        el.textContent = translated;
      }
    });
  }

  function getLanguage() {
    return currentLang;
  }

  function init() {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }

  return {
    t: t,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    init: init
  };
})();

// Initialize
document.addEventListener('DOMContentLoaded', LuxI18n.init);
// Expose globally for language switcher
window.LuxI18n = LuxI18n;
