/* Skyler Wang — portfolio landing behaviour */
(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  /* --- nav background once scrolled off the hero --- */
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-stuck', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- active link tracking --- */
  if ('IntersectionObserver' in window && sections.length) {
    var visible = new Map();
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible.set(e.target.id, e.intersectionRatio); });

      var bestId = null;
      var bestRatio = 0;
      visible.forEach(function (ratio, id) {
        if (ratio > bestRatio) { bestRatio = ratio; bestId = id; }
      });
      if (!bestId) return;

      links.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + bestId);
      });
    }, {
      rootMargin: '-68px 0px -45% 0px',
      threshold: [0, 0.15, 0.35, 0.6, 0.9]
    });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --- reveal on scroll --- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && reveals.length) {
    var ro = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var delay = parseInt(e.target.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { e.target.classList.add('is-in'); }, delay);
        obs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Failsafe: whatever the observer has not reached within a few seconds of
     load gets revealed anyway, so content can never be stranded invisible. */
  function revealAll() {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }
  window.addEventListener('load', function () { setTimeout(revealAll, 4000); });

  /* --- mobile menu --- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__links');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- photography lightbox --- */
  var shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
  var lb = document.getElementById('lightbox');
  if (lb && shots.length) {
    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('.lb__cap');
    var idx = 0;

    function show(i) {
      idx = (i + shots.length) % shots.length;
      var img = shots[idx].querySelector('img');
      var cap = shots[idx].querySelector('.shot__cap');
      lbImg.src = img.getAttribute('data-full') || img.src;
      lbImg.alt = img.alt || '';
      lbCap.textContent = cap ? cap.textContent.trim() : '';
    }
    function open(i) {
      show(i);
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      lb.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    shots.forEach(function (s, i) {
      s.addEventListener('click', function () { open(i); });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lb__x')) close();
    });
    var prev = lb.querySelector('.lb__nav--prev');
    var next = lb.querySelector('.lb__nav--next');
    if (prev) prev.addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
    if (next) next.addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });

    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }
})();
