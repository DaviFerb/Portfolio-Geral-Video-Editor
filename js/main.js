/* ============================================================
   DAVIK PORTFOLIO — main.js
   - i18n (PT-BR / EN)
   - Smooth scroll with navbar offset
   - Navbar scroll state
   - Mobile menu toggle
   - Portfolio tabs
   - Scroll reveal (IntersectionObserver)
   - Scrollspy (active nav link)
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const i18n = {
  pt: {
    /* Nav */
    'nav.sobre':     'Sobre',
    'nav.servicos':  'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.contato':   'Contato',

    /* Hero */
    'hero.badge':           'Disponível para novos projetos',
    'hero.title.before':    'Edição que ',
    'hero.title.highlight': 'transforma',
    'hero.title.after':     'conteúdo em resultado.',
    'hero.subtitle':        'Editor de vídeo especializado em Long-form, Short-form, Motion Graphics e Sound Design.',
    'hero.cta.work':        'Ver Trabalhos',
    'hero.cta.contact':     'Entrar em Contato',

    /* Sobre */
    'sobre.label': 'Sobre',
    'sobre.title': 'Cada projeto começa com intenção.',
    'sobre.p1':    'Sou um editor de vídeo focado em transformar ideias em peças audiovisuais que realmente comunicam. Meu processo é estruturado desde o briefing até a entrega final — sem ruído no meio do caminho.',
    'sobre.p2':    'Trabalho com atenção aos detalhes que fazem diferença: cortes no tempo certo, trilha sonora que reforça a narrativa, motion que agrega sem distrair. O resultado é um conteúdo que parece intencional em cada frame.',
    'sobre.p3':    'Priorizo clareza na comunicação, prazos reais e revisões organizadas. Porque um bom projeto não é só sobre a edição — é sobre a experiência de trabalhar junto.',

    /* Serviços */
    'servicos.label': 'Serviços',
    'servicos.title': 'O que eu ofereço.',

    'servico.longform.title': 'Long-form Editing',
    'servico.longform.desc':  'Edição completa de podcasts, vlogs, documentários e vídeos extensos. Estrutura narrativa, pacing e identidade visual consistente em cada entrega.',

    'servico.shortform.title': 'Short-form Editing',
    'servico.shortform.desc':  'Reels, Shorts e TikToks com cortes dinâmicos, legenda estilizada e ritmo ajustado para retenção máxima. Conteúdo feito para parar o scroll.',

    'servico.motion.title': 'Motion Graphics',
    'servico.motion.desc':  'Animações, lower thirds, transições personalizadas e identidade visual em movimento. Motion que serve ao conteúdo sem sobrepor a mensagem.',

    'servico.sound.title': 'Sound Design',
    'servico.sound.desc':  'Tratamento de áudio, trilhas personalizadas, efeitos sonoros e mixagem. O som certo no momento certo muda completamente a percepção de um vídeo.',

    /* Portfólio */
    'portfolio.label':      'Portfólio',
    'portfolio.title':      'Trabalhos recentes.',
    'portfolio.tab.longform': 'Long-form',
    'portfolio.tab.shorts':   'Shorts & Reels',
    'portfolio.watch':      'Assistir',

    'portfolio.lf1.title':    'Podcast Visual — Episódio 01',
    'portfolio.lf1.category': 'Long-form · Podcast',
    'portfolio.lf1.desc':     'Edição completa com motion graphics integrado, tratamento de cores e design sonoro.',

    'portfolio.lf2.title':    'Documentário: Processo Criativo',
    'portfolio.lf2.category': 'Long-form · Documentário',
    'portfolio.lf2.desc':     'Narrativa visual construída com arquivo de imagens, entrevistas e trilha original.',

    'portfolio.lf3.title':    'Vlog de Lifestyle',
    'portfolio.lf3.category': 'Long-form · Vlog',
    'portfolio.lf3.desc':     'Edição dinâmica com pacing ajustado para manter engajamento ao longo de todo o conteúdo.',

    'portfolio.s1.title':    'Reel de Produto',
    'portfolio.s1.category': 'Short-form · Reel',
    'portfolio.s1.desc':     '30 segundos com cortes rítmicos, motion e call to action eficiente.',

    'portfolio.s2.title':    'TikTok de Review',
    'portfolio.s2.category': 'Short-form · TikTok',
    'portfolio.s2.desc':     'Edição rápida com legenda estilizada e ritmo ajustado para retenção máxima.',

    'portfolio.s3.title':    'Short Motivacional',
    'portfolio.s3.category': 'Short-form · YouTube Shorts',
    'portfolio.s3.desc':     'Storytelling condensado em menos de 60 segundos com impacto emocional real.',

    /* Processo */
    'processo.label': 'Processo',
    'processo.title': 'Como trabalhamos juntos.',

    'processo.step1.title': 'Briefing',
    'processo.step1.desc':  'Entendo o projeto, o público, o objetivo e o que você espera da edição. Aqui evito suposições.',

    'processo.step2.title': 'Edição',
    'processo.step2.desc':  'Começo a construção visual com base no que foi alinhado. Estrutura, pacing, motion e áudio — tudo integrado.',

    'processo.step3.title': 'Revisões',
    'processo.step3.desc':  'Apresento o primeiro cut e abrimos rodadas de ajuste. Comunicação clara, feedback organizado.',

    'processo.step4.title': 'Entrega',
    'processo.step4.desc':  'Arquivo final nas especificações corretas para cada plataforma. Entrega no prazo combinado.',

    /* Contato */
    'contato.label':    'Contato',
    'contato.title':    'Vamos trabalhar juntos.',
    'contato.subtitle': 'Escolha como prefere se conectar.',

    'contato.discord.label':  'Discord',
    'contato.discord.handle': 'baiaak',
    'contato.email.label':    'E-mail',
    'contato.email.handle':   'davik@email.com',
    'contato.x.label':        'X / Twitter',
    'contato.x.handle':       'https://x.com/DvFerrz',

    /* Footer */
    'footer.tagline': 'Feito com atenção aos detalhes.',
    'footer.copy':    '© 2025 Davik. Todos os direitos reservados.',
  },

  en: {
    /* Nav */
    'nav.sobre':     'About',
    'nav.servicos':  'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contato':   'Contact',

    /* Hero */
    'hero.badge':           'Available for new projects',
    'hero.title.before':    'Editing that ',
    'hero.title.highlight': 'transforms',
    'hero.title.after':     'content into results.',
    'hero.subtitle':        'Video editor specialized in Long-form, Short-form, Motion Graphics and Sound Design.',
    'hero.cta.work':        'See Work',
    'hero.cta.contact':     'Get in Touch',

    /* About */
    'sobre.label': 'About',
    'sobre.title': 'Every project starts with intention.',
    'sobre.p1':    'I\'m a video editor focused on turning ideas into audiovisual pieces that truly communicate. My process is structured from briefing to final delivery — no noise in between.',
    'sobre.p2':    'I work with attention to the details that matter: cuts at the right moment, a soundtrack that reinforces the narrative, motion that adds without distracting. The result is content that feels intentional in every frame.',
    'sobre.p3':    'I prioritize clear communication, realistic deadlines and organized revisions. Because a good project isn\'t just about the edit — it\'s about the experience of working together.',

    /* Services */
    'servicos.label': 'Services',
    'servicos.title': 'What I offer.',

    'servico.longform.title': 'Long-form Editing',
    'servico.longform.desc':  'Complete editing of podcasts, vlogs, documentaries and extended videos. Narrative structure, pacing and consistent visual identity in every delivery.',

    'servico.shortform.title': 'Short-form Editing',
    'servico.shortform.desc':  'Reels, Shorts and TikToks with dynamic cuts, stylized subtitles and rhythm adjusted for maximum retention. Content made to stop the scroll.',

    'servico.motion.title': 'Motion Graphics',
    'servico.motion.desc':  'Animations, lower thirds, custom transitions and visual identity in motion. Motion that serves the content without overwhelming the message.',

    'servico.sound.title': 'Sound Design',
    'servico.sound.desc':  'Audio treatment, custom tracks, sound effects and mixing. The right sound at the right moment completely changes the perception of a video.',

    /* Portfolio */
    'portfolio.label':        'Portfolio',
    'portfolio.title':        'Recent work.',
    'portfolio.tab.longform': 'Long-form',
    'portfolio.tab.shorts':   'Shorts & Reels',
    'portfolio.watch':        'Watch',

    'portfolio.lf1.title':    'Visual Podcast — Episode 01',
    'portfolio.lf1.category': 'Long-form · Podcast',
    'portfolio.lf1.desc':     'Complete editing with integrated motion graphics, color treatment and sound design.',

    'portfolio.lf2.title':    'Documentary: Creative Process',
    'portfolio.lf2.category': 'Long-form · Documentary',
    'portfolio.lf2.desc':     'Visual narrative built with archival footage, interviews and an original score.',

    'portfolio.lf3.title':    'Lifestyle Vlog',
    'portfolio.lf3.category': 'Long-form · Vlog',
    'portfolio.lf3.desc':     'Dynamic editing with adjusted pacing to maintain engagement throughout the full content.',

    'portfolio.s1.title':    'Product Reel',
    'portfolio.s1.category': 'Short-form · Reel',
    'portfolio.s1.desc':     '30 seconds with rhythmic cuts, motion and an efficient call to action.',

    'portfolio.s2.title':    'Review TikTok',
    'portfolio.s2.category': 'Short-form · TikTok',
    'portfolio.s2.desc':     'Quick editing with stylized subtitles and rhythm adjusted for maximum retention.',

    'portfolio.s3.title':    'Motivational Short',
    'portfolio.s3.category': 'Short-form · YouTube Shorts',
    'portfolio.s3.desc':     'Storytelling condensed in under 60 seconds with real emotional impact.',

    /* Process */
    'processo.label': 'Process',
    'processo.title': 'How we work together.',

    'processo.step1.title': 'Briefing',
    'processo.step1.desc':  'I understand the project, the audience, the goal and what you expect from the edit. No assumptions here.',

    'processo.step2.title': 'Editing',
    'processo.step2.desc':  'I begin the visual construction based on what was aligned. Structure, pacing, motion and audio — all integrated.',

    'processo.step3.title': 'Revisions',
    'processo.step3.desc':  'I present the first cut and we open adjustment rounds. Clear communication, organized feedback.',

    'processo.step4.title': 'Delivery',
    'processo.step4.desc':  'Final file in the correct specifications for each platform. Delivered on the agreed deadline.',

    /* Contact */
    'contato.label':    'Contact',
    'contato.title':    'Let\'s work together.',
    'contato.subtitle': 'Choose how you prefer to connect.',

    'contato.discord.label':  'Discord',
    'contato.discord.handle': 'davik',
    'contato.email.label':    'Email',
    'contato.email.handle':   'davik@email.com',
    'contato.x.label':        'X / Twitter',
    'contato.x.handle':       '@davik',

    /* Footer */
    'footer.tagline': 'Made with attention to detail.',
    'footer.copy':    '© 2025 Davik. All rights reserved.',
  }
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang = localStorage.getItem('davik-lang') || 'pt';

