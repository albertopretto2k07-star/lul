/* ============================================================
   LUL — Main Application JS
   Navigation · Language Switcher · Hero · Gallery · Auth · UI
   ============================================================ */

(function () {
  'use strict';

  // ── Language definitions ─────────────────────────────────
  const LANGUAGES = {
    en: { flag: '🇬🇧', label: 'EN', name: 'English' },
    it: { flag: '🇮🇹', label: 'IT', name: 'Italiano' },
    fr: { flag: '🇫🇷', label: 'FR', name: 'Français' },
    de: { flag: '🇩🇪', label: 'DE', name: 'Deutsch' },
    es: { flag: '🇪🇸', label: 'ES', name: 'Español' },
    pt: { flag: '🇵🇹', label: 'PT', name: 'Português' },
    ru: { flag: '🇷🇺', label: 'RU', name: 'Русский' },
    ar: { flag: '🇦🇪', label: 'AR', name: 'العربية' },
    zh: { flag: '🇨🇳', label: 'ZH', name: '中文' },
    ja: { flag: '🇯🇵', label: 'JA', name: '日本語' }
  };

  // ── Translations ───────────────────────────────────────────
  const I18N = {
    en: {
      nav_cars:       'Cars',
      nav_yachts:     'Yachts',
      nav_jets:       'Private Jets',
      nav_realestate: 'Real Estate',
      publish:        'List with Us',
      login:          'Sign In',
      hero_eyebrow:   'The World\'s Finest Listings',
      hero_h1_1:      'Discover the Art of',
      hero_h1_em:     'Exceptional Living',
      hero_sub:       'Curated luxury cars, yachts, jets and real estate from elite dealers worldwide.',
      search_ph:      'Search by make, model, location…',
      btn_search:     'Search',
      cat_cars:       'Luxury Cars',
      cat_yachts:     'Yachts',
      cat_jets:       'Private Jets',
      cat_realestate: 'Real Estate',
      featured_label: 'Featured Listings',
      featured_title: 'Handpicked for Discerning Buyers',
      view_all:       'View All Listings',
      card_details:   'View Details',
      card_featured:  'Featured',
      card_new:       'New',
      categories_label:'Browse by Category',
      categories_title:'Every Luxury, One Destination',
      how_label:      'How It Works',
      how_title:      'Simple. Elegant. Effortless.',
      how_step1_h:    'Browse & Discover',
      how_step1_p:    'Explore thousands of curated listings across every luxury category, filtered by location, price, and specifications.',
      how_step2_h:    'Connect Directly',
      how_step2_p:    'Contact verified dealers and private sellers directly. No middlemen, no hidden fees — pure luxury at your fingertips.',
      how_step3_h:    'Own with Confidence',
      how_step3_p:    'Every listing is verified. Benefit from our concierge support, legal guidance, and post-sale assistance worldwide.',
      dealer_h:       'Are you a <span>luxury dealer</span>?<br>Start listing today — free.',
      dealer_p:       'Join thousands of elite dealers worldwide. Start with a free trial, grow your reach, and connect with high-net-worth buyers across 140+ countries. No commitment. No credit card.',
      dealer_cta:     'Start Free Trial',
      dealer_plans:   'View Plans',
      footer_desc:    'The world\'s most exclusive marketplace for luxury cars, yachts, private jets, and real estate.',
      footer_explore: 'Explore',
      footer_company: 'Company',
      footer_contact: 'Contact Us',
      footer_about:   'About LUL',
      footer_dealers: 'For Dealers',
      footer_careers: 'Careers',
      footer_press:   'Press',
      footer_blog:    'Blog',
      footer_privacy: 'Privacy Policy',
      footer_terms:   'Terms of Service',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. All rights reserved.',
      // Auth modal
      auth_signin:       'Sign In',
      auth_signup:       'Create Account',
      auth_email:        'Email address',
      auth_password:     'Password',
      auth_name:         'Full name',
      auth_confirm_pw:   'Confirm password',
      auth_forgot:       'Forgot password?',
      auth_no_account:   'Don\'t have an account?',
      auth_has_account:  'Already have an account?',
      auth_btn_signin:   'Sign In',
      auth_btn_signup:   'Create Account',
      auth_or:           'or continue with',
      // Cookie learn more
      cookie_title:      'Cookie Policy',
      cookie_intro:      'This platform employs cookies and analogous tracking technologies to ensure optimal functionality and to enhance the browsing experience. The following sections provide a comprehensive overview of the categories of cookies utilised and the specific purposes they serve.',
      cookie_essential_h:'Essential Cookies',
      cookie_essential_p:'Essential cookies are strictly necessary for the proper operation of this website. They facilitate core functionalities including, but not limited to, session management, security protocols, and the retention of language preferences. As these cookies are integral to the delivery of the service, they cannot be deactivated by the user.',
      cookie_analytics_h:'Analytics Cookies',
      cookie_analytics_p:'Analytics cookies are employed to gather anonymised, aggregated data regarding visitor interactions with the platform — encompassing pages visited, session duration, device classification, and browser characteristics. The information obtained through these cookies enables continuous improvement of the platform experience and facilitates a deeper understanding of user behaviour patterns. Third-party analytical services, such as Google Analytics, may be utilised for this purpose.',
      cookie_marketing_h:'Marketing Cookies',
      cookie_marketing_p:'Marketing cookies serve the purpose of delivering relevant promotional content and measuring the effectiveness of advertising initiatives. These cookies assist in identifying which campaigns and communication channels yield the highest engagement within the target audience. It should be noted that such cookies may be placed by authorised third-party advertising partners operating on behalf of this platform.',
      cookie_social_h:   'Social Media Cookies',
      cookie_social_p:   'Social media cookies are deployed by external social networking services integrated into this website. Their primary function is to enable users to share content across their respective networks. It should be acknowledged that these cookies possess the capability to monitor browsing activity across multiple websites and to construct interest-based user profiles.',
      cookie_close:      'Close',
      // About page
      about_eyebrow:     'About Us',
      about_title:       'The World\'s Most Exclusive Marketplace',
      about_subtitle:    'LUL — Luxury Unique Listings connects discerning buyers with elite dealers and private sellers of the world\'s finest luxury assets.',
      about_mission_h:   'Our Mission',
      about_mission_p:   'To create a single, trusted destination where luxury meets technology. We believe that acquiring an exceptional car, yacht, jet, or property should be as refined as the asset itself — seamless, transparent, and global.',
      about_reach_h:     'Global Reach',
      about_reach_p:     'With over 3,500 verified dealers across 140+ countries, LUL is the go-to platform for high-net-worth individuals seeking the finest luxury assets available worldwide.',
      about_trust_h:     'Trust & Verification',
      about_trust_p:     'Every dealer on our platform undergoes a rigorous verification process. We provide concierge support, legal guidance, and post-sale assistance worldwide.',
      about_social_label:'Stay Connected',
      about_social_title:'Follow Us on Social Media',
      about_social_desc: 'Stay up to date with the latest luxury listings, exclusive events, and industry insights by following our official channels.'
    },
    it: {
      nav_cars:       'Auto',
      nav_yachts:     'Yacht',
      nav_jets:       'Jet Privati',
      nav_realestate: 'Immobili',
      publish:        'Pubblica Inserzione',
      login:          'Accedi',
      hero_eyebrow:   'I Migliori Listing al Mondo',
      hero_h1_1:      'Scopri l\'Arte del',
      hero_h1_em:     'Vivere Eccellente',
      hero_sub:       'Auto di lusso, yacht, jet e immobili da dealer d\'élite in tutto il mondo.',
      search_ph:      'Cerca per marca, modello, luogo…',
      btn_search:     'Cerca',
      cat_cars:       'Auto di Lusso',
      cat_yachts:     'Yacht',
      cat_jets:       'Jet Privati',
      cat_realestate: 'Immobili',
      featured_label: 'Inserzioni in Evidenza',
      featured_title: 'Selezionate per Acquirenti Esigenti',
      view_all:       'Vedi Tutte le Inserzioni',
      card_details:   'Dettagli',
      card_featured:  'In Evidenza',
      card_new:       'Nuovo',
      categories_label:'Sfoglia per Categoria',
      categories_title:'Ogni Lusso, Un\'Unica Destinazione',
      how_label:      'Come Funziona',
      how_title:      'Semplice. Elegante. Senza Sforzo.',
      how_step1_h:    'Esplora e Scopri',
      how_step1_p:    'Esplora migliaia di inserzioni selezionate in ogni categoria di lusso, filtrando per località, prezzo e specifiche.',
      how_step2_h:    'Contatta Direttamente',
      how_step2_p:    'Contatta dealer e venditori privati verificati direttamente. Nessun intermediario, nessun costo nascosto.',
      how_step3_h:    'Acquista con Fiducia',
      how_step3_p:    'Ogni inserzione è verificata. Approfitta del nostro supporto concierge, assistenza legale e post-vendita in tutto il mondo.',
      dealer_h:       'Sei un <span>dealer di lusso</span>?<br>Inizia a pubblicare oggi — gratis.',
      dealer_p:       'Unisciti a migliaia di dealer d\'élite nel mondo. Inizia con una prova gratuita, amplia la tua visibilità e connettiti con acquirenti facoltosi in oltre 140 paesi. Senza impegno. Senza carta di credito.',
      dealer_cta:     'Inizia Prova Gratuita',
      dealer_plans:   'Vedi i Piani',
      footer_desc:    'Il marketplace più esclusivo al mondo per auto di lusso, yacht, jet privati e immobili.',
      footer_explore: 'Esplora',
      footer_company: 'Azienda',
      footer_contact: 'Contattaci',
      footer_about:   'Chi Siamo',
      footer_dealers: 'Per i Dealer',
      footer_careers: 'Carriere',
      footer_press:   'Stampa',
      footer_blog:    'Blog',
      footer_privacy: 'Privacy',
      footer_terms:   'Termini di Servizio',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Tutti i diritti riservati.',
      auth_signin:       'Accedi',
      auth_signup:       'Crea Account',
      auth_email:        'Indirizzo email',
      auth_password:     'Password',
      auth_name:         'Nome completo',
      auth_confirm_pw:   'Conferma password',
      auth_forgot:       'Password dimenticata?',
      auth_no_account:   'Non hai un account?',
      auth_has_account:  'Hai già un account?',
      auth_btn_signin:   'Accedi',
      auth_btn_signup:   'Crea Account',
      auth_or:           'oppure continua con',
      cookie_title:      'Informativa sui Cookie',
      cookie_intro:      'La presente piattaforma si avvale di cookie e tecnologie di tracciamento analoghe al fine di garantire il corretto funzionamento del servizio e di ottimizzare l\'esperienza di navigazione. Le sezioni seguenti forniscono un quadro dettagliato delle categorie di cookie impiegati e delle relative finalità.',
      cookie_essential_h:'Cookie Essenziali',
      cookie_essential_p:'I cookie essenziali risultano strettamente necessari per il corretto funzionamento del sito web. Essi consentono l\'erogazione di funzionalità fondamentali quali, a titolo esemplificativo, la gestione della sessione, i protocolli di sicurezza e la memorizzazione delle preferenze linguistiche. Trattandosi di componenti indispensabili per la fruizione del servizio, la loro disattivazione da parte dell\'utente non è consentita.',
      cookie_analytics_h:'Cookie Analitici',
      cookie_analytics_p:'I cookie analitici vengono impiegati per la raccolta di dati anonimi e aggregati relativi alle interazioni degli utenti con la piattaforma, ivi comprese le pagine consultate, la durata delle sessioni, la tipologia di dispositivo e le caratteristiche del browser. Le informazioni acquisite attraverso tali cookie consentono il miglioramento continuo dell\'esperienza sulla piattaforma. A tal fine, possono essere utilizzati servizi analitici di terze parti, come Google Analytics.',
      cookie_marketing_h:'Cookie di Marketing',
      cookie_marketing_p:'I cookie di marketing hanno la finalità di veicolare contenuti promozionali pertinenti e di misurare l\'efficacia delle iniziative pubblicitarie. Tali cookie consentono di individuare le campagne e i canali di comunicazione che generano il maggiore coinvolgimento presso il pubblico di riferimento. Si precisa che detti cookie possono essere installati da partner pubblicitari terzi autorizzati che operano per conto della piattaforma.',
      cookie_social_h:   'Cookie dei Social Media',
      cookie_social_p:   'I cookie dei social media sono installati da servizi di social network esterni integrati nel presente sito web. La loro funzione primaria consiste nel consentire agli utenti la condivisione dei contenuti attraverso le rispettive reti sociali. Si rende noto che tali cookie possono monitorare l\'attività di navigazione su più siti web e costruire profili basati sugli interessi dell\'utente.',
      cookie_close:      'Chiudi',
      about_eyebrow:     'Chi Siamo',
      about_title:       'Il Marketplace Più Esclusivo al Mondo',
      about_subtitle:    'LUL — Luxury Unique Listings mette in contatto acquirenti esigenti con dealer d\'élite e venditori privati dei più pregiati beni di lusso al mondo.',
      about_mission_h:   'La Nostra Missione',
      about_mission_p:   'Creare un\'unica destinazione affidabile dove il lusso incontra la tecnologia. Acquistare un\'auto, uno yacht, un jet o un immobile esclusivo deve essere un\'esperienza raffinata quanto il bene stesso.',
      about_reach_h:     'Portata Globale',
      about_reach_p:     'Con oltre 3.500 dealer verificati in più di 140 paesi, LUL è la piattaforma di riferimento per individui facoltosi alla ricerca dei migliori beni di lusso.',
      about_trust_h:     'Fiducia e Verifica',
      about_trust_p:     'Ogni dealer sulla nostra piattaforma viene sottoposto a un rigoroso processo di verifica. Offriamo supporto concierge, assistenza legale e post-vendita a livello mondiale.',
      about_social_label:'Resta Connesso',
      about_social_title:'Seguici sui Social Media',
      about_social_desc: 'Rimani aggiornato sulle ultime inserzioni di lusso, eventi esclusivi e approfondimenti del settore seguendo i nostri canali ufficiali.'
    },
    fr: {
      nav_cars:       'Voitures',
      nav_yachts:     'Yachts',
      nav_jets:       'Jets Privés',
      nav_realestate: 'Immobilier',
      publish:        'Publier une annonce',
      login:          'Connexion',
      hero_eyebrow:   'Les Meilleures Annonces du Monde',
      hero_h1_1:      'Découvrez l\'Art de',
      hero_h1_em:     'Vivre Exceptionnellement',
      hero_sub:       'Voitures de luxe, yachts, jets et immobilier de revendeurs d\'élite dans le monde entier.',
      search_ph:      'Rechercher par marque, modèle, lieu…',
      btn_search:     'Rechercher',
      cat_cars:       'Voitures de Luxe',
      cat_yachts:     'Yachts',
      cat_jets:       'Jets Privés',
      cat_realestate: 'Immobilier',
      featured_label: 'Annonces en Vedette',
      featured_title: 'Sélectionnées pour des Acheteurs Exigeants',
      view_all:       'Voir Toutes les Annonces',
      card_details:   'Détails',
      card_featured:  'En Vedette',
      card_new:       'Nouveau',
      categories_label:'Parcourir par Catégorie',
      categories_title:'Chaque Luxe, Une Destination',
      how_label:      'Comment Ça Marche',
      how_title:      'Simple. Élégant. Sans Effort.',
      how_step1_h:    'Parcourir et Découvrir',
      how_step1_p:    'Explorez des milliers d\'annonces sélectionnées dans toutes les catégories de luxe, filtrées par lieu, prix et spécifications.',
      how_step2_h:    'Contacter Directement',
      how_step2_p:    'Contactez directement des revendeurs et vendeurs privés vérifiés. Sans intermédiaires, sans frais cachés.',
      how_step3_h:    'Acheter en Confiance',
      how_step3_p:    'Chaque annonce est vérifiée. Bénéficiez de notre service conciergerie, assistance juridique et après-vente dans le monde entier.',
      dealer_h:       'Vous êtes un <span>revendeur de luxe</span> ?<br>Commencez à publier aujourd\'hui — gratuitement.',
      dealer_p:       'Rejoignez des milliers de revendeurs d\'élite dans le monde. Commencez avec un essai gratuit et connectez-vous avec des acheteurs fortunés dans plus de 140 pays.',
      dealer_cta:     'Essai Gratuit',
      dealer_plans:   'Voir les Plans',
      footer_desc:    'Le marketplace le plus exclusif au monde pour les voitures de luxe, yachts, jets privés et l\'immobilier.',
      footer_explore: 'Explorer',
      footer_company: 'Entreprise',
      footer_contact: 'Contactez-nous',
      footer_about:   'À Propos',
      footer_dealers: 'Pour les Revendeurs',
      footer_careers: 'Carrières',
      footer_press:   'Presse',
      footer_blog:    'Blog',
      footer_privacy: 'Politique de Confidentialité',
      footer_terms:   'Conditions d\'Utilisation',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Tous droits réservés.',
      auth_signin:     'Connexion',
      auth_signup:     'Créer un Compte',
      auth_email:      'Adresse email',
      auth_password:   'Mot de passe',
      auth_name:       'Nom complet',
      auth_confirm_pw: 'Confirmer le mot de passe',
      auth_forgot:     'Mot de passe oublié ?',
      auth_no_account: 'Vous n\'avez pas de compte ?',
      auth_has_account:'Vous avez déjà un compte ?',
      auth_btn_signin: 'Se Connecter',
      auth_btn_signup: 'Créer un Compte',
      auth_or:         'ou continuer avec',
      cookie_title:    'Politique de Cookies',
      cookie_intro:    'Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre plateforme.',
      cookie_essential_h:'Cookies Essentiels',
      cookie_essential_p:'Ces cookies sont nécessaires au bon fonctionnement du site.',
      cookie_analytics_h:'Cookies Analytiques',
      cookie_analytics_p:'Nous utilisons des cookies analytiques pour collecter des données anonymes sur l\'utilisation du site.',
      cookie_marketing_h:'Cookies Marketing',
      cookie_marketing_p:'Les cookies marketing sont utilisés pour diffuser des publicités ciblées et mesurer l\'efficacité des campagnes.',
      cookie_social_h:   'Cookies Réseaux Sociaux',
      cookie_social_p:   'Ces cookies sont définis par les services de réseaux sociaux ajoutés au site.',
      cookie_close:      'Fermer'
    },
    de: {
      nav_cars:       'Autos',
      nav_yachts:     'Yachten',
      nav_jets:       'Privatjets',
      nav_realestate: 'Immobilien',
      publish:        'Inserat aufgeben',
      login:          'Anmelden',
      hero_eyebrow:   'Die Besten Listings der Welt',
      hero_h1_1:      'Entdecken Sie die Kunst des',
      hero_h1_em:     'Außergewöhnlichen Lebens',
      hero_sub:       'Luxusautos, Yachten, Jets und Immobilien von Elite-Händlern weltweit.',
      search_ph:      'Nach Marke, Modell, Ort suchen…',
      btn_search:     'Suchen',
      cat_cars:       'Luxusautos',
      cat_yachts:     'Yachten',
      cat_jets:       'Privatjets',
      cat_realestate: 'Immobilien',
      featured_label: 'Empfohlene Inserate',
      featured_title: 'Handverlesen für Anspruchsvolle Käufer',
      view_all:       'Alle Inserate Anzeigen',
      card_details:   'Details',
      card_featured:  'Empfohlen',
      card_new:       'Neu',
      categories_label:'Nach Kategorie Durchsuchen',
      categories_title:'Jeder Luxus, Ein Ziel',
      how_label:      'So Funktioniert Es',
      how_title:      'Einfach. Elegant. Mühelos.',
      how_step1_h:    'Durchsuchen & Entdecken',
      how_step1_p:    'Entdecken Sie Tausende von kuratierten Inseraten in jeder Luxuskategorie.',
      how_step2_h:    'Direkt Kontaktieren',
      how_step2_p:    'Kontaktieren Sie verifizierte Händler und Privatverkäufer direkt. Keine Vermittler, keine versteckten Gebühren.',
      how_step3_h:    'Mit Vertrauen Kaufen',
      how_step3_p:    'Jedes Inserat ist verifiziert. Profitieren Sie von unserem Concierge-Support weltweit.',
      dealer_h:       'Sind Sie ein <span>Luxus-Händler</span>?<br>Starten Sie heute — kostenlos.',
      dealer_p:       'Treten Sie Tausenden von Elite-Händlern weltweit bei. Kostenlose Testversion, keine Kreditkarte erforderlich.',
      dealer_cta:     'Kostenlos Starten',
      dealer_plans:   'Pläne Ansehen',
      footer_desc:    'Der exklusivste Marktplatz der Welt für Luxusautos, Yachten, Privatjets und Immobilien.',
      footer_explore: 'Entdecken',
      footer_company: 'Unternehmen',
      footer_contact: 'Kontakt',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Alle Rechte vorbehalten.',
      auth_signin:     'Anmelden',
      auth_signup:     'Konto Erstellen',
      auth_email:      'E-Mail-Adresse',
      auth_password:   'Passwort',
      auth_name:       'Vollständiger Name',
      auth_confirm_pw: 'Passwort bestätigen',
      auth_forgot:     'Passwort vergessen?',
      auth_no_account: 'Noch kein Konto?',
      auth_has_account:'Bereits ein Konto?',
      auth_btn_signin: 'Anmelden',
      auth_btn_signup: 'Konto Erstellen',
      auth_or:         'oder fortfahren mit',
      cookie_title:    'Cookie-Richtlinie',
      cookie_intro:    'Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern.',
      cookie_essential_h:'Essentielle Cookies',
      cookie_essential_p:'Diese Cookies sind für die Funktion der Website erforderlich.',
      cookie_analytics_h:'Analytische Cookies',
      cookie_analytics_p:'Wir verwenden analytische Cookies, um anonyme Daten über die Nutzung zu sammeln.',
      cookie_marketing_h:'Marketing-Cookies',
      cookie_marketing_p:'Marketing-Cookies werden für gezielte Werbung und zur Messung der Kampagneneffektivität verwendet.',
      cookie_social_h:   'Social-Media-Cookies',
      cookie_social_p:   'Diese Cookies werden von sozialen Medien gesetzt.',
      cookie_close:      'Schließen'
    },
    es: {
      nav_cars:       'Coches',
      nav_yachts:     'Yates',
      nav_jets:       'Jets Privados',
      nav_realestate: 'Inmuebles',
      publish:        'Publicar Anuncio',
      login:          'Iniciar Sesión',
      hero_eyebrow:   'Los Mejores Listings del Mundo',
      hero_h1_1:      'Descubre el Arte de',
      hero_h1_em:     'Vivir Excepcionalmente',
      hero_sub:       'Coches de lujo, yates, jets e inmuebles de distribuidores de élite en todo el mundo.',
      search_ph:      'Buscar por marca, modelo, lugar…',
      btn_search:     'Buscar',
      cat_cars:       'Coches de Lujo',
      cat_yachts:     'Yates',
      cat_jets:       'Jets Privados',
      cat_realestate: 'Inmuebles',
      featured_label: 'Anuncios Destacados',
      featured_title: 'Seleccionados para Compradores Exigentes',
      view_all:       'Ver Todos los Anuncios',
      card_details:   'Detalles',
      card_featured:  'Destacado',
      card_new:       'Nuevo',
      categories_label:'Explorar por Categoría',
      categories_title:'Todo el Lujo, Un Solo Destino',
      how_label:      'Cómo Funciona',
      how_title:      'Simple. Elegante. Sin Esfuerzo.',
      how_step1_h:    'Explorar y Descubrir',
      how_step1_p:    'Explora miles de anuncios seleccionados en todas las categorías de lujo.',
      how_step2_h:    'Contactar Directamente',
      how_step2_p:    'Contacta directamente con distribuidores y vendedores verificados. Sin intermediarios.',
      how_step3_h:    'Comprar con Confianza',
      how_step3_p:    'Cada anuncio está verificado. Aprovecha nuestro soporte concierge mundial.',
      dealer_h:       '¿Eres un <span>distribuidor de lujo</span>?<br>Empieza a publicar hoy — gratis.',
      dealer_p:       'Únete a miles de distribuidores de élite. Prueba gratuita, sin tarjeta de crédito.',
      dealer_cta:     'Prueba Gratuita',
      dealer_plans:   'Ver Planes',
      footer_desc:    'El marketplace más exclusivo del mundo para coches de lujo, yates, jets privados e inmuebles.',
      footer_explore: 'Explorar',
      footer_company: 'Empresa',
      footer_contact: 'Contacto',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Todos los derechos reservados.',
      auth_signin:     'Iniciar Sesión',
      auth_signup:     'Crear Cuenta',
      auth_email:      'Correo electrónico',
      auth_password:   'Contraseña',
      auth_name:       'Nombre completo',
      auth_confirm_pw: 'Confirmar contraseña',
      auth_forgot:     '¿Olvidaste tu contraseña?',
      auth_no_account: '¿No tienes cuenta?',
      auth_has_account:'¿Ya tienes cuenta?',
      auth_btn_signin: 'Iniciar Sesión',
      auth_btn_signup: 'Crear Cuenta',
      auth_or:         'o continuar con',
      cookie_title:    'Política de Cookies',
      cookie_intro:    'Utilizamos cookies y tecnologías similares para mejorar tu experiencia.',
      cookie_essential_h:'Cookies Esenciales',
      cookie_essential_p:'Estas cookies son necesarias para el funcionamiento del sitio.',
      cookie_analytics_h:'Cookies Analíticas',
      cookie_analytics_p:'Usamos cookies analíticas para recopilar datos anónimos sobre el uso del sitio.',
      cookie_marketing_h:'Cookies de Marketing',
      cookie_marketing_p:'Las cookies de marketing se usan para publicidad dirigida.',
      cookie_social_h:   'Cookies de Redes Sociales',
      cookie_social_p:   'Estas cookies son establecidas por los servicios de redes sociales.',
      cookie_close:      'Cerrar'
    },
    pt: {
      nav_cars:       'Carros',
      nav_yachts:     'Iates',
      nav_jets:       'Jatos Privados',
      nav_realestate: 'Imóveis',
      publish:        'Publicar Anúncio',
      login:          'Entrar',
      hero_eyebrow:   'Os Melhores Anúncios do Mundo',
      hero_h1_1:      'Descubra a Arte de',
      hero_h1_em:     'Viver Excepcionalmente',
      hero_sub:       'Carros de luxo, iates, jatos e imóveis de revendedores de elite em todo o mundo.',
      search_ph:      'Pesquisar por marca, modelo, local…',
      btn_search:     'Pesquisar',
      cat_cars:       'Carros de Luxo',
      cat_yachts:     'Iates',
      cat_jets:       'Jatos Privados',
      cat_realestate: 'Imóveis',
      featured_label: 'Anúncios em Destaque',
      featured_title: 'Selecionados para Compradores Exigentes',
      view_all:       'Ver Todos os Anúncios',
      card_details:   'Detalhes',
      card_featured:  'Destaque',
      card_new:       'Novo',
      categories_label:'Explorar por Categoria',
      categories_title:'Todo o Luxo, Um Só Destino',
      how_label:      'Como Funciona',
      how_title:      'Simples. Elegante. Sem Esforço.',
      how_step1_h:    'Explorar e Descobrir',
      how_step1_p:    'Explore milhares de anúncios selecionados em todas as categorias de luxo.',
      how_step2_h:    'Contactar Diretamente',
      how_step2_p:    'Contacte revendedores e vendedores verificados diretamente. Sem intermediários.',
      how_step3_h:    'Comprar com Confiança',
      how_step3_p:    'Cada anúncio é verificado. Beneficie do nosso suporte concierge mundial.',
      dealer_h:       'É um <span>revendedor de luxo</span>?<br>Comece a publicar hoje — grátis.',
      dealer_p:       'Junte-se a milhares de revendedores de elite. Teste grátis, sem cartão de crédito.',
      dealer_cta:     'Teste Gratuito',
      dealer_plans:   'Ver Planos',
      footer_desc:    'O marketplace mais exclusivo do mundo para carros de luxo, iates, jatos privados e imóveis.',
      footer_explore: 'Explorar',
      footer_company: 'Empresa',
      footer_contact: 'Contacto',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Todos os direitos reservados.',
      auth_signin:     'Entrar',
      auth_signup:     'Criar Conta',
      auth_email:      'Endereço de email',
      auth_password:   'Palavra-passe',
      auth_name:       'Nome completo',
      auth_confirm_pw: 'Confirmar palavra-passe',
      auth_forgot:     'Esqueceu a palavra-passe?',
      auth_no_account: 'Não tem conta?',
      auth_has_account:'Já tem conta?',
      auth_btn_signin: 'Entrar',
      auth_btn_signup: 'Criar Conta',
      auth_or:         'ou continuar com',
      cookie_title:    'Política de Cookies',
      cookie_intro:    'Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência.',
      cookie_essential_h:'Cookies Essenciais',
      cookie_essential_p:'Estes cookies são necessários para o funcionamento do site.',
      cookie_analytics_h:'Cookies Analíticos',
      cookie_analytics_p:'Usamos cookies analíticos para recolher dados anónimos sobre a utilização do site.',
      cookie_marketing_h:'Cookies de Marketing',
      cookie_marketing_p:'Os cookies de marketing são usados para publicidade direcionada.',
      cookie_social_h:   'Cookies de Redes Sociais',
      cookie_social_p:   'Estes cookies são definidos pelos serviços de redes sociais.',
      cookie_close:      'Fechar'
    },
    ru: {
      nav_cars:       'Авто',
      nav_yachts:     'Яхты',
      nav_jets:       'Частные Джеты',
      nav_realestate: 'Недвижимость',
      publish:        'Разместить объявление',
      login:          'Войти',
      hero_eyebrow:   'Лучшие объявления в мире',
      hero_h1_1:      'Откройте для себя Искусство',
      hero_h1_em:     'Исключительной Жизни',
      hero_sub:       'Элитные автомобили, яхты, джеты и недвижимость от лучших дилеров по всему миру.',
      search_ph:      'Поиск по марке, модели, месту…',
      btn_search:     'Поиск',
      cat_cars:       'Люксовые Авто',
      cat_yachts:     'Яхты',
      cat_jets:       'Частные Джеты',
      cat_realestate: 'Недвижимость',
      featured_label: 'Избранные Объявления',
      featured_title: 'Подобрано для Взыскательных Покупателей',
      view_all:       'Смотреть Все Объявления',
      card_details:   'Подробнее',
      card_featured:  'Избранное',
      card_new:       'Новое',
      categories_label:'Обзор по Категориям',
      categories_title:'Каждая Роскошь — Одно Место',
      how_label:      'Как Это Работает',
      how_title:      'Просто. Элегантно. Без Усилий.',
      how_step1_h:    'Просматривайте и Открывайте',
      how_step1_p:    'Исследуйте тысячи отобранных объявлений во всех категориях роскоши.',
      how_step2_h:    'Связывайтесь Напрямую',
      how_step2_p:    'Свяжитесь с проверенными дилерами напрямую. Без посредников.',
      how_step3_h:    'Покупайте с Уверенностью',
      how_step3_p:    'Каждое объявление проверено. Воспользуйтесь нашей консьерж-поддержкой по всему миру.',
      dealer_h:       'Вы <span>люксовый дилер</span>?<br>Начните размещать объявления — бесплатно.',
      dealer_p:       'Присоединяйтесь к тысячам элитных дилеров. Бесплатная пробная версия, без кредитной карты.',
      dealer_cta:     'Бесплатная Пробная Версия',
      dealer_plans:   'Посмотреть Планы',
      footer_desc:    'Самый эксклюзивный маркетплейс в мире для люксовых автомобилей, яхт, джетов и недвижимости.',
      footer_explore: 'Обзор',
      footer_company: 'Компания',
      footer_contact: 'Контакты',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Все права защищены.',
      auth_signin:     'Войти',
      auth_signup:     'Создать Аккаунт',
      auth_email:      'Электронная почта',
      auth_password:   'Пароль',
      auth_name:       'Полное имя',
      auth_confirm_pw: 'Подтвердите пароль',
      auth_forgot:     'Забыли пароль?',
      auth_no_account: 'Нет аккаунта?',
      auth_has_account:'Уже есть аккаунт?',
      auth_btn_signin: 'Войти',
      auth_btn_signup: 'Создать Аккаунт',
      auth_or:         'или продолжить с',
      cookie_title:    'Политика Cookies',
      cookie_intro:    'Мы используем файлы cookie для улучшения вашего опыта.',
      cookie_essential_h:'Основные Cookie',
      cookie_essential_p:'Эти файлы cookie необходимы для работы сайта.',
      cookie_analytics_h:'Аналитические Cookie',
      cookie_analytics_p:'Мы используем аналитические cookie для сбора анонимных данных.',
      cookie_marketing_h:'Маркетинговые Cookie',
      cookie_marketing_p:'Маркетинговые cookie используются для таргетированной рекламы.',
      cookie_social_h:   'Cookie Социальных Сетей',
      cookie_social_p:   'Эти cookie устанавливаются сервисами социальных сетей.',
      cookie_close:      'Закрыть'
    },
    ar: {
      nav_cars:       'سيارات',
      nav_yachts:     'يخوت',
      nav_jets:       'طائرات خاصة',
      nav_realestate: 'عقارات',
      publish:        'أنشر إعلانك',
      login:          'تسجيل الدخول',
      hero_eyebrow:   'أفضل الإعلانات في العالم',
      hero_h1_1:      'اكتشف فن',
      hero_h1_em:     'الحياة الاستثنائية',
      hero_sub:       'سيارات فاخرة ويخوت وطائرات وعقارات من تجار النخبة حول العالم.',
      search_ph:      'ابحث حسب الماركة أو الموديل أو الموقع…',
      btn_search:     'بحث',
      cat_cars:       'سيارات فاخرة',
      cat_yachts:     'يخوت',
      cat_jets:       'طائرات خاصة',
      cat_realestate: 'عقارات',
      featured_label: 'إعلانات مميزة',
      featured_title: 'مختارة لمشترين مميزين',
      view_all:       'عرض جميع الإعلانات',
      card_details:   'التفاصيل',
      card_featured:  'مميز',
      card_new:       'جديد',
      categories_label:'تصفح حسب الفئة',
      categories_title:'كل الرفاهية في مكان واحد',
      how_label:      'كيف يعمل',
      how_title:      'بسيط. أنيق. سهل.',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. جميع الحقوق محفوظة.',
      auth_signin:     'تسجيل الدخول',
      auth_signup:     'إنشاء حساب',
      auth_email:      'البريد الإلكتروني',
      auth_password:   'كلمة المرور',
      auth_name:       'الاسم الكامل',
      auth_confirm_pw: 'تأكيد كلمة المرور',
      auth_forgot:     'نسيت كلمة المرور؟',
      auth_no_account: 'ليس لديك حساب؟',
      auth_has_account:'لديك حساب بالفعل؟',
      auth_btn_signin: 'دخول',
      auth_btn_signup: 'إنشاء حساب',
      auth_or:         'أو المتابعة مع',
      cookie_close:    'إغلاق'
    },
    zh: {
      nav_cars:       '豪车',
      nav_yachts:     '游艇',
      nav_jets:       '私人飞机',
      nav_realestate: '房产',
      publish:        '发布列表',
      login:          '登录',
      hero_eyebrow:   '全球顶级列表',
      hero_h1_1:      '探索',
      hero_h1_em:     '卓越生活的艺术',
      hero_sub:       '来自全球精英经销商的豪华汽车、游艇、飞机和房产。',
      search_ph:      '按品牌、型号、地点搜索…',
      btn_search:     '搜索',
      cat_cars:       '豪华汽车',
      cat_yachts:     '游艇',
      cat_jets:       '私人飞机',
      cat_realestate: '房产',
      featured_label: '精选列表',
      featured_title: '为挑剔的买家精心挑选',
      view_all:       '查看所有列表',
      card_details:   '查看详情',
      card_featured:  '精选',
      card_new:       '新品',
      categories_label:'按类别浏览',
      categories_title:'所有奢华，一个目的地',
      how_label:      '工作原理',
      how_title:      '简单。优雅。轻松。',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. 版权所有。',
      auth_signin:     '登录',
      auth_signup:     '创建账户',
      auth_email:      '电子邮件地址',
      auth_password:   '密码',
      auth_name:       '全名',
      auth_confirm_pw: '确认密码',
      auth_forgot:     '忘记密码？',
      auth_no_account: '没有账户？',
      auth_has_account:'已有账户？',
      auth_btn_signin: '登录',
      auth_btn_signup: '创建账户',
      auth_or:         '或继续使用',
      cookie_close:    '关闭'
    },
    ja: {
      nav_cars:       '高級車',
      nav_yachts:     'ヨット',
      nav_jets:       'プライベートジェット',
      nav_realestate: '不動産',
      publish:        '掲載する',
      login:          'ログイン',
      hero_eyebrow:   '世界最高のリスティング',
      hero_h1_1:      '発見する',
      hero_h1_em:     '特別な暮らしの芸術',
      hero_sub:       '世界中のエリートディーラーによる高級車、ヨット、ジェット、不動産。',
      search_ph:      'ブランド、モデル、場所で検索…',
      btn_search:     '検索',
      cat_cars:       '高級車',
      cat_yachts:     'ヨット',
      cat_jets:       'プライベートジェット',
      cat_realestate: '不動産',
      featured_label: '注目のリスティング',
      featured_title: '目の肥えたバイヤーのために厳選',
      view_all:       'すべてのリスティングを見る',
      card_details:   '詳細を見る',
      card_featured:  '注目',
      card_new:       '新着',
      categories_label:'カテゴリーで探す',
      categories_title:'すべての贅沢を、一つの場所で',
      how_label:      '仕組み',
      how_title:      'シンプル。エレガント。楽々。',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. 全著作権所有。',
      auth_signin:     'ログイン',
      auth_signup:     'アカウント作成',
      auth_email:      'メールアドレス',
      auth_password:   'パスワード',
      auth_name:       '氏名',
      auth_confirm_pw: 'パスワード確認',
      auth_forgot:     'パスワードをお忘れですか？',
      auth_no_account: 'アカウントをお持ちでないですか？',
      auth_has_account:'既にアカウントをお持ちですか？',
      auth_btn_signin: 'ログイン',
      auth_btn_signup: 'アカウント作成',
      auth_or:         'または以下で続行',
      cookie_close:    '閉じる'
    }
  };

  // ── Current language state ───────────────────────────────
  let currentLang = localStorage.getItem('lul_lang') || 'en';

  function applyLanguage(lang) {
    if (!LANGUAGES[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('lul_lang', lang);
    document.documentElement.lang = lang;

    const t = I18N[lang] || I18N.en;
    const fallback = I18N.en;

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t[key] !== undefined ? t[key] : fallback[key];
      if (val !== undefined) {
        if (val.includes('<')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update [data-i18n-ph] placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      const val = t[key] !== undefined ? t[key] : fallback[key];
      if (val !== undefined) el.placeholder = val;
    });

    // Update lang button
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
      langBtn.querySelector('.lang-flag').textContent = LANGUAGES[lang].flag;
      langBtn.querySelector('.lang-code').textContent = LANGUAGES[lang].label;
    }

    // Mark selected option
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('selected', opt.dataset.lang === lang);
    });

    // Set text direction for RTL languages
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  // ── Language switcher init ───────────────────────────────
  function initLangSwitcher() {
    const btn      = document.querySelector('.lang-btn');
    const dropdown = document.querySelector('.lang-dropdown');
    if (!btn || !dropdown) return;

    // Build dropdown options
    dropdown.innerHTML = Object.entries(LANGUAGES).map(([code, info]) => `
      <div class="lang-option${code === currentLang ? ' selected' : ''}" data-lang="${code}">
        <span class="flag">${info.flag}</span>
        <span>${info.name}</span>
        <small style="color:var(--color-muted);margin-left:auto">${info.label}</small>
      </div>
    `).join('');

    btn.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
      btn.classList.toggle('open');
    });

    dropdown.addEventListener('click', e => {
      const opt = e.target.closest('.lang-option');
      if (!opt) return;
      applyLanguage(opt.dataset.lang);
      dropdown.classList.remove('open');
      btn.classList.remove('open');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      btn.classList.remove('open');
    });
  }

  // ── Mobile menu ──────────────────────────────────────────
  function initMobileMenu() {
    const toggle  = document.querySelector('.header-menu-toggle');
    const menu    = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => menu.classList.add('open'));
    closeBtn?.addEventListener('click', () => menu.classList.remove('open'));
    menu.addEventListener('click', e => {
      if (e.target === menu) menu.classList.remove('open');
    });
  }

  // ── Hero category tabs ───────────────────────────────────
  function initHeroTabs() {
    document.querySelectorAll('.hero-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.hero-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  }

  // ── Cookie Learn More Modal ──────────────────────────────
  function initCookieLearnMore() {
    const modal = document.getElementById('cookie-learn-more');
    if (!modal) return;

    document.querySelectorAll('.cookie-learn-more-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    modal.querySelector('.cookie-lm-close')?.addEventListener('click', closeLM);
    modal.querySelector('.cookie-lm-close-btn')?.addEventListener('click', closeLM);
    modal.addEventListener('click', e => { if (e.target === modal) closeLM(); });

    function closeLM() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ── Gallery (listing detail) ─────────────────────────────
  function initGallery() {
    const thumbs  = document.querySelectorAll('.gallery-thumb');
    const mainImg = document.querySelector('.gallery-main img');
    if (!thumbs.length || !mainImg) return;

    const images = Array.from(thumbs).map(t => t.querySelector('img')?.src);
    let currentIndex = 0;

    function setActive(index) {
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      currentIndex = index;
      mainImg.src = images[index];
      thumbs.forEach((t, i) => t.classList.toggle('active', i === index));
    }

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => setActive(i));
    });

    // Lightbox
    const lightbox   = document.getElementById('lightbox');
    const lbImg      = document.querySelector('.lightbox-img');
    const lbClose    = document.querySelector('.lightbox-close');
    const lbPrev     = document.querySelector('.lightbox-prev');
    const lbNext     = document.querySelector('.lightbox-next');
    const expandBtn  = document.querySelector('.gallery-expand');

    function openLightbox(index) {
      if (!lightbox || !lbImg) return;
      currentIndex = index;
      lbImg.src = images[index];
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox?.classList.remove('open');
      document.body.style.overflow = '';
    }
    expandBtn?.addEventListener('click', () => openLightbox(currentIndex));
    document.querySelector('.gallery-main')?.addEventListener('click', e => {
      if (!e.target.closest('.gallery-expand')) openLightbox(currentIndex);
    });
    lbClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    lbPrev?.addEventListener('click', () => { currentIndex--; if (currentIndex < 0) currentIndex = images.length - 1; lbImg.src = images[currentIndex]; setActive(currentIndex); });
    lbNext?.addEventListener('click', () => { currentIndex++; if (currentIndex >= images.length) currentIndex = 0; lbImg.src = images[currentIndex]; setActive(currentIndex); });

    document.addEventListener('keydown', e => {
      if (!lightbox?.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lbPrev?.click();
      if (e.key === 'ArrowRight') lbNext?.click();
    });

    setActive(0);
  }

  // ── Detail tabs ──────────────────────────────────────────
  function initDetailTabs() {
    const tabs     = document.querySelectorAll('.detail-tab');
    const contents = document.querySelectorAll('.detail-tab-content');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  }

  // ── FAQ accordion ────────────────────────────────────────
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // ── Pricing toggle (monthly / annual) ───────────────────
  function initPricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    if (!toggle) return;
    toggle.addEventListener('change', () => {
      const annual = toggle.checked;
      document.querySelectorAll('[data-price-monthly]').forEach(el => {
        const monthly = parseFloat(el.dataset.priceMonthly);
        if (!monthly) return;
        const price = annual ? Math.round(monthly * 10) : monthly;
        el.textContent = monthly === 0 ? 'Free' : price;
      });
      document.querySelectorAll('[data-price-period]').forEach(el => {
        el.textContent = annual ? '/ year' : '/ month';
      });
      const saveBadge = document.getElementById('save-badge');
      if (saveBadge) saveBadge.style.display = annual ? 'inline' : 'none';
    });
  }

  // ── Clickable listing cards ─────────────────────────────
  function initClickableCards() {
    document.addEventListener('click', e => {
      const card = e.target.closest('.listing-card');
      if (!card) return;
      // Don't navigate if clicking fav button or existing link
      if (e.target.closest('.card-fav') || e.target.closest('.btn-card-contact')) return;
      const link = card.querySelector('.btn-card-contact');
      if (link) window.location.href = link.href;
    });
  }

  // ── User Auth with Profile Icon ────────────────────────
  const AUTH_USER_KEY = 'lul_user';

  function getUser() {
    try { return JSON.parse(localStorage.getItem(AUTH_USER_KEY)); }
    catch { return null; }
  }

  function saveUser(user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    // Track to analytics
    if (window.LulCookies) {
      window.LulCookies.trackEvent('auth', { action: 'login', email: user.email });
    }
  }

  function logoutUser() {
    localStorage.removeItem(AUTH_USER_KEY);
    if (window.LulCookies) {
      window.LulCookies.trackEvent('auth', { action: 'logout' });
    }
    updateProfileUI();
  }

  function updateProfileUI() {
    const user = getUser();
    const profileBtns = document.querySelectorAll('.user-profile-btn');
    const loginBtns = document.querySelectorAll('.btn-login');

    profileBtns.forEach(btn => {
      if (user) {
        btn.classList.add('logged-in');
        const initials = user.name ? user.name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2) : 'U';
        btn.innerHTML = `<i class="fa fa-user"></i>`;
        btn.title = user.name || user.email;
        btn.style.display = '';
      } else {
        btn.classList.remove('logged-in');
        btn.innerHTML = `<i class="fa fa-user"></i>`;
        btn.style.display = 'none';
      }
    });

    loginBtns.forEach(btn => {
      btn.style.display = user ? 'none' : '';
    });

    // Update profile dropdowns
    document.querySelectorAll('.user-profile-dropdown').forEach(dd => {
      if (user) {
        const header = dd.querySelector('.profile-name');
        const email = dd.querySelector('.profile-email');
        if (header) header.textContent = user.name || 'User';
        if (email) email.textContent = user.email || '';
      }
    });
  }

  function initAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    // Open modal on Sign In click
    document.querySelectorAll('.btn-login').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        showAuthTab('signin');
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    // Profile button click -> dropdown
    document.querySelectorAll('.user-profile-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const dropdown = btn.parentElement.querySelector('.user-profile-dropdown');
        if (dropdown) dropdown.classList.toggle('open');
      });
    });

    // Logout buttons
    document.querySelectorAll('.profile-logout-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        logoutUser();
        document.querySelectorAll('.user-profile-dropdown').forEach(dd => dd.classList.remove('open'));
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
      document.querySelectorAll('.user-profile-dropdown').forEach(dd => dd.classList.remove('open'));
    });

    // Close
    modal.querySelector('.auth-close')?.addEventListener('click', closeAuth);
    modal.addEventListener('click', e => { if (e.target === modal) closeAuth(); });

    // Tab switch
    modal.querySelectorAll('.auth-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => showAuthTab(btn.dataset.tab));
    });

    // Toggle links
    modal.querySelector('.auth-switch-signup')?.addEventListener('click', e => { e.preventDefault(); showAuthTab('signup'); });
    modal.querySelector('.auth-switch-signin')?.addEventListener('click', e => { e.preventDefault(); showAuthTab('signin'); });

    // Form submit — save to localStorage + analytics
    const signinForm = modal.querySelector('[data-form="signin"]');
    const signupForm = modal.querySelector('[data-form="signup"]');

    signinForm?.addEventListener('submit', e => {
      e.preventDefault();
      const email = signinForm.querySelector('input[type="email"]').value;
      const user = { email, name: email.split('@')[0], loggedInAt: new Date().toISOString() };
      saveUser(user);
      updateProfileUI();
      closeAuth();
    });

    signupForm?.addEventListener('submit', e => {
      e.preventDefault();
      const name = signupForm.querySelector('input[type="text"]').value;
      const email = signupForm.querySelector('input[type="email"]').value;
      const passwords = signupForm.querySelectorAll('input[type="password"]');
      if (passwords[0].value !== passwords[1].value) {
        passwords[1].setCustomValidity('Passwords do not match');
        passwords[1].reportValidity();
        return;
      }
      const user = { name, email, registeredAt: new Date().toISOString(), loggedInAt: new Date().toISOString() };
      saveUser(user);
      if (window.LulCookies) {
        window.LulCookies.trackEvent('auth', { action: 'signup', email, name });
      }
      updateProfileUI();
      closeAuth();
    });

    function closeAuth() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    function showAuthTab(tab) {
      modal.querySelectorAll('.auth-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
      modal.querySelectorAll('.auth-form').forEach(f => f.classList.toggle('active', f.dataset.form === tab));
    }

    // On load, check if user is logged in and update UI
    updateProfileUI();
  }

  // ── Scroll animations (IntersectionObserver) ────────────
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.listing-card, .category-card, .step, .pricing-card, .kpi-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // ── Sticky header shadow ─────────────────────────────────
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 8
        ? '0 2px 20px rgba(0,0,0,0.25)'
        : 'none';
    }, { passive: true });
  }

  // ── Active nav link ──────────────────────────────────────
  function initActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.header-nav a').forEach(a => {
      const href = a.getAttribute('href');
      if (href && page.startsWith(href.replace('.html', ''))) {
        a.classList.add('active');
      }
    });
  }

  // ── Init all ─────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
    initLangSwitcher();
    initMobileMenu();
    initHeroTabs();
    initAuthModal();
    initCookieLearnMore();
    initGallery();
    initDetailTabs();
    initFAQ();
    initPricingToggle();
    initClickableCards();
    initScrollAnimations();
    initHeaderScroll();
    initActiveNav();
  });

  // ── Public ───────────────────────────────────────────────
  window.LulApp = { applyLanguage, LANGUAGES, I18N };

})();
