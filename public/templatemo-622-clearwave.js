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
      const a = document.createElement('a'); a.href = url.href; a.textContent = label; a.className = className;
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
    addLink(el, app.privacy, 'Privacy policy', 'text-link');
    addLink(el, app.terms, 'Terms of use', 'text-link');
  });
})();