/* ============================================================
   HELPERS
   ============================================================ */
function $(selector, root) {
  return (root || document).querySelector(selector);
}
function $$(selector, root) {
  return Array.from((root || document).querySelectorAll(selector));
}

/* ============================================================
   i18n — APPLY TRANSLATIONS
   ============================================================ */
function applyTranslations(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  /* Text nodes */
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  /* Update <html> lang attribute */
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  /* Update page title */
  document.title = lang === 'pt'
    ? 'Davik — Editor de Vídeo'
    : 'Davik — Video Editor';

  /* Update meta description */
  const meta = $('meta[name="description"]');
  if (meta) {
    meta.content = lang === 'pt'
      ? 'Davik — Editor de vídeo freelancer especializado em Long-form, Short-form, Motion Graphics e Sound Design.'
      : 'Davik — Freelance video editor specialized in Long-form, Short-form, Motion Graphics and Sound Design.';
  }
}

/* ============================================================
   i18n — LANGUAGE SWITCHER
   ============================================================ */
function initLangSwitcher() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      currentLang = lang;
      localStorage.setItem('davik-lang', lang);

      /* Update all lang buttons across navbar and mobile menu */
      $$('.lang-btn').forEach(b => {
        const isActive = b.dataset.lang === lang;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });

      applyTranslations(lang);
    });
  });

  /* Apply saved/default language on load */
  $$('.lang-btn').forEach(b => {
    const isActive = b.dataset.lang === currentLang;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', String(isActive));
  });

  applyTranslations(currentLang);
}

