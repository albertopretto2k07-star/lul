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
    ja: { flag: '🇯🇵', label: 'JA', name: '日本語' },
    ko: { flag: '🇰🇷', label: 'KO', name: '한국어' },
    tr: { flag: '🇹🇷', label: 'TR', name: 'Türkçe' },
    hi: { flag: '🇮🇳', label: 'HI', name: 'हिन्दी' },
    pl: { flag: '🇵🇱', label: 'PL', name: 'Polski' },
    nl: { flag: '🇳🇱', label: 'NL', name: 'Nederlands' }
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
      about_social_desc: 'Stay up to date with the latest luxury listings, exclusive events, and industry insights by following our official channels.',
      // Privacy page
      privacy_eyebrow:   'Legal',
      privacy_title:     'Privacy Policy',
      privacy_subtitle:  'Your privacy is of paramount importance to LUL — Luxury Unique Listings. This policy outlines how we collect, use, and protect your personal information.',
      privacy_collect_h: 'Information We Collect',
      privacy_collect_p: 'We collect information that you provide directly to us, including your name, email address, and any other information you choose to provide when creating an account, making an inquiry, or contacting our support team. We also automatically collect certain technical data such as your IP address, browser type, device information, and browsing patterns on our platform.',
      privacy_use_h:     'How We Use Your Information',
      privacy_use_p:     'Your information is used to provide, maintain, and improve our services; to process your transactions and send related communications; to personalise your experience on the platform; and to comply with legal obligations. We may also use your data for analytical purposes to better understand user behaviour and enhance our offerings.',
      privacy_share_h:   'Information Sharing',
      privacy_share_p:   'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services (e.g., connecting you with dealers), comply with legal requirements, or protect our rights. Authorised service providers who assist us in operating our platform may have access to your data under strict confidentiality agreements.',
      privacy_security_h:'Data Security',
      privacy_security_p:'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. However, no method of electronic transmission or storage is entirely secure, and we cannot guarantee absolute security.',
      privacy_rights_h:  'Your Rights',
      privacy_rights_p:  'You have the right to access, correct, or delete your personal data at any time. You may also object to or restrict certain processing activities. To exercise these rights, please contact our support team. We will respond to your request within the timeframe required by applicable law.',
      privacy_update_h:  'Policy Updates',
      privacy_update_p:  'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.',
      // Terms page
      terms_eyebrow:     'Legal',
      terms_title:       'Terms of Service',
      terms_subtitle:    'Please read these Terms of Service carefully before using the LUL — Luxury Unique Listings platform.',
      terms_accept_h:    'Acceptance of Terms',
      terms_accept_p:    'By accessing or using the LUL platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our platform.',
      terms_use_h:       'Use of the Platform',
      terms_use_p:       'The LUL platform is provided for the purpose of connecting buyers with sellers of luxury assets including, but not limited to, automobiles, yachts, private jets, and real estate. You agree to use the platform only for lawful purposes and in accordance with these terms. You must not use the platform in any way that could damage, disable, or impair the service.',
      terms_accounts_h:  'User Accounts',
      terms_accounts_p:  'When creating an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorised use of your account.',
      terms_listings_h:  'Listings and Transactions',
      terms_listings_p:  'LUL acts as an intermediary platform connecting buyers and sellers. We do not own, sell, or purchase any of the listed assets. All transactions are conducted directly between buyers and sellers. While we verify dealer credentials, we do not guarantee the accuracy of individual listings or the outcome of any transaction.',
      terms_ip_h:        'Intellectual Property',
      terms_ip_p:        'All content on the LUL platform, including text, graphics, logos, and software, is the property of LUL or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without prior written consent.',
      terms_liability_h: 'Limitation of Liability',
      terms_liability_p: 'To the fullest extent permitted by law, LUL shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the platform. Our total liability shall not exceed the amount paid by you, if any, for accessing our services during the twelve months preceding the claim.',
      terms_changes_h:   'Changes to Terms',
      terms_changes_p:   'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the platform. Your continued use of the platform after any modifications constitutes acceptance of the updated terms.'
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
      cookie_title:    'Politique en matière de Cookies',
      cookie_intro:    'La présente plateforme utilise des cookies et des technologies de suivi analogues afin de garantir un fonctionnement optimal et d\'améliorer l\'expérience de navigation. Les sections suivantes fournissent un aperçu exhaustif des catégories de cookies utilisés et des finalités spécifiques qu\'ils poursuivent.',
      cookie_essential_h:'Cookies Essentiels',
      cookie_essential_p:'Les cookies essentiels sont strictement nécessaires au bon fonctionnement du présent site web. Ils permettent la mise en œuvre de fonctionnalités fondamentales telles que, notamment, la gestion des sessions, les protocoles de sécurité et la conservation des préférences linguistiques. Ces cookies étant indispensables à la fourniture du service, leur désactivation par l\'utilisateur n\'est pas possible.',
      cookie_analytics_h:'Cookies Analytiques',
      cookie_analytics_p:'Les cookies analytiques sont utilisés pour recueillir des données anonymisées et agrégées relatives aux interactions des visiteurs avec la plateforme — incluant les pages consultées, la durée des sessions, le type d\'appareil et les caractéristiques du navigateur. Les informations obtenues par le biais de ces cookies permettent l\'amélioration continue de l\'expérience sur la plateforme. Des services analytiques tiers, tels que Google Analytics, peuvent être utilisés à cette fin.',
      cookie_marketing_h:'Cookies Marketing',
      cookie_marketing_p:'Les cookies marketing ont pour objet de diffuser des contenus promotionnels pertinents et de mesurer l\'efficacité des initiatives publicitaires. Ces cookies permettent d\'identifier les campagnes et les canaux de communication générant le plus fort engagement auprès du public cible. Il est précisé que ces cookies peuvent être déposés par des partenaires publicitaires tiers autorisés opérant pour le compte de la plateforme.',
      cookie_social_h:   'Cookies Réseaux Sociaux',
      cookie_social_p:   'Les cookies de réseaux sociaux sont déployés par des services de réseaux sociaux externes intégrés au présent site web. Leur fonction principale est de permettre aux utilisateurs de partager du contenu sur leurs réseaux respectifs. Il convient de noter que ces cookies sont susceptibles de suivre l\'activité de navigation sur plusieurs sites web et de constituer des profils basés sur les intérêts de l\'utilisateur.',
      cookie_close:      'Fermer',
      about_eyebrow:     'À Propos',
      about_title:       'Le Marketplace le Plus Exclusif au Monde',
      about_subtitle:    'LUL — Luxury Unique Listings met en relation des acheteurs exigeants avec des revendeurs d\'élite et des vendeurs privés des plus beaux biens de luxe au monde.',
      about_mission_h:   'Notre Mission',
      about_mission_p:   'Créer une destination unique et fiable où le luxe rencontre la technologie. L\'acquisition d\'une voiture, d\'un yacht, d\'un jet ou d\'un bien immobilier d\'exception doit être aussi raffinée que le bien lui-même.',
      about_reach_h:     'Portée Mondiale',
      about_reach_p:     'Avec plus de 3 500 revendeurs vérifiés dans plus de 140 pays, LUL est la plateforme de référence pour les particuliers fortunés à la recherche des meilleurs biens de luxe.',
      about_trust_h:     'Confiance et Vérification',
      about_trust_p:     'Chaque revendeur sur notre plateforme fait l\'objet d\'un processus de vérification rigoureux. Nous offrons un service de conciergerie, une assistance juridique et un accompagnement après-vente dans le monde entier.',
      about_social_label:'Restez Connecté',
      about_social_title:'Suivez-nous sur les Réseaux Sociaux',
      about_social_desc: 'Restez informé des dernières annonces de luxe, événements exclusifs et analyses du secteur en suivant nos canaux officiels.',
      footer_about:   'À Propos',
      footer_dealers: 'Pour les Revendeurs',
      footer_careers: 'Carrières',
      footer_press:   'Presse',
      footer_blog:    'Blog',
      footer_privacy: 'Politique de Confidentialité',
      footer_terms:   'Conditions d\'Utilisation'
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
      cookie_intro:    'Die vorliegende Plattform verwendet Cookies und vergleichbare Tracking-Technologien, um eine optimale Funktionalität zu gewährleisten und das Browsing-Erlebnis zu verbessern. Die nachfolgenden Abschnitte bieten einen umfassenden Überblick über die verwendeten Cookie-Kategorien und die jeweils verfolgten Zwecke.',
      cookie_essential_h:'Essentielle Cookies',
      cookie_essential_p:'Essentielle Cookies sind für den ordnungsgemäßen Betrieb dieser Website zwingend erforderlich. Sie ermöglichen grundlegende Funktionen wie unter anderem die Sitzungsverwaltung, Sicherheitsprotokolle und die Speicherung von Spracheinstellungen. Da diese Cookies für die Erbringung des Dienstes unentbehrlich sind, können sie vom Nutzer nicht deaktiviert werden.',
      cookie_analytics_h:'Analytische Cookies',
      cookie_analytics_p:'Analytische Cookies dienen der Erhebung anonymisierter, aggregierter Daten über die Interaktionen der Besucher mit der Plattform — einschließlich besuchter Seiten, Sitzungsdauer, Gerätetyp und Browser-Eigenschaften. Die durch diese Cookies gewonnenen Informationen ermöglichen die kontinuierliche Verbesserung des Plattform-Erlebnisses. Zu diesem Zweck können analytische Dienste Dritter wie Google Analytics eingesetzt werden.',
      cookie_marketing_h:'Marketing-Cookies',
      cookie_marketing_p:'Marketing-Cookies dienen dem Zweck, relevante Werbeinhalte bereitzustellen und die Wirksamkeit von Werbeinitiativen zu messen. Diese Cookies helfen dabei, diejenigen Kampagnen und Kommunikationskanäle zu identifizieren, die das höchste Engagement innerhalb der Zielgruppe erzielen. Es wird darauf hingewiesen, dass solche Cookies von autorisierten Werbepartnern Dritter im Auftrag dieser Plattform gesetzt werden können.',
      cookie_social_h:   'Social-Media-Cookies',
      cookie_social_p:   'Social-Media-Cookies werden von externen sozialen Netzwerkdiensten gesetzt, die in diese Website integriert sind. Ihre Hauptfunktion besteht darin, den Nutzern die Weitergabe von Inhalten über ihre jeweiligen Netzwerke zu ermöglichen. Es ist zu beachten, dass diese Cookies die Browsing-Aktivität über mehrere Websites hinweg verfolgen und interessenbasierte Nutzerprofile erstellen können.',
      cookie_close:      'Schließen',
      footer_about:   'Über Uns',
      footer_dealers: 'Für Händler',
      footer_careers: 'Karriere',
      footer_press:   'Presse',
      footer_blog:    'Blog',
      footer_privacy: 'Datenschutz',
      footer_terms:   'Nutzungsbedingungen',
      about_eyebrow:     'Über Uns',
      about_title:       'Der Exklusivste Marktplatz der Welt',
      about_subtitle:    'LUL — Luxury Unique Listings verbindet anspruchsvolle Käufer mit Elite-Händlern und privaten Verkäufern der weltweit erlesensten Luxusgüter.',
      about_mission_h:   'Unsere Mission',
      about_mission_p:   'Eine einzige, vertrauenswürdige Destination zu schaffen, an der Luxus auf Technologie trifft. Der Erwerb eines außergewöhnlichen Autos, einer Yacht, eines Jets oder einer Immobilie sollte ebenso exquisit sein wie das Objekt selbst.',
      about_reach_h:     'Globale Reichweite',
      about_reach_p:     'Mit über 3.500 verifizierten Händlern in mehr als 140 Ländern ist LUL die führende Plattform für vermögende Privatpersonen auf der Suche nach den besten Luxusgütern weltweit.',
      about_trust_h:     'Vertrauen und Verifizierung',
      about_trust_p:     'Jeder Händler auf unserer Plattform durchläuft einen strengen Verifizierungsprozess. Wir bieten Concierge-Support, Rechtsberatung und weltweiten After-Sales-Service.',
      about_social_label:'Bleiben Sie Verbunden',
      about_social_title:'Folgen Sie Uns in den Sozialen Medien',
      about_social_desc: 'Bleiben Sie über die neuesten Luxus-Inserate, exklusiven Events und Brancheneinblicke informiert, indem Sie unseren offiziellen Kanälen folgen.'
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
      cookie_intro:    'La presente plataforma emplea cookies y tecnologías de seguimiento análogas con el fin de garantizar un funcionamiento óptimo y mejorar la experiencia de navegación. Las siguientes secciones proporcionan una descripción exhaustiva de las categorías de cookies utilizadas y los fines específicos que persiguen.',
      cookie_essential_h:'Cookies Esenciales',
      cookie_essential_p:'Las cookies esenciales son estrictamente necesarias para el correcto funcionamiento del presente sitio web. Facilitan funcionalidades básicas tales como, entre otras, la gestión de sesiones, los protocolos de seguridad y la conservación de las preferencias lingüísticas. Al ser indispensables para la prestación del servicio, no pueden ser desactivadas por el usuario.',
      cookie_analytics_h:'Cookies Analíticas',
      cookie_analytics_p:'Las cookies analíticas se emplean para recopilar datos anonimizados y agregados relativos a las interacciones de los visitantes con la plataforma, incluyendo las páginas visitadas, la duración de las sesiones, el tipo de dispositivo y las características del navegador. La información obtenida mediante estas cookies permite la mejora continua de la experiencia en la plataforma. A tal efecto, pueden utilizarse servicios analíticos de terceros como Google Analytics.',
      cookie_marketing_h:'Cookies de Marketing',
      cookie_marketing_p:'Las cookies de marketing tienen como finalidad ofrecer contenido promocional relevante y medir la eficacia de las iniciativas publicitarias. Estas cookies permiten identificar qué campañas y canales de comunicación generan el mayor nivel de interacción entre el público objetivo. Se señala que dichas cookies pueden ser instaladas por socios publicitarios terceros autorizados que operan en nombre de esta plataforma.',
      cookie_social_h:   'Cookies de Redes Sociales',
      cookie_social_p:   'Las cookies de redes sociales son instaladas por servicios de redes sociales externos integrados en el presente sitio web. Su función principal es permitir a los usuarios compartir contenido a través de sus respectivas redes. Cabe señalar que estas cookies pueden rastrear la actividad de navegación en múltiples sitios web y crear perfiles basados en los intereses del usuario.',
      cookie_close:      'Cerrar',
      footer_about:   'Sobre Nosotros',
      footer_dealers: 'Para Distribuidores',
      footer_careers: 'Empleo',
      footer_press:   'Prensa',
      footer_blog:    'Blog',
      footer_privacy: 'Política de Privacidad',
      footer_terms:   'Términos de Servicio',
      about_eyebrow:     'Sobre Nosotros',
      about_title:       'El Marketplace Más Exclusivo del Mundo',
      about_subtitle:    'LUL — Luxury Unique Listings conecta a compradores exigentes con distribuidores de élite y vendedores privados de los mejores bienes de lujo del mundo.',
      about_mission_h:   'Nuestra Misión',
      about_mission_p:   'Crear un único destino de confianza donde el lujo se encuentra con la tecnología. Adquirir un coche, un yate, un jet o una propiedad excepcional debe ser una experiencia tan refinada como el propio bien.',
      about_reach_h:     'Alcance Global',
      about_reach_p:     'Con más de 3.500 distribuidores verificados en más de 140 países, LUL es la plataforma de referencia para personas de alto patrimonio en busca de los mejores bienes de lujo.',
      about_trust_h:     'Confianza y Verificación',
      about_trust_p:     'Cada distribuidor en nuestra plataforma se somete a un riguroso proceso de verificación. Ofrecemos soporte concierge, asesoramiento jurídico y asistencia postventa a nivel mundial.',
      about_social_label:'Mantente Conectado',
      about_social_title:'Síguenos en Redes Sociales',
      about_social_desc: 'Mantente al día con los últimos anuncios de lujo, eventos exclusivos y análisis del sector siguiendo nuestros canales oficiales.'
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
      cookie_intro:    'A presente plataforma utiliza cookies e tecnologias de rastreamento análogas com o objetivo de garantir um funcionamento ótimo e melhorar a experiência de navegação. As secções seguintes fornecem uma visão abrangente das categorias de cookies utilizados e das finalidades específicas a que se destinam.',
      cookie_essential_h:'Cookies Essenciais',
      cookie_essential_p:'Os cookies essenciais são estritamente necessários para o correto funcionamento deste website. Facilitam funcionalidades fundamentais tais como, entre outras, a gestão de sessões, protocolos de segurança e a conservação das preferências linguísticas. Sendo indispensáveis para a prestação do serviço, não podem ser desativados pelo utilizador.',
      cookie_analytics_h:'Cookies Analíticos',
      cookie_analytics_p:'Os cookies analíticos são utilizados para recolher dados anonimizados e agregados relativos às interações dos visitantes com a plataforma — incluindo páginas visitadas, duração das sessões, tipo de dispositivo e características do navegador. As informações obtidas através destes cookies permitem a melhoria contínua da experiência na plataforma. Para este efeito, podem ser utilizados serviços analíticos de terceiros, como o Google Analytics.',
      cookie_marketing_h:'Cookies de Marketing',
      cookie_marketing_p:'Os cookies de marketing servem o propósito de fornecer conteúdo promocional relevante e medir a eficácia das iniciativas publicitárias. Estes cookies ajudam a identificar quais campanhas e canais de comunicação geram o maior envolvimento junto do público-alvo. Salienta-se que tais cookies podem ser colocados por parceiros publicitários terceiros autorizados que operam em nome desta plataforma.',
      cookie_social_h:   'Cookies de Redes Sociais',
      cookie_social_p:   'Os cookies de redes sociais são implementados por serviços de redes sociais externos integrados neste website. A sua função principal é permitir aos utilizadores partilhar conteúdo nas suas respetivas redes. Importa referir que estes cookies podem monitorizar a atividade de navegação em múltiplos websites e construir perfis baseados nos interesses do utilizador.',
      cookie_close:      'Fechar',
      footer_about:   'Sobre Nós',
      footer_dealers: 'Para Revendedores',
      footer_careers: 'Carreiras',
      footer_press:   'Imprensa',
      footer_blog:    'Blog',
      footer_privacy: 'Política de Privacidade',
      footer_terms:   'Termos de Serviço',
      about_eyebrow:     'Sobre Nós',
      about_title:       'O Marketplace Mais Exclusivo do Mundo',
      about_subtitle:    'LUL — Luxury Unique Listings liga compradores exigentes a revendedores de elite e vendedores privados dos mais requintados bens de luxo do mundo.',
      about_mission_h:   'A Nossa Missão',
      about_mission_p:   'Criar um destino único e fiável onde o luxo encontra a tecnologia. Adquirir um carro, um iate, um jato ou um imóvel excecional deve ser uma experiência tão refinada quanto o próprio bem.',
      about_reach_h:     'Alcance Global',
      about_reach_p:     'Com mais de 3.500 revendedores verificados em mais de 140 países, a LUL é a plataforma de referência para indivíduos de elevado património à procura dos melhores bens de luxo.',
      about_trust_h:     'Confiança e Verificação',
      about_trust_p:     'Cada revendedor na nossa plataforma é submetido a um rigoroso processo de verificação. Oferecemos suporte concierge, assessoria jurídica e assistência pós-venda a nível mundial.',
      about_social_label:'Mantenha-se Ligado',
      about_social_title:'Siga-nos nas Redes Sociais',
      about_social_desc: 'Mantenha-se atualizado com os últimos anúncios de luxo, eventos exclusivos e análises do setor seguindo os nossos canais oficiais.'
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
      cookie_title:    'Политика в отношении файлов Cookie',
      cookie_intro:    'Настоящая платформа использует файлы cookie и аналогичные технологии отслеживания в целях обеспечения оптимальной функциональности и улучшения пользовательского опыта. В нижеследующих разделах представлен исчерпывающий обзор категорий используемых файлов cookie и конкретных целей, которым они служат.',
      cookie_essential_h:'Основные файлы Cookie',
      cookie_essential_p:'Основные файлы cookie строго необходимы для надлежащего функционирования данного веб-сайта. Они обеспечивают реализацию базовых функций, включая, помимо прочего, управление сессиями, протоколы безопасности и сохранение языковых предпочтений. Поскольку данные файлы cookie являются неотъемлемой частью предоставляемого сервиса, их деактивация пользователем невозможна.',
      cookie_analytics_h:'Аналитические файлы Cookie',
      cookie_analytics_p:'Аналитические файлы cookie применяются для сбора анонимизированных агрегированных данных о взаимодействии посетителей с платформой — включая посещённые страницы, продолжительность сессий, тип устройства и характеристики браузера. Информация, полученная посредством данных файлов cookie, способствует непрерывному совершенствованию платформы. В этих целях могут использоваться сторонние аналитические сервисы, такие как Google Analytics.',
      cookie_marketing_h:'Маркетинговые файлы Cookie',
      cookie_marketing_p:'Маркетинговые файлы cookie предназначены для предоставления релевантного рекламного контента и измерения эффективности рекламных инициатив. Данные файлы cookie позволяют определить, какие кампании и каналы коммуникации обеспечивают наибольшую вовлечённость целевой аудитории. Следует отметить, что такие файлы cookie могут устанавливаться авторизованными сторонними рекламными партнёрами, действующими от имени данной платформы.',
      cookie_social_h:   'Cookie социальных сетей',
      cookie_social_p:   'Файлы cookie социальных сетей устанавливаются внешними сервисами социальных сетей, интегрированными в данный веб-сайт. Их основная функция — предоставить пользователям возможность делиться контентом в своих социальных сетях. Следует учитывать, что данные файлы cookie способны отслеживать активность просмотра на нескольких веб-сайтах и формировать профили на основе интересов пользователя.',
      cookie_close:      'Закрыть',
      footer_about:   'О Нас',
      footer_dealers: 'Для Дилеров',
      footer_careers: 'Карьера',
      footer_press:   'Пресса',
      footer_blog:    'Блог',
      footer_privacy: 'Политика конфиденциальности',
      footer_terms:   'Условия использования',
      about_eyebrow:     'О Нас',
      about_title:       'Самый Эксклюзивный Маркетплейс в Мире',
      about_subtitle:    'LUL — Luxury Unique Listings связывает взыскательных покупателей с элитными дилерами и частными продавцами лучших предметов роскоши в мире.',
      about_mission_h:   'Наша Миссия',
      about_mission_p:   'Создать единую надёжную площадку, где роскошь встречается с технологиями. Приобретение исключительного автомобиля, яхты, джета или недвижимости должно быть столь же изысканным, как и сам актив.',
      about_reach_h:     'Глобальный Охват',
      about_reach_p:     'С более чем 3 500 верифицированными дилерами в более чем 140 странах, LUL — это ведущая платформа для состоятельных частных лиц, ищущих лучшие предметы роскоши по всему миру.',
      about_trust_h:     'Доверие и Верификация',
      about_trust_p:     'Каждый дилер на нашей платформе проходит строгий процесс верификации. Мы предоставляем консьерж-поддержку, юридическую помощь и послепродажное обслуживание по всему миру.',
      about_social_label:'Оставайтесь на Связи',
      about_social_title:'Следите за Нами в Социальных Сетях',
      about_social_desc: 'Будьте в курсе последних объявлений о предметах роскоши, эксклюзивных мероприятий и аналитики отрасли, подписавшись на наши официальные каналы.'
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
      how_step1_h:    'تصفّح واكتشف',
      how_step1_p:    'استكشف آلاف الإعلانات المختارة في جميع فئات الرفاهية، مصفاة حسب الموقع والسعر والمواصفات.',
      how_step2_h:    'تواصل مباشرة',
      how_step2_p:    'تواصل مع التجار والبائعين الموثقين مباشرة. بدون وسطاء ولا رسوم مخفية.',
      how_step3_h:    'اشترِ بثقة',
      how_step3_p:    'كل إعلان موثق. استفد من خدمة الكونسيرج والدعم القانوني وخدمة ما بعد البيع حول العالم.',
      dealer_h:       'هل أنت <span>تاجر فاخر</span>؟<br>ابدأ النشر اليوم — مجاناً.',
      dealer_p:       'انضم إلى آلاف تجار النخبة حول العالم. ابدأ بتجربة مجانية، بدون بطاقة ائتمان.',
      dealer_cta:     'ابدأ مجاناً',
      dealer_plans:   'عرض الخطط',
      footer_desc:    'السوق الأكثر حصرية في العالم للسيارات الفاخرة واليخوت والطائرات الخاصة والعقارات.',
      footer_explore: 'استكشف',
      footer_company: 'الشركة',
      footer_contact: 'اتصل بنا',
      footer_about:   'من نحن',
      footer_dealers: 'للتجار',
      footer_careers: 'وظائف',
      footer_press:   'الصحافة',
      footer_blog:    'المدونة',
      footer_privacy: 'سياسة الخصوصية',
      footer_terms:   'شروط الخدمة',
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
      cookie_title:    'سياسة ملفات تعريف الارتباط',
      cookie_intro:    'تستخدم هذه المنصة ملفات تعريف الارتباط وتقنيات التتبع المماثلة لضمان الأداء الأمثل وتحسين تجربة التصفح. توفر الأقسام التالية نظرة شاملة على فئات ملفات تعريف الارتباط المستخدمة والأغراض المحددة التي تخدمها.',
      cookie_essential_h:'ملفات تعريف الارتباط الأساسية',
      cookie_essential_p:'ملفات تعريف الارتباط الأساسية ضرورية للغاية للتشغيل السليم لهذا الموقع. وهي تسهّل الوظائف الأساسية بما في ذلك، على سبيل المثال لا الحصر، إدارة الجلسات وبروتوكولات الأمان والاحتفاظ بتفضيلات اللغة. ولكون هذه الملفات جزءاً لا يتجزأ من تقديم الخدمة، لا يمكن تعطيلها من قبل المستخدم.',
      cookie_analytics_h:'ملفات تعريف الارتباط التحليلية',
      cookie_analytics_p:'تُستخدم ملفات تعريف الارتباط التحليلية لجمع بيانات مجهولة الهوية ومجمّعة حول تفاعلات الزوار مع المنصة — بما في ذلك الصفحات التي تمت زيارتها ومدة الجلسات ونوع الجهاز وخصائص المتصفح. تتيح المعلومات المستمدة من هذه الملفات التحسين المستمر لتجربة المنصة. وقد تُستخدم لهذا الغرض خدمات تحليلية من جهات خارجية مثل Google Analytics.',
      cookie_marketing_h:'ملفات تعريف الارتباط التسويقية',
      cookie_marketing_p:'تهدف ملفات تعريف الارتباط التسويقية إلى تقديم محتوى ترويجي ذي صلة وقياس فعالية المبادرات الإعلانية. تساعد هذه الملفات في تحديد الحملات وقنوات الاتصال التي تحقق أعلى مستوى من التفاعل لدى الجمهور المستهدف. يُشار إلى أن هذه الملفات قد تُوضع من قبل شركاء إعلانيين معتمدين يعملون نيابة عن هذه المنصة.',
      cookie_social_h:   'ملفات تعريف ارتباط وسائل التواصل الاجتماعي',
      cookie_social_p:   'يتم نشر ملفات تعريف ارتباط وسائل التواصل الاجتماعي من قبل خدمات الشبكات الاجتماعية الخارجية المدمجة في هذا الموقع. وتتمثل وظيفتها الأساسية في تمكين المستخدمين من مشاركة المحتوى عبر شبكاتهم. تجدر الإشارة إلى أن هذه الملفات قادرة على تتبع نشاط التصفح عبر مواقع متعددة وإنشاء ملفات تعريف بناءً على اهتمامات المستخدم.',
      cookie_close:    'إغلاق',
      about_eyebrow:     'من نحن',
      about_title:       'السوق الأكثر حصرية في العالم',
      about_subtitle:    'LUL — Luxury Unique Listings يربط المشترين المميزين بتجار النخبة والبائعين الخاصين لأرقى الأصول الفاخرة في العالم.',
      about_mission_h:   'مهمتنا',
      about_mission_p:   'إنشاء وجهة واحدة موثوقة حيث تلتقي الرفاهية بالتكنولوجيا. يجب أن يكون اقتناء سيارة أو يخت أو طائرة أو عقار استثنائي تجربة راقية بقدر الأصل نفسه.',
      about_reach_h:     'الانتشار العالمي',
      about_reach_p:     'مع أكثر من 3,500 تاجر موثق في أكثر من 140 دولة، تعد LUL المنصة المرجعية للأفراد ذوي الثروات العالية الباحثين عن أرقى الأصول الفاخرة حول العالم.',
      about_trust_h:     'الثقة والتحقق',
      about_trust_p:     'يخضع كل تاجر على منصتنا لعملية تحقق صارمة. نقدم دعم الكونسيرج والإرشاد القانوني وخدمة ما بعد البيع على مستوى العالم.',
      about_social_label:'ابقَ على تواصل',
      about_social_title:'تابعنا على وسائل التواصل الاجتماعي',
      about_social_desc: 'ابقَ على اطلاع بأحدث إعلانات الرفاهية والفعاليات الحصرية ورؤى القطاع من خلال متابعة قنواتنا الرسمية.'
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
      how_step1_h:    '浏览与发现',
      how_step1_p:    '探索数千个精选列表，涵盖所有奢侈品类别，按地点、价格和规格筛选。',
      how_step2_h:    '直接联系',
      how_step2_p:    '直接联系经过验证的经销商和私人卖家。没有中间商，没有隐藏费用。',
      how_step3_h:    '放心购买',
      how_step3_p:    '每个列表都经过验证。享受我们的礼宾服务、法律指导和全球售后支持。',
      dealer_h:       '您是<span>奢侈品经销商</span>吗？<br>立即开始发布 — 免费。',
      dealer_p:       '加入全球数千名精英经销商。免费试用，无需信用卡。',
      dealer_cta:     '免费开始',
      dealer_plans:   '查看方案',
      footer_desc:    '全球最专属的豪华汽车、游艇、私人飞机和房产市场。',
      footer_explore: '探索',
      footer_company: '公司',
      footer_contact: '联系我们',
      footer_about:   '关于我们',
      footer_dealers: '经销商专区',
      footer_careers: '职业发展',
      footer_press:   '新闻媒体',
      footer_blog:    '博客',
      footer_privacy: '隐私政策',
      footer_terms:   '服务条款',
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
      cookie_title:    'Cookie 政策',
      cookie_intro:    '本平台使用 Cookie 及类似的跟踪技术，以确保最佳功能并提升浏览体验。以下各节全面概述了所使用的 Cookie 类别及其具体用途。',
      cookie_essential_h:'必要 Cookie',
      cookie_essential_p:'必要 Cookie 对于本网站的正常运行必不可少。它们支持核心功能，包括但不限于会话管理、安全协议和语言偏好的保留。由于这些 Cookie 是服务提供的基本组成部分，用户无法将其停用。',
      cookie_analytics_h:'分析 Cookie',
      cookie_analytics_p:'分析 Cookie 用于收集有关访客与平台互动的匿名、汇总数据——包括访问的页面、会话时长、设备类型和浏览器特征。通过这些 Cookie 获得的信息有助于平台体验的持续改进。为此，可能会使用第三方分析服务，如 Google Analytics。',
      cookie_marketing_h:'营销 Cookie',
      cookie_marketing_p:'营销 Cookie 旨在提供相关的推广内容并衡量广告活动的效果。这些 Cookie 有助于确定哪些活动和沟通渠道在目标受众中产生最高的参与度。请注意，此类 Cookie 可能由代表本平台运营的授权第三方广告合作伙伴放置。',
      cookie_social_h:   '社交媒体 Cookie',
      cookie_social_p:   '社交媒体 Cookie 由集成到本网站的外部社交网络服务部署。其主要功能是使用户能够在其各自的网络上分享内容。请注意，这些 Cookie 能够跨多个网站跟踪浏览活动并构建基于用户兴趣的档案。',
      cookie_close:    '关闭',
      about_eyebrow:     '关于我们',
      about_title:       '全球最专属的市场',
      about_subtitle:    'LUL — Luxury Unique Listings 将挑剔的买家与全球最优质奢侈品资产的精英经销商和私人卖家联系起来。',
      about_mission_h:   '我们的使命',
      about_mission_p:   '打造一个值得信赖的目的地，让奢华与科技完美融合。购买一辆非凡的汽车、一艘游艇、一架飞机或一处房产，体验应如资产本身般精致。',
      about_reach_h:     '全球覆盖',
      about_reach_p:     '拥有遍布140多个国家的3,500多名认证经销商，LUL是高净值人士寻找全球最佳奢侈品资产的首选平台。',
      about_trust_h:     '信任与验证',
      about_trust_p:     '我们平台上的每位经销商都经过严格的验证流程。我们在全球范围内提供礼宾支持、法律指导和售后服务。',
      about_social_label:'保持联系',
      about_social_title:'关注我们的社交媒体',
      about_social_desc: '关注我们的官方渠道，了解最新的奢侈品列表、独家活动和行业洞察。'
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
      how_step1_h:    '閲覧して発見',
      how_step1_p:    'あらゆるラグジュアリーカテゴリーの厳選されたリスティングを、場所、価格、仕様でフィルタリングして探索。',
      how_step2_h:    '直接コンタクト',
      how_step2_p:    '認定ディーラーや個人売主に直接お問い合わせ。仲介者なし、隠れた手数料なし。',
      how_step3_h:    '安心して購入',
      how_step3_p:    'すべてのリスティングは検証済み。世界中でコンシェルジュサポート、法的ガイダンス、アフターサービスをご利用いただけます。',
      dealer_h:       '<span>ラグジュアリーディーラー</span>ですか？<br>今日から掲載開始 — 無料。',
      dealer_p:       '世界中の数千のエリートディーラーに参加。無料トライアル、クレジットカード不要。',
      dealer_cta:     '無料で始める',
      dealer_plans:   'プランを見る',
      footer_desc:    '高級車、ヨット、プライベートジェット、不動産のための世界で最も独占的なマーケットプレイス。',
      footer_explore: '探索',
      footer_company: '会社情報',
      footer_contact: 'お問い合わせ',
      footer_about:   'LULについて',
      footer_dealers: 'ディーラーの方へ',
      footer_careers: '採用情報',
      footer_press:   'プレス',
      footer_blog:    'ブログ',
      footer_privacy: 'プライバシーポリシー',
      footer_terms:   '利用規約',
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
      cookie_title:    'Cookie ポリシー',
      cookie_intro:    '本プラットフォームは、最適な機能を確保し、ブラウジング体験を向上させるために、Cookieおよび類似のトラッキング技術を使用しています。以下のセクションでは、使用されるCookieのカテゴリーとその具体的な目的について包括的な概要を提供します。',
      cookie_essential_h:'必須Cookie',
      cookie_essential_p:'必須Cookieは、本ウェブサイトの適切な運用に不可欠です。セッション管理、セキュリティプロトコル、言語設定の保持を含む中核的な機能を実現します。これらのCookieはサービス提供に不可欠であるため、ユーザーによる無効化はできません。',
      cookie_analytics_h:'分析Cookie',
      cookie_analytics_p:'分析Cookieは、プラットフォームとの訪問者のインタラクションに関する匿名化された集計データを収集するために使用されます。これには、閲覧ページ、セッション時間、デバイスの種類、ブラウザの特性が含まれます。これらのCookieにより得られた情報は、プラットフォーム体験の継続的な改善に役立てられます。この目的のため、Google Analyticsなどのサードパーティ分析サービスが使用される場合があります。',
      cookie_marketing_h:'マーケティングCookie',
      cookie_marketing_p:'マーケティングCookieは、関連するプロモーションコンテンツの配信および広告施策の効果測定を目的としています。これらのCookieは、ターゲットオーディエンス内で最も高いエンゲージメントを生み出すキャンペーンおよびコミュニケーションチャネルの特定に役立ちます。なお、このようなCookieは、本プラットフォームに代わって活動する認定サードパーティ広告パートナーによって設置される場合があります。',
      cookie_social_h:   'ソーシャルメディアCookie',
      cookie_social_p:   'ソーシャルメディアCookieは、本ウェブサイトに統合された外部ソーシャルネットワークサービスによって設置されます。その主な機能は、ユーザーがそれぞれのネットワーク上でコンテンツを共有できるようにすることです。これらのCookieは、複数のウェブサイトにわたるブラウジング活動を追跡し、ユーザーの関心に基づくプロファイルを構築する機能を有することにご留意ください。',
      cookie_close:    '閉じる',
      about_eyebrow:     '私たちについて',
      about_title:       '世界で最も独占的なマーケットプレイス',
      about_subtitle:    'LUL — Luxury Unique Listings は、目の肥えた買い手と、世界最高級の贅沢品資産を扱うエリートディーラーおよびプライベートセラーを結びつけます。',
      about_mission_h:   '私たちの使命',
      about_mission_p:   'ラグジュアリーとテクノロジーが出会う、信頼できる唯一の場所を創ること。卓越した車、ヨット、ジェット、不動産の取得は、資産そのものと同じくらい洗練された体験であるべきです。',
      about_reach_h:     'グローバルリーチ',
      about_reach_p:     '140カ国以上に3,500以上の認定ディーラーを擁し、LULは世界最高の贅沢品資産を求める富裕層のための主要プラットフォームです。',
      about_trust_h:     '信頼と検証',
      about_trust_p:     '当プラットフォームのすべてのディーラーは、厳格な検証プロセスを経ています。コンシェルジュサポート、法的ガイダンス、世界規模のアフターセールスサービスを提供しています。',
      about_social_label:'つながりを保つ',
      about_social_title:'ソーシャルメディアでフォロー',
      about_social_desc: '最新のラグジュアリーリスティング、限定イベント、業界インサイトを公式チャンネルからお届けします。'
    },
    ko: {
      nav_cars:       '자동차',
      nav_yachts:     '요트',
      nav_jets:       '프라이빗 제트',
      nav_realestate: '부동산',
      publish:        '매물 등록',
      login:          '로그인',
      hero_eyebrow:   '세계 최고의 매물',
      hero_h1_1:      '발견하세요',
      hero_h1_em:     '특별한 삶의 예술',
      hero_sub:       '전 세계 엘리트 딜러의 럭셔리 자동차, 요트, 제트기 및 부동산.',
      search_ph:      '브랜드, 모델, 위치로 검색…',
      btn_search:     '검색',
      cat_cars:       '럭셔리 자동차',
      cat_yachts:     '요트',
      cat_jets:       '프라이빗 제트',
      cat_realestate: '부동산',
      featured_label: '추천 매물',
      featured_title: '안목 있는 구매자를 위한 엄선',
      view_all:       '전체 매물 보기',
      card_details:   '상세 보기',
      card_featured:  '추천',
      card_new:       '신규',
      categories_label:'카테고리별 탐색',
      categories_title:'모든 럭셔리, 하나의 목적지',
      how_label:      '이용 방법',
      how_title:      '심플. 우아. 간편.',
      how_step1_h:    '탐색 및 발견',
      how_step1_p:    '위치, 가격, 사양으로 필터링하여 모든 럭셔리 카테고리에서 엄선된 수천 개의 매물을 탐색하세요.',
      how_step2_h:    '직접 연락',
      how_step2_p:    '검증된 딜러 및 개인 판매자에게 직접 연락하세요. 중개인 없이, 숨겨진 수수료 없이.',
      how_step3_h:    '안심 구매',
      how_step3_p:    '모든 매물은 검증됩니다. 전 세계 컨시어지 지원, 법률 가이드, 사후 서비스를 이용하세요.',
      dealer_h:       '<span>럭셔리 딜러</span>이신가요?<br>오늘부터 등록 시작 — 무료.',
      dealer_p:       '전 세계 수천 명의 엘리트 딜러에 합류하세요. 무료 체험, 신용카드 불필요.',
      dealer_cta:     '무료 시작',
      dealer_plans:   '플랜 보기',
      footer_desc:    '럭셔리 자동차, 요트, 프라이빗 제트, 부동산을 위한 세계에서 가장 독점적인 마켓플레이스.',
      footer_explore: '탐색',
      footer_company: '회사',
      footer_contact: '문의',
      footer_about:   '소개',
      footer_dealers: '딜러 전용',
      footer_careers: '채용',
      footer_press:   '보도자료',
      footer_blog:    '블로그',
      footer_privacy: '개인정보 처리방침',
      footer_terms:   '이용약관',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. 모든 권리 보유.',
      auth_signin:     '로그인',
      auth_signup:     '계정 만들기',
      auth_email:      '이메일 주소',
      auth_password:   '비밀번호',
      auth_name:       '이름',
      auth_confirm_pw: '비밀번호 확인',
      auth_forgot:     '비밀번호를 잊으셨나요?',
      auth_no_account: '계정이 없으신가요?',
      auth_has_account:'이미 계정이 있으신가요?',
      auth_btn_signin: '로그인',
      auth_btn_signup: '계정 만들기',
      auth_or:         '또는 다음으로 계속',
      cookie_title:    '쿠키 정책',
      cookie_intro:    '본 플랫폼은 최적의 기능을 보장하고 브라우징 경험을 향상시키기 위해 쿠키 및 유사한 추적 기술을 사용합니다. 다음 섹션에서는 사용되는 쿠키의 범주와 그 구체적인 목적에 대한 포괄적인 개요를 제공합니다.',
      cookie_essential_h:'필수 쿠키',
      cookie_essential_p:'필수 쿠키는 본 웹사이트의 적절한 운영을 위해 반드시 필요합니다. 세션 관리, 보안 프로토콜, 언어 설정 유지를 포함한 핵심 기능을 제공합니다. 이러한 쿠키는 서비스 제공에 필수적이므로 사용자가 비활성화할 수 없습니다.',
      cookie_analytics_h:'분석 쿠키',
      cookie_analytics_p:'분석 쿠키는 방문자의 플랫폼 상호작용에 대한 익명화된 집계 데이터를 수집하는 데 사용됩니다. 여기에는 방문한 페이지, 세션 시간, 장치 유형 및 브라우저 특성이 포함됩니다. 이러한 쿠키를 통해 얻은 정보는 플랫폼 경험의 지속적인 개선에 기여합니다. Google Analytics와 같은 타사 분석 서비스가 이 목적으로 사용될 수 있습니다.',
      cookie_marketing_h:'마케팅 쿠키',
      cookie_marketing_p:'마케팅 쿠키는 관련 프로모션 콘텐츠를 제공하고 광고 이니셔티브의 효과를 측정하는 데 사용됩니다. 이 쿠키는 대상 고객 내에서 가장 높은 참여를 생성하는 캠페인 및 커뮤니케이션 채널을 식별하는 데 도움이 됩니다. 이러한 쿠키는 본 플랫폼을 대신하여 운영하는 공인 타사 광고 파트너에 의해 배치될 수 있습니다.',
      cookie_social_h:   '소셜 미디어 쿠키',
      cookie_social_p:   '소셜 미디어 쿠키는 본 웹사이트에 통합된 외부 소셜 네트워크 서비스에 의해 배포됩니다. 주요 기능은 사용자가 각자의 네트워크에서 콘텐츠를 공유할 수 있도록 하는 것입니다. 이러한 쿠키는 여러 웹사이트에 걸쳐 브라우징 활동을 추적하고 사용자의 관심에 기반한 프로필을 구축할 수 있음을 유의하시기 바랍니다.',
      cookie_close:    '닫기',
      about_eyebrow:     '소개',
      about_title:       '세계에서 가장 독점적인 마켓플레이스',
      about_subtitle:    'LUL — Luxury Unique Listings는 안목 있는 구매자를 세계 최고급 럭셔리 자산의 엘리트 딜러 및 개인 판매자와 연결합니다.',
      about_mission_h:   '우리의 사명',
      about_mission_p:   '럭셔리와 기술이 만나는 신뢰할 수 있는 단일 목적지를 만드는 것. 특별한 자동차, 요트, 제트기 또는 부동산의 취득은 자산 자체만큼이나 세련된 경험이어야 합니다.',
      about_reach_h:     '글로벌 도달',
      about_reach_p:     '140개 이상의 국가에 3,500명 이상의 인증 딜러를 보유한 LUL은 세계 최고의 럭셔리 자산을 찾는 고액 자산가를 위한 선도적 플랫폼입니다.',
      about_trust_h:     '신뢰와 검증',
      about_trust_p:     '당사 플랫폼의 모든 딜러는 엄격한 검증 과정을 거칩니다. 전 세계적으로 컨시어지 지원, 법률 가이드, 사후 서비스를 제공합니다.',
      about_social_label:'소식 받기',
      about_social_title:'소셜 미디어에서 팔로우',
      about_social_desc: '공식 채널을 팔로우하여 최신 럭셔리 매물, 독점 이벤트 및 업계 인사이트를 확인하세요.'
    },
    tr: {
      nav_cars:       'Otomobiller',
      nav_yachts:     'Yatlar',
      nav_jets:       'Özel Jetler',
      nav_realestate: 'Gayrimenkul',
      publish:        'İlan Ver',
      login:          'Giriş Yap',
      hero_eyebrow:   'Dünyanın En İyi İlanları',
      hero_h1_1:      'Keşfedin',
      hero_h1_em:     'Olağanüstü Yaşamın Sanatını',
      hero_sub:       'Dünya genelindeki seçkin bayilerden lüks otomobiller, yatlar, jetler ve gayrimenkuller.',
      search_ph:      'Marka, model, konum ile ara…',
      btn_search:     'Ara',
      cat_cars:       'Lüks Otomobiller',
      cat_yachts:     'Yatlar',
      cat_jets:       'Özel Jetler',
      cat_realestate: 'Gayrimenkul',
      featured_label: 'Öne Çıkan İlanlar',
      featured_title: 'Seçici Alıcılar İçin Özenle Seçilmiş',
      view_all:       'Tüm İlanları Gör',
      card_details:   'Detaylar',
      card_featured:  'Öne Çıkan',
      card_new:       'Yeni',
      categories_label:'Kategoriye Göre Ara',
      categories_title:'Her Lüks, Tek Adres',
      how_label:      'Nasıl Çalışır',
      how_title:      'Basit. Şık. Zahmetsiz.',
      how_step1_h:    'Keşfet ve Bul',
      how_step1_p:    'Konum, fiyat ve özelliklere göre filtreleyerek tüm lüks kategorilerde seçilmiş binlerce ilanı keşfedin.',
      how_step2_h:    'Doğrudan İletişim',
      how_step2_p:    'Doğrulanmış bayi ve özel satıcılarla doğrudan iletişim kurun. Aracı yok, gizli ücret yok.',
      how_step3_h:    'Güvenle Satın Alın',
      how_step3_p:    'Her ilan doğrulanmıştır. Dünya genelinde concierge desteği, hukuki danışmanlık ve satış sonrası hizmetten yararlanın.',
      dealer_h:       '<span>Lüks bir bayi</span> misiniz?<br>Bugün yayınlamaya başlayın — ücretsiz.',
      dealer_p:       'Dünya genelindeki binlerce seçkin bayiye katılın. Ücretsiz deneme, kredi kartı gerekmez.',
      dealer_cta:     'Ücretsiz Başla',
      dealer_plans:   'Planları Gör',
      footer_desc:    'Lüks otomobiller, yatlar, özel jetler ve gayrimenkul için dünyanın en özel pazar yeri.',
      footer_explore: 'Keşfet',
      footer_company: 'Şirket',
      footer_contact: 'İletişim',
      footer_about:   'Hakkımızda',
      footer_dealers: 'Bayiler İçin',
      footer_careers: 'Kariyer',
      footer_press:   'Basın',
      footer_blog:    'Blog',
      footer_privacy: 'Gizlilik Politikası',
      footer_terms:   'Kullanım Koşulları',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Tüm hakları saklıdır.',
      auth_signin:     'Giriş Yap',
      auth_signup:     'Hesap Oluştur',
      auth_email:      'E-posta adresi',
      auth_password:   'Şifre',
      auth_name:       'Ad soyad',
      auth_confirm_pw: 'Şifre onayı',
      auth_forgot:     'Şifrenizi mi unuttunuz?',
      auth_no_account: 'Hesabınız yok mu?',
      auth_has_account:'Zaten hesabınız var mı?',
      auth_btn_signin: 'Giriş Yap',
      auth_btn_signup: 'Hesap Oluştur',
      auth_or:         'veya şununla devam et',
      cookie_title:    'Çerez Politikası',
      cookie_intro:    'Bu platform, en iyi işlevselliği sağlamak ve tarama deneyimini geliştirmek amacıyla çerezler ve benzer izleme teknolojileri kullanmaktadır. Aşağıdaki bölümler, kullanılan çerez kategorileri ve bunların hizmet ettiği belirli amaçlar hakkında kapsamlı bir genel bakış sunmaktadır.',
      cookie_essential_h:'Zorunlu Çerezler',
      cookie_essential_p:'Zorunlu çerezler, bu web sitesinin düzgün çalışması için kesinlikle gereklidir. Oturum yönetimi, güvenlik protokolleri ve dil tercihlerinin saklanması dahil olmak üzere temel işlevleri kolaylaştırırlar. Bu çerezler hizmetin sunulması için vazgeçilmez olduğundan, kullanıcı tarafından devre dışı bırakılamazlar.',
      cookie_analytics_h:'Analitik Çerezler',
      cookie_analytics_p:'Analitik çerezler, ziyaretçilerin platformla etkileşimlerine ilişkin anonimleştirilmiş, toplu veriler toplamak için kullanılır — ziyaret edilen sayfalar, oturum süresi, cihaz sınıflandırması ve tarayıcı özellikleri dahil. Bu çerezler aracılığıyla elde edilen bilgiler, platform deneyiminin sürekli iyileştirilmesini sağlar. Bu amaçla Google Analytics gibi üçüncü taraf analitik hizmetleri kullanılabilir.',
      cookie_marketing_h:'Pazarlama Çerezleri',
      cookie_marketing_p:'Pazarlama çerezleri, ilgili tanıtım içeriklerinin sunulması ve reklam girişimlerinin etkinliğinin ölçülmesi amacıyla kullanılır. Bu çerezler, hedef kitle içinde en yüksek etkileşimi sağlayan kampanya ve iletişim kanallarının belirlenmesine yardımcı olur. Bu tür çerezlerin, bu platform adına faaliyet gösteren yetkili üçüncü taraf reklam ortakları tarafından yerleştirilebileceği belirtilmelidir.',
      cookie_social_h:   'Sosyal Medya Çerezleri',
      cookie_social_p:   'Sosyal medya çerezleri, bu web sitesine entegre edilmiş harici sosyal ağ hizmetleri tarafından yerleştirilir. Temel işlevleri, kullanıcıların ilgili ağlarında içerik paylaşabilmelerini sağlamaktır. Bu çerezlerin birden fazla web sitesindeki tarama faaliyetlerini izleme ve ilgi alanlarına dayalı kullanıcı profilleri oluşturma kapasitesine sahip olduğu dikkate alınmalıdır.',
      cookie_close:    'Kapat',
      about_eyebrow:     'Hakkımızda',
      about_title:       'Dünyanın En Özel Pazar Yeri',
      about_subtitle:    'LUL — Luxury Unique Listings, seçici alıcıları dünyanın en iyi lüks varlıklarının seçkin bayileri ve özel satıcılarıyla buluşturur.',
      about_mission_h:   'Misyonumuz',
      about_mission_p:   'Lüksün teknolojiyle buluştuğu tek, güvenilir bir varış noktası yaratmak. Olağanüstü bir otomobil, yat, jet veya mülk edinmek, varlığın kendisi kadar rafine bir deneyim olmalıdır.',
      about_reach_h:     'Küresel Erişim',
      about_reach_p:     '140\'tan fazla ülkede 3.500\'den fazla doğrulanmış bayisiyle LUL, dünya genelinde en iyi lüks varlıkları arayan yüksek net değerli bireyler için başvuru platformudur.',
      about_trust_h:     'Güven ve Doğrulama',
      about_trust_p:     'Platformumuzdaki her bayi titiz bir doğrulama sürecinden geçer. Dünya genelinde concierge desteği, hukuki danışmanlık ve satış sonrası hizmet sunuyoruz.',
      about_social_label:'Bağlantıda Kalın',
      about_social_title:'Sosyal Medyada Bizi Takip Edin',
      about_social_desc: 'Resmi kanallarımızı takip ederek en son lüks ilanlar, özel etkinlikler ve sektör analizlerinden haberdar olun.'
    },
    hi: {
      nav_cars:       'कारें',
      nav_yachts:     'यॉट',
      nav_jets:       'प्राइवेट जेट',
      nav_realestate: 'रियल एस्टेट',
      publish:        'लिस्टिंग प्रकाशित करें',
      login:          'साइन इन',
      hero_eyebrow:   'विश्व की सर्वश्रेष्ठ लिस्टिंग',
      hero_h1_1:      'खोजें',
      hero_h1_em:     'असाधारण जीवन की कला',
      hero_sub:       'विश्वभर के उत्कृष्ट डीलरों की लक्जरी कारें, यॉट, जेट और रियल एस्टेट।',
      search_ph:      'ब्रांड, मॉडल, स्थान से खोजें…',
      btn_search:     'खोजें',
      cat_cars:       'लक्जरी कारें',
      cat_yachts:     'यॉट',
      cat_jets:       'प्राइवेट जेट',
      cat_realestate: 'रियल एस्टेट',
      featured_label: 'विशेष लिस्टिंग',
      featured_title: 'समझदार खरीदारों के लिए चुनी गई',
      view_all:       'सभी लिस्टिंग देखें',
      card_details:   'विवरण देखें',
      card_featured:  'विशेष',
      card_new:       'नया',
      categories_label:'श्रेणी के अनुसार ब्राउज़ करें',
      categories_title:'हर विलासिता, एक गंतव्य',
      how_label:      'कैसे काम करता है',
      how_title:      'सरल। शानदार। सहज।',
      how_step1_h:    'ब्राउज़ करें और खोजें',
      how_step1_p:    'स्थान, मूल्य और विशिष्टताओं के अनुसार फ़िल्टर करके सभी लक्जरी श्रेणियों में हजारों चुनी हुई लिस्टिंग खोजें।',
      how_step2_h:    'सीधे संपर्क करें',
      how_step2_p:    'सत्यापित डीलरों और निजी विक्रेताओं से सीधे संपर्क करें। कोई बिचौलिया नहीं, कोई छिपा शुल्क नहीं।',
      how_step3_h:    'विश्वास के साथ खरीदें',
      how_step3_p:    'हर लिस्टिंग सत्यापित है। विश्वभर में कॉन्सीयर्ज सहायता, कानूनी मार्गदर्शन और बिक्री-पश्चात सेवा का लाभ उठाएं।',
      dealer_h:       'क्या आप एक <span>लक्जरी डीलर</span> हैं?<br>आज ही लिस्टिंग शुरू करें — मुफ्त।',
      dealer_p:       'विश्वभर के हजारों उत्कृष्ट डीलरों से जुड़ें। मुफ्त ट्रायल, क्रेडिट कार्ड की आवश्यकता नहीं।',
      dealer_cta:     'मुफ्त शुरू करें',
      dealer_plans:   'प्लान देखें',
      footer_desc:    'लक्जरी कारों, यॉट, प्राइवेट जेट और रियल एस्टेट के लिए विश्व का सबसे विशिष्ट मार्केटप्लेस।',
      footer_explore: 'अन्वेषण',
      footer_company: 'कंपनी',
      footer_contact: 'संपर्क करें',
      footer_about:   'हमारे बारे में',
      footer_dealers: 'डीलरों के लिए',
      footer_careers: 'करियर',
      footer_press:   'प्रेस',
      footer_blog:    'ब्लॉग',
      footer_privacy: 'गोपनीयता नीति',
      footer_terms:   'सेवा की शर्तें',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. सर्वाधिकार सुरक्षित।',
      auth_signin:     'साइन इन',
      auth_signup:     'खाता बनाएं',
      auth_email:      'ईमेल पता',
      auth_password:   'पासवर्ड',
      auth_name:       'पूरा नाम',
      auth_confirm_pw: 'पासवर्ड की पुष्टि',
      auth_forgot:     'पासवर्ड भूल गए?',
      auth_no_account: 'खाता नहीं है?',
      auth_has_account:'पहले से खाता है?',
      auth_btn_signin: 'साइन इन',
      auth_btn_signup: 'खाता बनाएं',
      auth_or:         'या इसके साथ जारी रखें',
      cookie_title:    'कुकी नीति',
      cookie_intro:    'यह प्लेटफ़ॉर्म इष्टतम कार्यक्षमता सुनिश्चित करने और ब्राउज़िंग अनुभव को बेहतर बनाने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग करता है। निम्नलिखित अनुभाग उपयोग की जाने वाली कुकीज़ की श्रेणियों और उनके विशिष्ट उद्देश्यों का व्यापक अवलोकन प्रदान करते हैं।',
      cookie_essential_h:'आवश्यक कुकीज़',
      cookie_essential_p:'आवश्यक कुकीज़ इस वेबसाइट के उचित संचालन के लिए अत्यंत आवश्यक हैं। वे सत्र प्रबंधन, सुरक्षा प्रोटोकॉल और भाषा प्राथमिकताओं के संरक्षण सहित मूल कार्यात्मकताओं को सक्षम बनाती हैं। चूंकि ये कुकीज़ सेवा प्रदान करने के लिए अभिन्न हैं, इसलिए उपयोगकर्ता द्वारा इन्हें निष्क्रिय नहीं किया जा सकता।',
      cookie_analytics_h:'विश्लेषणात्मक कुकीज़',
      cookie_analytics_p:'विश्लेषणात्मक कुकीज़ का उपयोग प्लेटफ़ॉर्म के साथ आगंतुकों की बातचीत के बारे में गुमनाम, समेकित डेटा एकत्र करने के लिए किया जाता है — जिसमें देखे गए पृष्ठ, सत्र अवधि, डिवाइस का प्रकार और ब्राउज़र विशेषताएँ शामिल हैं। इन कुकीज़ के माध्यम से प्राप्त जानकारी प्लेटफ़ॉर्म अनुभव के निरंतर सुधार में सहायता करती है। इस उद्देश्य के लिए Google Analytics जैसी तृतीय-पक्ष विश्लेषण सेवाओं का उपयोग किया जा सकता है।',
      cookie_marketing_h:'मार्केटिंग कुकीज़',
      cookie_marketing_p:'मार्केटिंग कुकीज़ प्रासंगिक प्रचार सामग्री प्रदान करने और विज्ञापन पहलों की प्रभावशीलता को मापने के उद्देश्य से काम करती हैं। ये कुकीज़ यह पहचानने में सहायता करती हैं कि लक्षित दर्शकों में कौन से अभियान और संचार चैनल सबसे अधिक जुड़ाव उत्पन्न करते हैं। यह ध्यान दिया जाना चाहिए कि ऐसी कुकीज़ इस प्लेटफ़ॉर्म की ओर से कार्य करने वाले अधिकृत तृतीय-पक्ष विज्ञापन भागीदारों द्वारा रखी जा सकती हैं।',
      cookie_social_h:   'सोशल मीडिया कुकीज़',
      cookie_social_p:   'सोशल मीडिया कुकीज़ इस वेबसाइट में एकीकृत बाहरी सोशल नेटवर्किंग सेवाओं द्वारा तैनात की जाती हैं। उनका प्राथमिक कार्य उपयोगकर्ताओं को अपने संबंधित नेटवर्क पर सामग्री साझा करने में सक्षम बनाना है। यह ध्यान रखना चाहिए कि ये कुकीज़ कई वेबसाइटों पर ब्राउज़िंग गतिविधि की निगरानी करने और रुचि-आधारित उपयोगकर्ता प्रोफ़ाइल बनाने में सक्षम हैं।',
      cookie_close:    'बंद करें',
      about_eyebrow:     'हमारे बारे में',
      about_title:       'विश्व का सबसे विशिष्ट मार्केटप्लेस',
      about_subtitle:    'LUL — Luxury Unique Listings समझदार खरीदारों को विश्व की सबसे उत्कृष्ट लक्जरी संपत्तियों के प्रतिष्ठित डीलरों और निजी विक्रेताओं से जोड़ता है।',
      about_mission_h:   'हमारा मिशन',
      about_mission_p:   'एक एकल, विश्वसनीय गंतव्य बनाना जहाँ विलासिता प्रौद्योगिकी से मिलती है। एक असाधारण कार, यॉट, जेट या संपत्ति का अधिग्रहण उतना ही परिष्कृत अनुभव होना चाहिए जितना कि संपत्ति स्वयं है।',
      about_reach_h:     'वैश्विक पहुंच',
      about_reach_p:     '140 से अधिक देशों में 3,500 से अधिक सत्यापित डीलरों के साथ, LUL विश्व की सर्वश्रेष्ठ लक्जरी संपत्तियों की तलाश करने वाले उच्च-निवल-मूल्य वाले व्यक्तियों के लिए प्रमुख प्लेटफ़ॉर्म है।',
      about_trust_h:     'विश्वास और सत्यापन',
      about_trust_p:     'हमारे प्लेटफ़ॉर्म पर प्रत्येक डीलर कठोर सत्यापन प्रक्रिया से गुजरता है। हम विश्वभर में कॉन्सीयर्ज सहायता, कानूनी मार्गदर्शन और बिक्री-पश्चात सेवा प्रदान करते हैं।',
      about_social_label:'जुड़े रहें',
      about_social_title:'सोशल मीडिया पर हमें फ़ॉलो करें',
      about_social_desc: 'हमारे आधिकारिक चैनलों का अनुसरण करके नवीनतम लक्जरी लिस्टिंग, विशेष कार्यक्रमों और उद्योग अंतर्दृष्टि से अपडेट रहें।'
    },
    pl: {
      nav_cars:       'Samochody',
      nav_yachts:     'Jachty',
      nav_jets:       'Prywatne Odrzutowce',
      nav_realestate: 'Nieruchomości',
      publish:        'Dodaj Ogłoszenie',
      login:          'Zaloguj się',
      hero_eyebrow:   'Najlepsze Ogłoszenia na Świecie',
      hero_h1_1:      'Odkryj Sztukę',
      hero_h1_em:     'Wyjątkowego Życia',
      hero_sub:       'Luksusowe samochody, jachty, odrzutowce i nieruchomości od elitarnych dealerów z całego świata.',
      search_ph:      'Szukaj wg marki, modelu, lokalizacji…',
      btn_search:     'Szukaj',
      cat_cars:       'Luksusowe Samochody',
      cat_yachts:     'Jachty',
      cat_jets:       'Prywatne Odrzutowce',
      cat_realestate: 'Nieruchomości',
      featured_label: 'Wyróżnione Ogłoszenia',
      featured_title: 'Wyselekcjonowane dla Wymagających Kupujących',
      view_all:       'Zobacz Wszystkie Ogłoszenia',
      card_details:   'Szczegóły',
      card_featured:  'Wyróżnione',
      card_new:       'Nowe',
      categories_label:'Przeglądaj wg Kategorii',
      categories_title:'Każdy Luksus, Jedno Miejsce',
      how_label:      'Jak To Działa',
      how_title:      'Prosto. Elegancko. Bez Wysiłku.',
      how_step1_h:    'Przeglądaj i Odkrywaj',
      how_step1_p:    'Odkryj tysiące wyselekcjonowanych ogłoszeń we wszystkich kategoriach luksusu, filtrując wg lokalizacji, ceny i specyfikacji.',
      how_step2_h:    'Kontaktuj Bezpośrednio',
      how_step2_p:    'Skontaktuj się bezpośrednio ze zweryfikowanymi dealerami i prywatnymi sprzedawcami. Bez pośredników, bez ukrytych opłat.',
      how_step3_h:    'Kupuj z Pewnością',
      how_step3_p:    'Każde ogłoszenie jest zweryfikowane. Skorzystaj z naszego wsparcia concierge, porad prawnych i obsługi posprzedażnej na całym świecie.',
      dealer_h:       'Jesteś <span>dealerem luksusu</span>?<br>Zacznij publikować już dziś — za darmo.',
      dealer_p:       'Dołącz do tysięcy elitarnych dealerów na całym świecie. Darmowy okres próbny, bez karty kredytowej.',
      dealer_cta:     'Zacznij Za Darmo',
      dealer_plans:   'Zobacz Plany',
      footer_desc:    'Najbardziej ekskluzywny marketplace na świecie dla luksusowych samochodów, jachtów, prywatnych odrzutowców i nieruchomości.',
      footer_explore: 'Odkrywaj',
      footer_company: 'Firma',
      footer_contact: 'Kontakt',
      footer_about:   'O Nas',
      footer_dealers: 'Dla Dealerów',
      footer_careers: 'Kariera',
      footer_press:   'Prasa',
      footer_blog:    'Blog',
      footer_privacy: 'Polityka Prywatności',
      footer_terms:   'Regulamin',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Wszelkie prawa zastrzeżone.',
      auth_signin:     'Zaloguj się',
      auth_signup:     'Utwórz Konto',
      auth_email:      'Adres e-mail',
      auth_password:   'Hasło',
      auth_name:       'Imię i nazwisko',
      auth_confirm_pw: 'Potwierdź hasło',
      auth_forgot:     'Zapomniałeś hasła?',
      auth_no_account: 'Nie masz konta?',
      auth_has_account:'Masz już konto?',
      auth_btn_signin: 'Zaloguj się',
      auth_btn_signup: 'Utwórz Konto',
      auth_or:         'lub kontynuuj przez',
      cookie_title:    'Polityka Cookies',
      cookie_intro:    'Niniejsza platforma wykorzystuje pliki cookie i analogiczne technologie śledzenia w celu zapewnienia optymalnej funkcjonalności i poprawy doświadczeń związanych z przeglądaniem. Poniższe sekcje zawierają kompleksowy przegląd kategorii wykorzystywanych plików cookie i konkretnych celów, którym służą.',
      cookie_essential_h:'Niezbędne Pliki Cookie',
      cookie_essential_p:'Niezbędne pliki cookie są ściśle konieczne do prawidłowego funkcjonowania niniejszej strony internetowej. Umożliwiają one realizację podstawowych funkcji, w tym m.in. zarządzanie sesją, protokoły bezpieczeństwa oraz zachowanie preferencji językowych. Ponieważ te pliki cookie są integralną częścią świadczenia usługi, nie mogą być dezaktywowane przez użytkownika.',
      cookie_analytics_h:'Analityczne Pliki Cookie',
      cookie_analytics_p:'Analityczne pliki cookie służą do gromadzenia zanonimizowanych, zagregowanych danych dotyczących interakcji odwiedzających z platformą — obejmujących odwiedzone strony, czas trwania sesji, klasyfikację urządzeń oraz cechy przeglądarki. Informacje uzyskane za pomocą tych plików cookie umożliwiają ciągłe doskonalenie doświadczeń na platformie. W tym celu mogą być wykorzystywane usługi analityczne stron trzecich, takie jak Google Analytics.',
      cookie_marketing_h:'Marketingowe Pliki Cookie',
      cookie_marketing_p:'Marketingowe pliki cookie służą dostarczaniu odpowiednich treści promocyjnych i mierzeniu skuteczności inicjatyw reklamowych. Pliki te pomagają w identyfikacji kampanii i kanałów komunikacji generujących najwyższe zaangażowanie wśród grupy docelowej. Należy zauważyć, że takie pliki cookie mogą być umieszczane przez autoryzowanych zewnętrznych partnerów reklamowych działających w imieniu niniejszej platformy.',
      cookie_social_h:   'Pliki Cookie Mediów Społecznościowych',
      cookie_social_p:   'Pliki cookie mediów społecznościowych są wdrażane przez zewnętrzne serwisy społecznościowe zintegrowane z niniejszą stroną internetową. Ich główną funkcją jest umożliwienie użytkownikom udostępniania treści w ich odpowiednich sieciach. Należy pamiętać, że pliki te mogą monitorować aktywność przeglądania na wielu stronach internetowych i tworzyć profile oparte na zainteresowaniach użytkownika.',
      cookie_close:    'Zamknij',
      about_eyebrow:     'O Nas',
      about_title:       'Najbardziej Ekskluzywny Marketplace na Świecie',
      about_subtitle:    'LUL — Luxury Unique Listings łączy wymagających nabywców z elitarnymi dealerami i prywatnymi sprzedawcami najwspanialszych dóbr luksusowych na świecie.',
      about_mission_h:   'Nasza Misja',
      about_mission_p:   'Stworzenie jednego, zaufanego miejsca, w którym luksus spotyka się z technologią. Nabycie wyjątkowego samochodu, jachtu, odrzutowca lub nieruchomości powinno być doświadczeniem równie wyrafinowanym jak sam przedmiot.',
      about_reach_h:     'Globalny Zasięg',
      about_reach_p:     'Z ponad 3500 zweryfikowanymi dealerami w ponad 140 krajach, LUL jest wiodącą platformą dla zamożnych osób poszukujących najlepszych dóbr luksusowych na świecie.',
      about_trust_h:     'Zaufanie i Weryfikacja',
      about_trust_p:     'Każdy dealer na naszej platformie przechodzi rygorystyczny proces weryfikacji. Oferujemy wsparcie concierge, doradztwo prawne i obsługę posprzedażną na całym świecie.',
      about_social_label:'Bądź w Kontakcie',
      about_social_title:'Śledź Nas w Mediach Społecznościowych',
      about_social_desc: 'Bądź na bieżąco z najnowszymi luksusowymi ogłoszeniami, ekskluzywnymi wydarzeniami i analizami branżowymi, śledząc nasze oficjalne kanały.'
    },
    nl: {
      nav_cars:       'Auto\'s',
      nav_yachts:     'Jachten',
      nav_jets:       'Privéjets',
      nav_realestate: 'Vastgoed',
      publish:        'Advertentie Plaatsen',
      login:          'Inloggen',
      hero_eyebrow:   'De Beste Aanbiedingen ter Wereld',
      hero_h1_1:      'Ontdek de Kunst van',
      hero_h1_em:     'Uitzonderlijk Leven',
      hero_sub:       'Luxe auto\'s, jachten, jets en vastgoed van elite dealers wereldwijd.',
      search_ph:      'Zoek op merk, model, locatie…',
      btn_search:     'Zoeken',
      cat_cars:       'Luxe Auto\'s',
      cat_yachts:     'Jachten',
      cat_jets:       'Privéjets',
      cat_realestate: 'Vastgoed',
      featured_label: 'Uitgelichte Advertenties',
      featured_title: 'Geselecteerd voor Veeleisende Kopers',
      view_all:       'Alle Advertenties Bekijken',
      card_details:   'Details',
      card_featured:  'Uitgelicht',
      card_new:       'Nieuw',
      categories_label:'Blader per Categorie',
      categories_title:'Elke Luxe, Eén Bestemming',
      how_label:      'Hoe Het Werkt',
      how_title:      'Simpel. Elegant. Moeiteloos.',
      how_step1_h:    'Verkennen en Ontdekken',
      how_step1_p:    'Ontdek duizenden geselecteerde advertenties in alle luxe categorieën, gefilterd op locatie, prijs en specificaties.',
      how_step2_h:    'Direct Contact Opnemen',
      how_step2_p:    'Neem rechtstreeks contact op met geverifieerde dealers en particuliere verkopers. Geen tussenpersonen, geen verborgen kosten.',
      how_step3_h:    'Met Vertrouwen Kopen',
      how_step3_p:    'Elke advertentie is geverifieerd. Profiteer van onze conciërgeondersteuning, juridische begeleiding en after-sales service wereldwijd.',
      dealer_h:       'Bent u een <span>luxe dealer</span>?<br>Begin vandaag met publiceren — gratis.',
      dealer_p:       'Sluit u aan bij duizenden elite dealers wereldwijd. Gratis proefperiode, geen creditcard nodig.',
      dealer_cta:     'Gratis Starten',
      dealer_plans:   'Plannen Bekijken',
      footer_desc:    'De meest exclusieve marktplaats ter wereld voor luxe auto\'s, jachten, privéjets en vastgoed.',
      footer_explore: 'Verkennen',
      footer_company: 'Bedrijf',
      footer_contact: 'Contact',
      footer_about:   'Over Ons',
      footer_dealers: 'Voor Dealers',
      footer_careers: 'Carrières',
      footer_press:   'Pers',
      footer_blog:    'Blog',
      footer_privacy: 'Privacybeleid',
      footer_terms:   'Gebruiksvoorwaarden',
      footer_copy:    '© 2025 LUL — Luxury Unique Listings. Alle rechten voorbehouden.',
      auth_signin:     'Inloggen',
      auth_signup:     'Account Aanmaken',
      auth_email:      'E-mailadres',
      auth_password:   'Wachtwoord',
      auth_name:       'Volledige naam',
      auth_confirm_pw: 'Bevestig wachtwoord',
      auth_forgot:     'Wachtwoord vergeten?',
      auth_no_account: 'Geen account?',
      auth_has_account:'Al een account?',
      auth_btn_signin: 'Inloggen',
      auth_btn_signup: 'Account Aanmaken',
      auth_or:         'of doorgaan met',
      cookie_title:    'Cookiebeleid',
      cookie_intro:    'Dit platform maakt gebruik van cookies en vergelijkbare trackingtechnologieën om een optimale functionaliteit te waarborgen en de browse-ervaring te verbeteren. De volgende secties bieden een uitgebreid overzicht van de gebruikte cookiecategorieën en de specifieke doeleinden die zij dienen.',
      cookie_essential_h:'Essentiële Cookies',
      cookie_essential_p:'Essentiële cookies zijn strikt noodzakelijk voor de goede werking van deze website. Ze faciliteren kernfunctionaliteiten zoals, maar niet beperkt tot, sessiebeheer, beveiligingsprotocollen en het bewaren van taalvoorkeuren. Aangezien deze cookies essentieel zijn voor de dienstverlening, kunnen ze niet door de gebruiker worden uitgeschakeld.',
      cookie_analytics_h:'Analytische Cookies',
      cookie_analytics_p:'Analytische cookies worden gebruikt om geanonimiseerde, geaggregeerde gegevens te verzamelen over de interacties van bezoekers met het platform — inclusief bezochte pagina\'s, sessieduur, apparaattype en browserkenmerken. De door deze cookies verkregen informatie maakt continue verbetering van de platformervaring mogelijk. Hiervoor kunnen analytische diensten van derden, zoals Google Analytics, worden ingezet.',
      cookie_marketing_h:'Marketing Cookies',
      cookie_marketing_p:'Marketing cookies dienen het doel om relevante promotionele inhoud te leveren en de effectiviteit van reclame-initiatieven te meten. Deze cookies helpen bij het identificeren van campagnes en communicatiekanalen die de hoogste betrokkenheid genereren binnen de doelgroep. Dergelijke cookies kunnen worden geplaatst door geautoriseerde externe reclamepartners die namens dit platform opereren.',
      cookie_social_h:   'Social Media Cookies',
      cookie_social_p:   'Social media cookies worden geplaatst door externe sociale netwerkdiensten die in deze website zijn geïntegreerd. Hun primaire functie is het mogelijk maken voor gebruikers om inhoud te delen via hun respectieve netwerken. Deze cookies zijn in staat om browseactiviteit over meerdere websites te volgen en op interesses gebaseerde gebruikersprofielen op te bouwen.',
      cookie_close:    'Sluiten',
      about_eyebrow:     'Over Ons',
      about_title:       'De Meest Exclusieve Marktplaats ter Wereld',
      about_subtitle:    'LUL — Luxury Unique Listings verbindt veeleisende kopers met elite dealers en particuliere verkopers van \'s werelds finest luxe activa.',
      about_mission_h:   'Onze Missie',
      about_mission_p:   'Het creëren van één vertrouwde bestemming waar luxe en technologie samenkomen. Het verwerven van een uitzonderlijke auto, jacht, jet of vastgoed moet een even verfijnde ervaring zijn als het object zelf.',
      about_reach_h:     'Wereldwijd Bereik',
      about_reach_p:     'Met meer dan 3.500 geverifieerde dealers in meer dan 140 landen is LUL het toonaangevende platform voor vermogende particulieren op zoek naar de beste luxe activa wereldwijd.',
      about_trust_h:     'Vertrouwen en Verificatie',
      about_trust_p:     'Elke dealer op ons platform doorloopt een rigoureus verificatieproces. Wij bieden conciërgeondersteuning, juridisch advies en after-sales service wereldwijd.',
      about_social_label:'Blijf Verbonden',
      about_social_title:'Volg Ons op Social Media',
      about_social_desc: 'Blijf op de hoogte van de nieuwste luxe advertenties, exclusieve evenementen en branche-inzichten door onze officiële kanalen te volgen.'
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
