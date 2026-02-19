// ===== Shared Components, Theme, and Page Scripts =====
(function () {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  const routes = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'skills.html', label: 'Skills' },
    { href: 'projects.html', label: 'Projects' },
    { href: 'contact.html', label: 'Contact' },
  ];

  // Render Header/Nav
  function renderHeader() {
    if (!headerEl) return;
    const pathname = location.pathname.split('/').pop() || 'index.html';
    const navLinks = routes
      .map((r) => `<a href="${r.href}" class="${pathname === r.href ? 'active' : ''}">${r.label}</a>`) 
      .join('');

    headerEl.innerHTML = `
      <div class="navbar">
        <div class="container navbar__inner">
          <a class="brand" href="index.html" aria-label="Atul Rawat">
            <img class="logo" src="assets/img/favicon.svg" alt="AR logo" />
            <span>Atul&nbsp;Rawat</span>
          </a>
          <nav class="nav" id="nav">${navLinks}</nav>
          <div class="actions">
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme" title="Toggle theme">
              <iconify-icon icon="mdi:theme-light-dark"></iconify-icon>
              <span class="emoji">🌓</span>
            </button>
            <button class="menu-toggle" id="menu-toggle" aria-label="Open menu" title="Menu">
              <iconify-icon icon="mdi:menu"></iconify-icon>
              <span class="emoji">☰</span>
            </button>
          </div>
        </div>
      </div>`;

    // mobile menu
    const menuBtn = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
      nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
    }

    // theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  }

  // Render Footer
  function renderFooter() {
    if (!footerEl) return;
    const year = new Date().getFullYear();
    footerEl.innerHTML = `
      <div class="footer">
        <div class="container footer__inner">
          <span>© ${year} Atul Rawat</span>
          <div class="links">
            <a href="mailto:atulrajput5968@gmail.com"><iconify-icon icon="logos:google-gmail"></iconify-icon><span class="emoji">📧</span> Email</a>
            <a href="https://www.linkedin.com/in/atul-rawat-5596422ba/" target="_blank" rel="noopener"><iconify-icon icon="logos:linkedin-icon"></iconify-icon><span class="emoji">🔗</span> LinkedIn</a>
            <a href="projects.html"><iconify-icon icon="fluent-emoji:folder"></iconify-icon><span class="emoji">📁</span> Projects</a>
          </div>
        </div>
      </div>`;
  }

  // Theme handling
  const userTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = userTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  // Data (editable)
  const data = {
    badges: [
      { text: 'JavaScript', color: '#f59e0b' },
      { text: 'React', color: '#61dafb' },
      { text: 'CSS', color: '#3b82f6' },
      { text: 'SQL', color: '#22c55e' },
      { text: 'Git', color: '#ef4444' },
    ],
    skills: [
      { title: 'Frontend', desc: 'HTML, CSS, JavaScript, React, Tailwind, Responsive UI' },
      { title: 'Backend', desc: 'Node.js basics, REST APIs, Express' },
      { title: 'Databases', desc: 'MySQL, MongoDB basics, PostgreSQL' },
      { title: 'CS Fundamentals', desc: 'DSA, OOP, OS, DBMS, Computer Networks' },
      { title: 'Tools', desc: 'Git, VS Code, Linux basics' },
    ],
    projects: [
      {
        title: 'Student Hub & Resource Sharing',
        year: '2025',
        stack: ['Vite', 'React', 'LLM APIs'],
        desc: 'A resource‑sharing web app with search and AI‑powered summarizer.',
        link: 'https://github.com/AtulRwt/Student-Notes-Hub',
        featured: true,
      },
      {
        title: 'Banking System (CLI)',
        year: '2025',
        stack: ['C', 'DSA'],
        desc: 'Command‑line banking app with account management & interest calculations.',
        link: 'https://github.com/AtulRwt/BankingSystemPBL_Project',
        featured: true,
      },
      {
        title: 'Image-Grounded Breast Cancer Detection System',
        year: '2025',
        stack: ['Deep Learning', 'ResNet50', 'FAISS', 'Gradio'],
        desc: 'End-to-end ultrasound image classifier for benign, malignant, and normal classes with similarity-based confidence support.',
        link: 'https://github.com/AtulRwt',
        featured: true,
      },
      {
        title: 'Portfolio Website',
        year: '2025',
        stack: ['HTML', 'CSS', 'JavaScript'],
        desc: 'This interactive portfolio with theme toggle and smooth animations.',
        link: 'index.html',
        featured: false,
      },
    ],
  };

  // Icon mapping with emoji fallbacks
  const iconMap = {
    'JavaScript': { icon: 'logos:javascript', emoji: '🟨' },
    'React': { icon: 'logos:react', emoji: '⚛️' },
    'CSS': { icon: 'logos:css-3', emoji: '🎨' },
    'HTML': { icon: 'logos:html-5', emoji: '📄' },
    'SQL': { icon: 'logos:mysql', emoji: '🗄️' },
    'Git': { icon: 'mdi:git', emoji: '🔧' },
    'Vite': { icon: 'logos:vitejs', emoji: '⚡' },
    'LLM APIs': { icon: 'mdi:robot-happy-outline', emoji: '🤖' },
    'C': { icon: 'mdi:language-c', emoji: '🅲' },
    'DSA': { icon: 'mdi:chart-timeline-variant', emoji: '📈' },
    'Node.js': { icon: 'logos:nodejs-icon', emoji: '🟩' },
    'Deep Learning': { icon: 'mdi:brain', emoji: '🧠' },
    'ResNet50': { icon: 'mdi:layers-triple', emoji: '🧬' },
    'FAISS': { icon: 'mdi:magnify-scan', emoji: '🔎' },
    'Gradio': { icon: 'mdi:monitor-dashboard', emoji: '🖥️' }
  };

  function iconifySpan(key) {
    const m = iconMap[key] || null;
    if (!m) return '';
    return `<iconify-icon icon="${m.icon}"></iconify-icon><span class="emoji">${m.emoji}</span>`;
  }

  function renderBadges() {
    const el = document.getElementById('quick-badges');
    if (!el) return;
    el.innerHTML = data.badges
      .map((b) => `<span class="chip" style="--chip:${b.color}">${iconifySpan(b.text)} ${b.text}</span>`) 
      .join('');
  }

  function projectCard(p) {
    const tags = p.stack.map((t) => `<span class="tag">${iconifySpan(t)} ${t}</span>`).join('');
    return `
      <article class="card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${tags}</div>
        <div style="margin-top:.7rem; display:flex; gap:.5rem; align-items:center;">
          <a class="btn btn-soft" href="${p.link}" target="_blank" rel="noopener">Open</a>
          <span class="chip">${p.year}</span>
        </div>
      </article>`;
  }

  function renderFeatured() {
    const primary = document.getElementById('featured-primary');
    const secondary = document.getElementById('featured-secondary');
    if (!primary && !secondary) return;
    const featured = data.projects.filter(p => p.featured);
    if (primary) {
      const first = featured[0];
      primary.innerHTML = first ? `
        <article class="card card-featured">
          <h3>${first.title}</h3>
          <p>${first.desc}</p>
          <div class="tags">${first.stack.map((t) => `<span class=\"tag\">${iconifySpan(t)} ${t}</span>`).join('')}</div>
          <div style="margin-top:.8rem; display:flex; gap:.6rem; align-items:center;">
            <a class="btn btn-primary" href="${first.link}" target="_blank" rel="noopener">Open</a>
            <span class="chip">${first.year}</span>
          </div>
        </article>` : '';
    }
    if (secondary) {
      secondary.innerHTML = featured.slice(1).map(projectCard).join('');
    }
  }

  function renderAllProjects() {
    const el = document.getElementById('all-projects');
    if (!el) return;
    el.innerHTML = data.projects.map(projectCard).join('');
  }

  function renderSkills() {
    const grid = document.getElementById('skills-grid');
    const tags = document.getElementById('skill-tags');
    if (grid) {
      grid.innerHTML = data.skills
        .map((s) => `<article class="card"><h3>${s.title}</h3><p>${s.desc}</p></article>`)
        .join('');
    }
    if (tags) {
      tags.innerHTML = data.badges.map((b) => `<li class="tag">${iconifySpan(b.text)} ${b.text}</li>`).join('');
    }
  }

  // Contact form email sending
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const formNote = document.getElementById('form-note');
    const fallbackLink = document.getElementById('form-fallback-link');
    const charCount = document.getElementById('char-count');
    if (!form) return;
    const messageInput = form.querySelector('textarea[name="message"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const defaultBtnText = submitBtn ? submitBtn.textContent : 'Send';
    const defaultNote = 'Send a direct message to my inbox.';

    const updateCharCount = () => {
      if (!charCount || !messageInput) return;
      const current = messageInput.value.trim().length;
      charCount.textContent = `${current} / 1200 characters`;
    };

    if (messageInput) {
      messageInput.addEventListener('input', updateCharCount);
      updateCharCount();
    }

    const setFormStatus = (message, tone = 'muted') => {
      if (!formNote) return;
      formNote.textContent = message;
      formNote.dataset.tone = tone;
    };

    const hideFallbackLink = () => {
      if (!fallbackLink) return;
      fallbackLink.classList.add('hidden');
      fallbackLink.removeAttribute('href');
    };

    hideFallbackLink();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name')?.toString().trim();
      const email = fd.get('email')?.toString().trim();
      const message = fd.get('message')?.toString().trim();
      if (!name || !email || !message) {
        hideFallbackLink();
        setFormStatus('Please complete all fields.', 'error');
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        hideFallbackLink();
        setFormStatus('Please enter a valid email address.', 'error');
        return;
      }
      if (message.length < 10) {
        hideFallbackLink();
        setFormStatus('Please add a little more detail (minimum 10 characters).', 'error');
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      hideFallbackLink();
      setFormStatus('Sending your message…', 'muted');

      try {
        const response = await fetch('https://formsubmit.co/ajax/atulrajput5968@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio contact from ${name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        if (!response.ok) throw new Error('Email service request failed.');

        setFormStatus('Message sent successfully. Thank you!', 'success');
        form.reset();
        updateCharCount();
        hideFallbackLink();
        setTimeout(() => setFormStatus(defaultNote, 'muted'), 3500);
      } catch (err) {
        const fallback = `mailto:atulrajput5968@gmail.com?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        if (fallbackLink) {
          fallbackLink.href = fallback;
          fallbackLink.classList.remove('hidden');
        }
        setFormStatus('Could not reach the email service. You can still send using your mail app.', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultBtnText;
        }
      }
    });
  }

  // Initialize all
  renderHeader();
  renderFooter();
  renderBadges();
  renderFeatured();
  renderAllProjects();
  renderSkills();
  setupContactForm();

  // Iconify availability check: if CDN didn't load, show emoji fallbacks
  function applyIconifyStatus() {
    const loaded = !!(window.customElements && window.customElements.get && window.customElements.get('iconify-icon'));
    document.documentElement.classList.toggle('no-iconify', !loaded);
  }
  // check now and after load (in case the CDN registers later)
  applyIconifyStatus();
  window.addEventListener('load', () => {
    setTimeout(applyIconifyStatus, 100);
  });
})();
