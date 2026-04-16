/* ============================================================
   JAIS DESIGN — Main Script
   ============================================================ */

(function () {
  'use strict';

  /* ── 1. NAVBAR: Sticky Shrink + Active Link ──────────────── */
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileNav = document.querySelector('.navbar__mobile');

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Hamburger toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── 2. INTERSECTION OBSERVER: Fade-Up Animations ────────── */
  const fadeElements = document.querySelectorAll('.fade-up');

  if (fadeElements.length > 0) {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));
  }

  /* ── 3. COOKIE BANNER ─────────────────────────────────────── */
  const COOKIE_KEY = 'jais_cookie_consent';
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieAccept = document.querySelector('.cookie-btn-accept');
  const cookieDecline = document.querySelector('.cookie-btn-decline');

  function hideCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.classList.remove('visible');
    setTimeout(() => { cookieBanner.style.display = 'none'; }, 700);
  }

  if (cookieBanner && !localStorage.getItem(COOKIE_KEY)) {
    setTimeout(() => {
      cookieBanner.classList.add('visible');
    }, 1500);
  } else if (cookieBanner) {
    cookieBanner.style.display = 'none';
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      hideCookieBanner();
    });
  }

  if (cookieDecline) {
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, 'declined');
      hideCookieBanner();
    });
  }

  /* ── 4. HERO PARALLAX (subtle) ────────────────────────────── */
  const heroBg = document.querySelector('.hero__bg img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `translateY(${scrolled * 0.25}px)`;
    }, { passive: true });
  }

  /* ── 5. SMOOTH ANCHOR SCROLL ──────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')) || 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── 6. FORM: Basic Client-Side Validation ────────────────── */
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      let valid = true;
      const required = contactForm.querySelectorAll('[required]');

      required.forEach(field => {
        const group = field.closest('.form-group');
        group.classList.remove('error');
        if (!field.value.trim()) {
          group.classList.add('error');
          valid = false;
        }
      });

      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailField.closest('.form-group').classList.add('error');
        valid = false;
      }

      if (!valid) e.preventDefault();
    });

    // Live clear errors
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.closest('.form-group')?.classList.remove('error');
      });
    });
  }

})();
