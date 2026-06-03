'use strict';

/* ================================================================
   NAVBAR — adiciona classe 'scrolled' ao rolar
   ================================================================ */
const navbar = document.getElementById('navbar');

if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

/* ================================================================
   SMOOTH SCROLL — links âncora com offset da navbar
   ================================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const hash = anchor.getAttribute('href');
    if (hash === '#') return;

    const target = document.querySelector(hash);
    if (!target) return;

    e.preventDefault();

    const offset = navbar ? navbar.offsetHeight : 64;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ================================================================
   FADE-UP — IntersectionObserver para elementos com .fade-up
   ================================================================ */
const fadeElements = document.querySelectorAll('.fade-up');

if (fadeElements.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -28px 0px',
    }
  );

  fadeElements.forEach(el => observer.observe(el));
}
