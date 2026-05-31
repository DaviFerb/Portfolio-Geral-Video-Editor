/* ============================================================
   DAVIK — Editor de Vídeo | Portfolio
   main.js
   ============================================================ */

'use strict';

/* ── 1. SMOOTH SCROLL WITH PREMIUM EASING ─────────────────── */
function smoothScrollTo(targetY, duration) {
  duration = duration || 900;
  var startY = window.scrollY;
  var distance = targetY - startY;
  var startTime = null;

  function easeInOutQuart(t) {
    return t < 0.5
      ? 8 * t * t * t * t
      : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    var elapsed  = currentTime - startTime;
    var progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuart(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function scrollToSection(selector) {
  var el = document.querySelector(selector);
  if (!el) return;
  var navHeight = 64;
  var targetY   = el.getBoundingClientRect().top + window.scrollY - navHeight;
  smoothScrollTo(targetY);
}

/* Wire all internal anchor links */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    scrollToSection(href);
  });
});


/* ── 2. NAVBAR SCROLL EFFECT ──────────────────────────────── */
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


/* ── 3. ACTIVE NAV LINK HIGHLIGHTING ─────────────────────── */
var sections   = document.querySelectorAll('section[id]');
var navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  var current = '';
  sections.forEach(function(s) {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(function(a) {
    var href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === current);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();


/* ── 4. MOBILE MENU ───────────────────────────────────────── */
var hamburger  = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function() {
  var isOpen = mobileMenu.classList.toggle('open');
  document.body.style.overflow = isOpen ? 'hidden' : '';
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

mobileMenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', closeMobile);
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobile();
});


/* ── 5. PORTFOLIO TABS / FILTER ───────────────────────────── */
var tabs  = document.querySelectorAll('.port-tab');
var cards = document.querySelectorAll('.port-card');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    tabs.forEach(function(t) { t.classList.remove('active'); });
    tab.classList.add('active');
    var filter = tab.dataset.filter;
    cards.forEach(function(card) {
      var match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});


/* ── 6. SCROLL ANIMATIONS ─────────────────────────────────── */
var fadeObserver = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.fade-up').forEach(function(el) {
  fadeObserver.observe(el);
});


/* ── 7. LANGUAGE SWITCHER ─────────────────────────────────── */
var translations = {
  pt: {
    'nav-sobre':     'Sobre',
    'nav-servicos':  'Serviços',
    'nav-portfolio': 'Portfólio',
    'nav-contato':   'Contato',

    'hero-eyebrow':     'Disponível para novos projetos',
    'hero-title':       'Edição que <em>transforma</em><br />conteúdo em resultado.',
    'hero-desc':        'Editor de vídeo especializado em Long-form, Short-form, Motion Graphics e Sound Design. Trabalho com criadores e empresas que levam qualidade a sério.',
    'hero-btn-work':    'Ver Trabalhos',
    'hero-btn-contact': 'Entrar em Contato',

    'about-tag':   'Sobre mim',
    'about-title': 'Oi, eu sou o Davik — editor que pensa no resultado.',
    'about-text1': 'Trabalho com edição de vídeo atendendo criadores de conteúdo, marcas e empresas que buscam qualidade acima da média. Minha abordagem combina técnica refinada com olhar criativo — cada corte tem uma razão, cada trilha tem um propósito.',
    'about-text2': 'Acredito que um bom vídeo não é só bonito: ele retém atenção, comunica com clareza e faz a mensagem chegar do jeito certo. É isso que entrego.',
    'diff1-title': 'Foco em resultado',
    'diff1-desc':  'Edito pensando no objetivo final: retenção, conversão ou engajamento.',
    'diff2-title': 'Comunicação clara e entrega no prazo',
    'diff2-desc':  'Sem sumiços, sem atraso. Processo organizado do início ao fim.',
    'diff3-title': 'Olhar estético apurado',
    'diff3-desc':  'Atenção a cada detalhe visual e sonoro que eleva a qualidade percebida.',

    'services-tag':   'Serviços',
    'services-title': 'O que eu entrego',
    'services-sub':   'Do roteiro ao produto final — edição completa para o formato que o seu conteúdo exige.',
    'svc1-title': 'Long-form Editing',
    'svc1-desc':  'Edição completa de vídeos longos: YouTube, documentários, entrevistas, aulas e vídeos de vendas. Corte preciso, ritmo certo e retenção em foco.',
    'svc2-title': 'Short-form Editing',
    'svc2-desc':  'Reels, Shorts e TikToks que prendem nos primeiros segundos. Edição acelerada, captioning moderno e ganchos visuais que funcionam.',
    'svc3-title': 'Motion Graphics',
    'svc3-desc':  'Animações leves e elegantes: lower thirds, títulos animados, intros e elementos gráficos que elevam a produção sem pesar.',
    'svc4-title': 'Sound Design',
    'svc4-desc':  'Trilha certa, efeitos no momento exato e áudio limpo. O som que a maioria ignora é o que diferencia um vídeo comum de um profissional.',

    'portfolio-tag':   'Portfólio',
    'portfolio-title': 'Trabalhos recentes',
    'portfolio-sub':   'Uma seleção dos projetos que mais me orgulho — Long-form e Short-form.',
    'tab-all':       'Todos',
    'tab-longform':  'Long-form',
    'tab-shortform': 'Short-form',
    'tab-motion':    'Motion',
    'btn-watch':     'Assistir',

    'contact-tag':   'Contato',
    'contact-title': 'Vamos trabalhar juntos?',
    'contact-sub':   'Me conta o seu projeto. Respondo em até 24h e dou uma devolutiva clara sobre como posso ajudar.',

    'footer-copy': '© 2025 Davik — Editor de Vídeo',
  },

  en: {
    'nav-sobre':     'About',
    'nav-servicos':  'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contato':   'Contact',

    'hero-eyebrow':     'Available for new projects',
    'hero-title':       'Editing that <em>transforms</em><br />content into results.',
    'hero-desc':        'Video editor specializing in Long-form, Short-form, Motion Graphics and Sound Design. I work with creators and businesses that take quality seriously.',
    'hero-btn-work':    'See Work',
    'hero-btn-contact': 'Get in Touch',

    'about-tag':   'About me',
    'about-title': "Hey, I'm Davik — an editor who thinks about results.",
    'about-text1': 'I work with video editing serving content creators, brands and companies that seek above-average quality. My approach combines refined technique with a creative eye — every cut has a reason, every track has a purpose.',
    'about-text2': "I believe a great video isn't just beautiful: it retains attention, communicates clearly and delivers the message the right way. That's what I deliver.",
    'diff1-title': 'Results-focused',
    'diff1-desc':  'I edit with the end goal in mind: retention, conversion or engagement.',
    'diff2-title': 'Clear communication & on-time delivery',
    'diff2-desc':  'No ghosting, no delays. Organized process from start to finish.',
    'diff3-title': 'Sharp aesthetic eye',
    'diff3-desc':  'Attention to every visual and audio detail that elevates perceived quality.',

    'services-tag':   'Services',
    'services-title': 'What I deliver',
    'services-sub':   'From script to final product — complete editing for the format your content needs.',
    'svc1-title': 'Long-form Editing',
    'svc1-desc':  'Complete editing for long videos: YouTube, documentaries, interviews, courses and sales videos. Precise cuts, right pacing, retention-focused.',
    'svc2-title': 'Short-form Editing',
    'svc2-desc':  'Reels, Shorts and TikToks that hook in the first seconds. Fast-paced editing, modern captions and visual hooks that work.',
    'svc3-title': 'Motion Graphics',
    'svc3-desc':  'Light and elegant animations: lower thirds, animated titles, intros and graphic elements that elevate your production.',
    'svc4-title': 'Sound Design',
    'svc4-desc':  'Right soundtrack, effects at the perfect moment and clean audio. The sound most people ignore is exactly what separates a common video from a professional one.',

    'portfolio-tag':   'Portfolio',
    'portfolio-title': 'Recent work',
    'portfolio-sub':   "A selection of projects I'm most proud of — Long-form and Short-form.",
    'tab-all':       'All',
    'tab-longform':  'Long-form',
    'tab-shortform': 'Short-form',
    'tab-motion':    'Motion',
    'btn-watch':     'Watch',

    'contact-tag':   'Contact',
    'contact-title': "Let's work together?",
    'contact-sub':   'Tell me about your project. I respond within 24h with a clear breakdown of how I can help.',

    'footer-copy': '© 2025 Davik — Video Editor',
  }
};

