/* Tafix adaptation of TemplateMo 622 Clearwave. */
(() => {
  'use strict';
  const nav = document.getElementById('mainNav');
  const button = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const smallScreen = window.matchMedia('(max-width: 768px)');
  function setMenu(open, returnFocus = false) {
    menu.classList.toggle('open', open);
    menu.inert = !open;
    button.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) menu.querySelector('a').focus();
    else if (returnFocus) button.focus();
  }
  button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (button.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') { setMenu(false, true); return; }
    if (event.key === 'Tab') {
      const items = [button, ...menu.querySelectorAll('a')];
      const index = items.indexOf(document.activeElement);
      if (index < 0 || (!event.shiftKey && index === items.length - 1) || (event.shiftKey && index === 0)) {
        event.preventDefault();
        (event.shiftKey ? items[items.length - 1] : items[0]).focus();
      }
    }
  });
  smallScreen.addEventListener('change', () => {if (!smallScreen.matches) setMenu(false);});
  const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', updateNav, {passive:true}); updateNav();
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }), {threshold:0.06});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  const filters = document.querySelector('.app-filters');
  if (filters) {
    filters.hidden = false;
    filters.querySelectorAll('button').forEach(filter => filter.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach(btn => btn.setAttribute('aria-pressed', String(btn === filter)));
      let count = 0;
      document.querySelectorAll('.app-card').forEach(card => {
        card.hidden = filter.dataset.filter !== 'all' && card.dataset.platform !== filter.dataset.filter;
        if (!card.hidden) { count++; card.classList.add('visible'); }
      });
      document.getElementById('filterStatus').textContent = `${count} apps shown`;
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const config = window.TAFIX_APPS || {};
  function addLink(container, value, label, className, hosts) {
    if (!value) return;
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || (hosts && !hosts.includes(url.hostname))) return;
      const a = document.createElement('a'); a.href = url.href; a.className = className + ' store-button';
      const icons = {
        'apps.apple.com': '<svg class="store-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.75 3.08.81 1.18-.24 2.31-.94 3.57-.85 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z"/></svg>',
        'play.google.com': '<svg class="store-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M3.6 2.1 13.5 12 3.6 21.9V2.1Zm1.7-.4L16.7 8l-2.4 3L5.3 1.7Zm12.3 6.8 4.1 2.3c1 .5 1 1.9 0 2.4l-4.1 2.3-2.7-3.5 2.7-3.5ZM14.3 13l2.4 3L5.3 22.3l9-9.3Z"/></svg>'
      };
      if (icons[url.hostname]) a.innerHTML = icons[url.hostname];
      const text = document.createElement('span'); text.textContent = label; a.append(text);
      container.append(a);
    } catch (_) { /* Unconfigured or malformed links stay hidden. */ }
  }
  document.querySelectorAll('[data-store-links]').forEach(el => {
    const app = config[el.dataset.storeLinks] || {};
    addLink(el, app.appStore, 'Download on the App Store ↗', 'btn-primary-lg', ['apps.apple.com']);
    addLink(el, app.googlePlay, 'Get it on Google Play ↗', 'btn-outline-lg', ['play.google.com']);
  });
  document.querySelectorAll('[data-legal-links]').forEach(el => {
    const app = config[el.dataset.legalLinks] || {};
    ['privacy', 'terms'].forEach(kind => {
      const link = el.querySelector(`[data-legal-kind="${kind}"]`);
      if (!link || !app[kind]) return;
      try {
        const url = new URL(app[kind]);
        if (url.protocol === 'https:') link.href = url.href;
      } catch (_) { /* Keep the working local legal page link. */ }
    });
  });
})();