/* ============================================================
   SMOOTH SCROLL WITH NAVBAR OFFSET
   ============================================================ */
function scrollTo(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const navbar = $('#navbar');
  const offset = (navbar ? navbar.offsetHeight : 64) + 20;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
}

function initSmoothScroll() {
  /* All anchor links on the page */
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '#0') return;

      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      /* Close mobile menu if open */
      closeMobileMenu();

      scrollTo(id);
    });
  });
}

/* ============================================================
   NAVBAR SCROLL STATE
   ============================================================ */
function initNavbarScroll() {
  const navbar = $('#navbar');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function closeMobileMenu() {
  const toggle = $('#navToggle');
  const menu   = $('#mobileMenu');
  if (!toggle || !menu) return;

  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', currentLang === 'pt' ? 'Abrir menu' : 'Open menu');
  menu.classList.remove('open');
  menu.setAttribute('aria-hidden', 'true');
}

function initMobileMenu() {
  const toggle = $('#navToggle');
  const menu   = $('#mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('open');

    if (isOpen) {
      closeMobileMenu();
    } else {
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', currentLang === 'pt' ? 'Fechar menu' : 'Close menu');
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
    }
  });

  /* Close when clicking outside */
  document.addEventListener('click', e => {
    const navbar = $('#navbar');
    if (navbar && !navbar.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /* Close on resize to desktop */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMobileMenu();
  }, { passive: true });
}

/* ============================================================
   PORTFOLIO TABS
   ============================================================ */
function initTabs() {
  const tabBtns   = $$('.tab-btn');
  const tabPanels = $$('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      /* Buttons */
      tabBtns.forEach(b => {
        const isActive = b.dataset.tab === target;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });

      /* Panels */
      tabPanels.forEach(panel => {
        const isActive = panel.id === `panel-${target}`;
        panel.classList.toggle('active', isActive);
        /* Re-trigger reveal animations for newly visible panel */
        if (isActive) {
          $$('.reveal', panel).forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 30);
          });
        }
      });
    });
  });
}

/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initScrollReveal() {
  const elements = $$('.reveal');

  if (!('IntersectionObserver' in window)) {
    /* Fallback: show everything immediately */
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   SCROLLSPY — ACTIVE NAV LINK
   ============================================================ */
function initScrollSpy() {
  const sections  = $$('section[id]');
  const navLinks  = $$('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    }
  );

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initSmoothScroll();
  initNavbarScroll();
  initMobileMenu();
  initTabs();
  initScrollReveal();
  initScrollSpy();
});