var currentLang = 'pt';

function set(sel, key, useHTML) {
  var el = document.querySelector(sel);
  var t  = translations[currentLang];
  if (!el || !t[key]) return;
  if (useHTML) el.innerHTML = t[key];
  else el.textContent = t[key];
}

function applyLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  /* Nav */
  set('#nav-sobre',      'nav-sobre');
  set('#nav-servicos',   'nav-servicos');
  set('#nav-portfolio',  'nav-portfolio');
  set('#nav-contato',    'nav-contato');
  set('#mob-sobre',      'nav-sobre');
  set('#mob-servicos',   'nav-servicos');
  set('#mob-portfolio',  'nav-portfolio');
  set('#mob-contato',    'nav-contato');

  /* Hero */
  set('#hero-eyebrow-text', 'hero-eyebrow');
  set('#hero-title',        'hero-title',    true);
  set('#hero-desc',         'hero-desc',     true);
  set('#hero-btn-work',     'hero-btn-work');
  set('#hero-btn-contact',  'hero-btn-contact');

  /* About */
  set('#about-tag',    'about-tag');
  set('#about-title',  'about-title');
  set('#about-text1',  'about-text1');
  set('#about-text2',  'about-text2');
  set('#diff1-title',  'diff1-title');
  set('#diff1-desc',   'diff1-desc');
  set('#diff2-title',  'diff2-title');
  set('#diff2-desc',   'diff2-desc');
  set('#diff3-title',  'diff3-title');
  set('#diff3-desc',   'diff3-desc');

  /* Services */
  set('#services-tag',   'services-tag');
  set('#services-title', 'services-title');
  set('#services-sub',   'services-sub');
  set('#svc1-title', 'svc1-title');
  set('#svc1-desc',  'svc1-desc');
  set('#svc2-title', 'svc2-title');
  set('#svc2-desc',  'svc2-desc');
  set('#svc3-title', 'svc3-title');
  set('#svc3-desc',  'svc3-desc');
  set('#svc4-title', 'svc4-title');
  set('#svc4-desc',  'svc4-desc');

  /* Portfolio */
  set('#portfolio-tag',   'portfolio-tag');
  set('#portfolio-title', 'portfolio-title');
  set('#portfolio-sub',   'portfolio-sub');
  set('#tab-all',       'tab-all');
  set('#tab-longform',  'tab-longform');
  set('#tab-shortform', 'tab-shortform');
  set('#tab-motion',    'tab-motion');
  document.querySelectorAll('.btn-watch-text').forEach(function(el) {
    el.textContent = translations[currentLang]['btn-watch'];
  });

  /* Contact */
  set('#contact-tag',   'contact-tag');
  set('#contact-title', 'contact-title');
  set('#contact-sub',   'contact-sub');

  /* Footer */
  set('#footer-copy', 'footer-copy');

  /* HTML lang */
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  /* Update button states */
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(function(btn) {
  btn.addEventListener('click', function() { applyLang(btn.dataset.lang); });
});
