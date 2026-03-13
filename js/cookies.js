/* ============================================
   LUXMARKET - Cookie Consent & Analytics
   GDPR-style consent + lightweight data collection
   ============================================ */

const CookieConsent = (function () {
  'use strict';

  var CONSENT_KEY = 'cookie-consent';
  var ANALYTICS_KEY = 'lux_analytics';
  var RETENTION_DAYS = 90;

  function init() {
    var consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      showBanner();
    } else {
      var parsed = JSON.parse(consent);
      if (parsed.analytics) {
        CookieAnalytics.init();
      }
    }
    bindEvents();
  }

  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    // Small delay for animation
    setTimeout(function () {
      banner.classList.add('show');
    }, 500);
  }

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('show');
  }

  function setConsent(type) {
    var consent = { essential: true, analytics: false, marketing: false, timestamp: Date.now() };

    if (type === 'all') {
      consent.analytics = true;
      consent.marketing = true;
    } else if (type === 'custom') {
      var analyticsEl = document.getElementById('cookie-analytics');
      var marketingEl = document.getElementById('cookie-marketing');
      consent.analytics = analyticsEl ? analyticsEl.checked : false;
      consent.marketing = marketingEl ? marketingEl.checked : false;
    }

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    hideBanner();

    if (consent.analytics) {
      CookieAnalytics.init();
    }
  }

  function bindEvents() {
    var acceptBtn = document.getElementById('cookie-accept');
    var essentialBtn = document.getElementById('cookie-essential');
    var customizeBtn = document.getElementById('cookie-customize-btn');
    var customizePanel = document.getElementById('cookie-customize');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () { setConsent('all'); });
    }
    if (essentialBtn) {
      essentialBtn.addEventListener('click', function () { setConsent('essential'); });
    }
    if (customizeBtn && customizePanel) {
      customizeBtn.addEventListener('click', function () {
        var isHidden = customizePanel.hidden;
        customizePanel.hidden = !isHidden;
        if (!isHidden) {
          // If closing customize, save custom settings
          setConsent('custom');
        }
      });
    }
  }

  return { init: init };
})();

// --- Analytics Collection ---
var CookieAnalytics = (function () {
  'use strict';

  var ANALYTICS_KEY = 'lux_analytics';
  var sessionStart = Date.now();
  var initialized = false;

  function init() {
    if (initialized) return;
    initialized = true;

    purgeOldData();
    trackPageView();
    trackSessionDuration();
  }

  function purgeOldData() {
    var data = getData();
    var cutoff = Date.now() - (90 * 24 * 60 * 60 * 1000);
    var filtered = data.filter(function (entry) {
      return entry.timestamp > cutoff;
    });
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(filtered));
  }

  function trackPageView() {
    var entry = {
      type: 'pageview',
      page: window.location.pathname + window.location.search,
      timestamp: Date.now(),
      referrer: document.referrer || 'direct',
      language: document.documentElement.lang || 'en',
      viewport: window.innerWidth + 'x' + window.innerHeight,
      country: localStorage.getItem('language') || 'en'
    };

    // Track category if on category page
    var params = new URLSearchParams(window.location.search);
    if (params.get('cat')) {
      entry.category = params.get('cat');
    }

    // Track search query
    if (params.get('q')) {
      entry.searchQuery = params.get('q');
    }

    appendData(entry);
  }

  function trackSessionDuration() {
    window.addEventListener('beforeunload', function () {
      var duration = Math.round((Date.now() - sessionStart) / 1000);
      var entry = {
        type: 'session',
        duration: duration,
        timestamp: Date.now(),
        page: window.location.pathname
      };
      appendData(entry);
    });
  }

  function appendData(entry) {
    var data = getData();
    data.push(entry);
    try {
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
    } catch (e) {
      // localStorage full, remove oldest entries
      data = data.slice(Math.floor(data.length / 2));
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(data));
    }
  }

  function getData() {
    try {
      return JSON.parse(localStorage.getItem(ANALYTICS_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function getPageViews(days) {
    var cutoff = Date.now() - ((days || 30) * 24 * 60 * 60 * 1000);
    return getData().filter(function (e) {
      return e.type === 'pageview' && e.timestamp > cutoff;
    });
  }

  function getViewsByDay(days) {
    var views = getPageViews(days || 30);
    var byDay = {};
    views.forEach(function (v) {
      var d = new Date(v.timestamp).toISOString().split('T')[0];
      byDay[d] = (byDay[d] || 0) + 1;
    });
    return byDay;
  }

  function getTrafficSources() {
    var views = getPageViews(30);
    var sources = { Direct: 0, Search: 0, Referral: 0, Social: 0 };
    views.forEach(function (v) {
      var ref = v.referrer || 'direct';
      if (ref === 'direct' || ref === '') sources.Direct++;
      else if (/google|bing|yahoo|duckduckgo/.test(ref)) sources.Search++;
      else if (/facebook|twitter|instagram|linkedin|tiktok/.test(ref)) sources.Social++;
      else sources.Referral++;
    });
    return sources;
  }

  function getViewsByCountry() {
    var views = getPageViews(30);
    var byCountry = {};
    views.forEach(function (v) {
      var c = (v.country || 'en').toUpperCase();
      byCountry[c] = (byCountry[c] || 0) + 1;
    });
    return byCountry;
  }

  return {
    init: init,
    getData: getData,
    getPageViews: getPageViews,
    getViewsByDay: getViewsByDay,
    getTrafficSources: getTrafficSources,
    getViewsByCountry: getViewsByCountry
  };
})();

// Initialize on load
document.addEventListener('DOMContentLoaded', CookieConsent.init);
