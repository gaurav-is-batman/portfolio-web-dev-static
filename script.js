(function () {
  'use strict';

  // ─────────────────────────────────────────
  //  INTRO TYPEWRITER (here i have used AI)
  // ─────────────────────────────────────────
  const introEl      = document.getElementById('intro');
  const introTextEl  = document.getElementById('intro-text');
  const introCursorEl = document.getElementById('intro-cursor');
  const name         = 'GAURAV.';
  let   charIndex    = 0;

  function type() {
    if (charIndex < name.length) {
      introTextEl.textContent = name.slice(0, ++charIndex);
      introTextEl.appendChild(introCursorEl); // keep cursor at end
      setTimeout(type, 65);
    } else {
      // Hold for a moment, then fade out
      setTimeout(exitIntro, 320);
    }
  }

  function exitIntro() {
    introEl.classList.add('fade-out');
    // After the CSS transition completes, hide and trigger hero
    setTimeout(function () {
      introEl.style.display = 'none';
      revealHero();
    }, 600);
  }

  type(); // kick off

  // ─────────────────────────────────────────
  //  HERO REVEAL  (Here i have used AI)
  // ─────────────────────────────────────────
  function revealHero() {
    var nav = document.querySelector('nav');
    if (nav) nav.classList.add('visible');

    var words = document.querySelectorAll('.headline-word');
    words.forEach(function (word, i) {
      setTimeout(function () {
        word.classList.add('revealed');
      }, i * 120);
    });

    setTimeout(function () {
      var sub    = document.querySelector('.hero-sub');
      var badge  = document.querySelector('.hero-badge');
      var idx    = document.querySelector('.hero-index');
      var scroll = document.querySelector('.hero-scroll');

      if (sub)    sub.classList.add('visible');
      if (badge)  badge.classList.add('visible');
      if (idx)    idx.classList.add('visible');
      if (scroll) scroll.classList.add('visible');
    }, words.length * 120 + 200);
  }

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
  var revealEls = document.querySelectorAll('.reveal, .reveal-x, .reveal-fade');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el    = entry.target;
        var delay = el.dataset.delay || 0;
        setTimeout(function () {
          el.classList.add('visible');
        }, Number(delay));
        observer.unobserve(el); // fire once
      }
    });
  }, {
    rootMargin: '-8% 0px',
    threshold: 0.01
  });

  revealEls.forEach(function (el) { observer.observe(el); });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
