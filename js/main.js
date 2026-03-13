/* ============================================
   LUXMARKET - Core JavaScript
   Navigation, Gallery, Comparison, Interactions
   ============================================ */

const LuxMarket = (function () {
  'use strict';

  const state = {
    compareItems: JSON.parse(localStorage.getItem('lux_compare') || '[]'),
    currentGalleryIndex: 0,
    galleryTotal: 8,
    filtersOpen: false,
    isAnnual: false
  };

  function init() {
    initMobileNav();
    initLanguageSwitcher();
    initScrollAnimations();
    initCategoryBar();
    initGallery();
    initComparison();
    initPricingToggle();
    initFilters();
    initFaqAccordion();
    initContactForm();
    initModals();
    initHeroSearch();
  }

  // --- Mobile Navigation ---
  function initMobileNav() {
    const btn = document.querySelector('.mobile-menu-btn');
    const categoryBar = document.querySelector('.category-bar');
    if (!btn || !categoryBar) return;

    btn.addEventListener('click', function () {
      categoryBar.classList.toggle('open');
      const isOpen = categoryBar.classList.contains('open');
      categoryBar.style.display = isOpen ? 'block' : '';
    });
  }

  // --- Language Switcher ---
  function initLanguageSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;

    const toggle = switcher.querySelector('.lang-toggle');
    const dropdown = switcher.querySelector('.lang-dropdown');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', !isOpen);
    });

    dropdown.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (window.LuxI18n) {
          window.LuxI18n.setLanguage(lang);
        }
        var codeEl = toggle.querySelector('.lang-code');
        if (codeEl) codeEl.textContent = lang.toUpperCase();
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!switcher.contains(e.target)) {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Scroll Animations ---
  function initScrollAnimations() {
    var animatedEls = document.querySelectorAll('[data-animate], [data-animate-stagger]');
    if (!animatedEls.length) return;

    if (!('IntersectionObserver' in window)) {
      animatedEls.forEach(function (el) { el.classList.add('animate-in'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedEls.forEach(function (el) { observer.observe(el); });
  }

  // --- Category Bar ---
  function initCategoryBar() {
    var params = new URLSearchParams(window.location.search);
    var cat = params.get('cat');
    if (!cat) return;

    document.querySelectorAll('.category-list a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf('cat=' + cat) !== -1) {
        link.classList.add('active');
      }
    });

    var nameEl = document.getElementById('category-name');
    if (nameEl) {
      var names = {
        'real-estate': 'Real Estate',
        'cars': 'Cars',
        'yachts': 'Yachts',
        'jets': 'Jets',
        'watches': 'Watches',
        'jewelry': 'Jewelry',
        'motorcycles': 'Motorcycles',
        'helicopters': 'Helicopters'
      };
      nameEl.textContent = names[cat] || cat;
    }

    // Show/hide category-specific filters
    document.querySelectorAll('[data-categories]').forEach(function (el) {
      var cats = el.getAttribute('data-categories').split(',');
      el.style.display = cats.indexOf(cat) !== -1 ? '' : 'none';
    });
  }

  // --- Image Gallery ---
  function initGallery() {
    var main = document.querySelector('.gallery-main');
    var thumbs = document.querySelectorAll('.gallery-thumb');
    var prevBtn = document.querySelector('.gallery-nav--prev');
    var nextBtn = document.querySelector('.gallery-nav--next');
    var counter = document.querySelector('.gallery-counter');

    if (!main || !thumbs.length) return;

    state.galleryTotal = thumbs.length;

    function updateGallery(index) {
      state.currentGalleryIndex = index;
      thumbs.forEach(function (t, i) {
        t.classList.toggle('active', i === index);
      });
      if (counter) {
        counter.textContent = (index + 1) + ' of ' + state.galleryTotal;
      }
    }

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () { updateGallery(i); });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        var idx = (state.currentGalleryIndex - 1 + state.galleryTotal) % state.galleryTotal;
        updateGallery(idx);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        var idx = (state.currentGalleryIndex + 1) % state.galleryTotal;
        updateGallery(idx);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (!document.querySelector('.gallery')) return;
      if (e.key === 'ArrowLeft' && prevBtn) prevBtn.click();
      if (e.key === 'ArrowRight' && nextBtn) nextBtn.click();
    });

    updateGallery(0);
  }

  // --- Comparison Tool ---
  function initComparison() {
    updateCompareFloat();

    document.querySelectorAll('[data-compare]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = this.getAttribute('data-compare');
        addToCompare(id);
      });
    });

    var floatBtn = document.querySelector('.compare-float .btn');
    if (floatBtn) {
      floatBtn.addEventListener('click', function () {
        openCompareModal();
      });
    }
  }

  function addToCompare(id) {
    var idx = state.compareItems.indexOf(id);
    if (idx !== -1) {
      state.compareItems.splice(idx, 1);
    } else if (state.compareItems.length < 4) {
      state.compareItems.push(id);
    }
    localStorage.setItem('lux_compare', JSON.stringify(state.compareItems));
    updateCompareFloat();
  }

  function updateCompareFloat() {
    var floatEl = document.querySelector('.compare-float');
    if (!floatEl) return;
    var count = state.compareItems.length;
    floatEl.classList.toggle('visible', count > 0);
    var countEl = floatEl.querySelector('.compare-count');
    if (countEl) countEl.textContent = count;
  }

  function openCompareModal() {
    // Placeholder: would open a modal with side-by-side comparison
  }

  // --- Pricing Toggle ---
  function initPricingToggle() {
    var toggle = document.getElementById('pricing-toggle');
    if (!toggle) return;

    var monthlyLabel = toggle.previousElementSibling;
    var annualLabel = toggle.nextElementSibling;

    toggle.addEventListener('click', function () {
      state.isAnnual = !state.isAnnual;
      toggle.classList.toggle('active', state.isAnnual);

      if (monthlyLabel) monthlyLabel.classList.toggle('active', !state.isAnnual);
      if (annualLabel) {
        var textSpan = annualLabel.nodeType === 3 ? annualLabel : annualLabel;
        annualLabel.classList.toggle('active', state.isAnnual);
      }

      document.querySelectorAll('[data-monthly]').forEach(function (el) {
        var monthly = el.getAttribute('data-monthly');
        var annual = el.getAttribute('data-annual');
        el.textContent = '$' + (state.isAnnual ? annual : monthly);
      });

      document.querySelectorAll('[data-period]').forEach(function (el) {
        el.textContent = state.isAnnual ? '/year' : '/month';
      });
    });
  }

  // --- Filters ---
  function initFilters() {
    var toggleBtn = document.querySelector('.filter-toggle-mobile');
    var panel = document.querySelector('.filters-panel');
    if (!toggleBtn || !panel) return;

    toggleBtn.addEventListener('click', function () {
      state.filtersOpen = !state.filtersOpen;
      panel.classList.toggle('open', state.filtersOpen);
      toggleBtn.textContent = state.filtersOpen ? 'Hide Filters' : 'Show Filters';
    });

    var resetBtn = panel.querySelector('.btn-outline');
    if (resetBtn && resetBtn.textContent.trim() === 'Reset') {
      resetBtn.addEventListener('click', function () {
        panel.querySelectorAll('input, select').forEach(function (input) {
          if (input.type === 'checkbox') input.checked = false;
          else input.value = '';
        });
      });
    }
  }

  // --- FAQ Accordion ---
  function initFaqAccordion() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = this.closest('.faq-item');
        var wasOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item').forEach(function (i) {
          i.classList.remove('open');
        });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  // --- Contact Form ---
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Placeholder: form submission logic
      var btn = form.querySelector('[type="submit"]');
      var original = btn.textContent;
      btn.textContent = 'Sent!';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 2000);
    });
  }

  // --- Modals ---
  function initModals() {
    document.querySelectorAll('[data-modal]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
      });
    });

    document.querySelectorAll('.modal__close').forEach(function (btn) {
      btn.addEventListener('click', function () {
        this.closest('.modal-overlay').classList.remove('open');
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) overlay.classList.remove('open');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(function (m) {
          m.classList.remove('open');
        });
      }
    });
  }

  // --- Hero Search ---
  function initHeroSearch() {
    var form = document.querySelector('.hero-search');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var cat = form.querySelector('select').value;
      var q = form.querySelector('input[type="text"]').value;
      var parts = [];
      if (cat) parts.push('cat=' + encodeURIComponent(cat));
      if (q) parts.push('q=' + encodeURIComponent(q));
      var url = 'pages/category.html';
      if (parts.length) url += '?' + parts.join('&');
      window.location.href = url;
    });
  }

  // --- Listing Card Renderer ---
  function renderListingCard(data) {
    var card = document.createElement('div');
    card.className = 'listing-card';
    card.setAttribute('data-animate', 'fade-up');

    var badge = '';
    if (data.badge) {
      badge = '<span class="listing-card__badge listing-card__badge--' + data.badge.toLowerCase() + '">' + data.badge + '</span>';
    }

    card.innerHTML =
      '<div class="listing-card__image">' +
        (data.image
          ? '<img src="' + data.image + '" alt="' + (data.title || '') + '">'
          : '<div class="image-placeholder"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>No Image</span></div>') +
        badge +
      '</div>' +
      '<div class="listing-card__body">' +
        '<div class="listing-card__price">' + (data.price || '$0,000,000') + '</div>' +
        '<div class="listing-card__title">' + (data.title || 'Listing Title') + '</div>' +
        '<div class="listing-card__location"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> ' + (data.location || 'City, Country') + '</div>' +
        '<div class="listing-card__meta">' + (data.meta || '') + '</div>' +
      '</div>' +
      '<div class="listing-card__actions">' +
        '<button><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> Save</button>' +
        '<button data-compare="' + (data.id || '') + '">Compare</button>' +
      '</div>';

    return card;
  }

  // --- Referral copy ---
  document.addEventListener('click', function (e) {
    if (e.target.closest('.referral-link .btn')) {
      var input = e.target.closest('.referral-link').querySelector('input');
      if (input) {
        input.select();
        document.execCommand('copy');
        var btn = e.target.closest('.btn');
        var orig = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = orig; }, 1500);
      }
    }
  });

  // --- API key show/hide ---
  document.addEventListener('click', function (e) {
    if (e.target.closest('.api-key-display .btn')) {
      var input = e.target.closest('.api-key-display').querySelector('input');
      var btn = e.target.closest('.btn');
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          btn.textContent = 'Hide';
        } else {
          input.type = 'password';
          btn.textContent = 'Show';
        }
      }
    }
  });

  return {
    init: init,
    renderListingCard: renderListingCard,
    addToCompare: addToCompare
  };
})();

document.addEventListener('DOMContentLoaded', LuxMarket.init);
