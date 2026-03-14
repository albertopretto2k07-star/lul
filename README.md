# LUXMARKET — The World's Luxury Marketplace

A premium luxury listing platform connecting verified dealers with discerning buyers worldwide. Built as a fully responsive, multi-language single-page application with vanilla HTML, CSS, and JavaScript.

## Pages

- **Homepage** (`index.html`) — Hero search, category browsing, featured listings, dealer CTA
- **Category Listings** (`pages/category.html`) — Filterable grid with category-specific filters (cars, real estate, yachts, watches), sorting, and pagination
- **Listing Detail** (`pages/listing-detail.html`) — Image gallery, specs, features, dealer sidebar with contact actions, similar listings
- **Dealer Plans** (`pages/dealer-plans.html`) — Pricing tiers (Free Trial, Premium, Elite+) with monthly/annual toggle, feature comparison table, FAQ accordion
- **Dealer Dashboard** (`pages/dealer-dashboard.html`) — Stats overview, charts, listings management table, referral program, API integration
- **Contact** (`pages/contact.html`) — Contact form with subject selection, contact information, map placeholder

## Features

- **Internationalization** — 10 languages (EN, IT, FR, DE, ES, PT, AR, ZH, JA, RU) with RTL support for Arabic
- **Cookie Consent** — GDPR-style banner with essential/analytics/marketing toggles and local analytics collection
- **Responsive Design** — Mobile-first with breakpoints at 480px, 768px, 1024px, and 1280px
- **Scroll Animations** — IntersectionObserver-based fade-in with staggered children and reduced motion support
- **Comparison Tool** — Add up to 4 listings to compare (localStorage-backed)
- **Image Gallery** — Thumbnail navigation with keyboard arrow support
- **Accessible** — ARIA roles, focus-visible states, semantic HTML, screen reader labels

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES5 compatible)
- Google Fonts: Playfair Display (headings) + Inter (body)
- No build tools or dependencies required — open `index.html` in a browser

## Project Structure

```
├── index.html              # Homepage
├── pages/
│   ├── category.html       # Category listing browser
│   ├── listing-detail.html # Individual listing detail
│   ├── dealer-plans.html   # Pricing plans
│   ├── dealer-dashboard.html # Dealer management dashboard
│   └── contact.html        # Contact page
├── css/
│   ├── style.css           # Design system + components
│   ├── responsive.css      # Breakpoints + RTL
│   └── animations.css      # Scroll animations + hover effects
└── js/
    ├── main.js             # Navigation, gallery, comparison, interactions
    ├── cookies.js           # GDPR consent + analytics
    └── i18n.js             # Multi-language support
```
