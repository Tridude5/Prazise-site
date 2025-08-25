// Prazise site JS — anchors, mobile menu (auto-inject), waitlist (AJAX), carousel, notify-me, footer year

// ---- Smooth-scroll for in-page anchors (incl. old #learn alias) ----
(() => {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute('href');
    const id = href === '#learn' ? 'features' : href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// ---- Mobile menu: auto-inject + accessible toggle (works on all pages) ----
(() => {
  const header = document.querySelector('.site-header .header-grid');
  const nav    = document.querySelector('.site-header .nav');
  if (!header || !nav) return;

  // Ensure the nav has an id so the button can reference it
  if (!nav.id) nav.id = 'site-nav';

  // If no button exists, create it and insert before the nav
  let btn = document.getElementById('menu-toggle');
  if (!btn) {
    btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.id = 'menu-toggle';
    btn.setAttribute('aria-controls', nav.id);
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    btn.innerHTML = "<span class='bar'></span><span class='bar'></span><span class='bar'></span>";
    header.insertBefore(btn, nav);
  }

  function setOpen(isOpen){
    nav.classList.toggle('open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Close when a link inside the nav is clicked
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // If user resizes to desktop while menu is open, reset state
  const mq = window.matchMedia('(min-width: 961px)');
  mq.addEventListener?.('change', (ev) => { if (ev.matches) setOpen(false); });
})();

// ---- Waitlist form (FormSubmit AJAX, no redirect) ----
(() => {
  const form   = document.getElementById('waitlist-form');
  const result = document.getElementById('form-result');
  if (!form || !result) return;

  const btn = form.querySelector('button[type="submit"]');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const action = (form.getAttribute('action') || '').trim();
  const isAjax = /formsubmit\.co\/ajax\//i.test(action);

  function setStatus(text, cls) {
    result.textContent = text || '';
    result.className = `form-result ${cls || ''}`; // expects .ok / .warn
    result.setAttribute('aria-live', 'polite');
  }

  form.addEventListener('submit', async (e) => {
    const email = form.elements['email']?.value?.trim() || '';
    const reply = document.getElementById('_replyto');
    if (reply) reply.value = email; // lets you Reply directly in inbox

    if (!EMAIL_RE.test(email)) {
      e.preventDefault();
      setStatus('Please enter a valid email.', 'warn');
      return;
    }

    if (!isAjax) return; // fallback: allow normal POST if someone changes action

    // AJAX path to stay on-page
    e.preventDefault();
    setStatus('', '');
    form.setAttribute('aria-busy', 'true');
    if (btn) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = 'Submitting…'; }

    try {
      const res = await fetch(action, {
        method: (form.getAttribute('method') || 'POST').toUpperCase(),
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (!res.ok) throw new Error('Network error');

      setStatus('Thanks! You’re on the list — we’ll be in touch.', 'ok');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again in a moment.', 'warn');
    } finally {
      form.removeAttribute('aria-busy');
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.old || 'Request invite'; }
    }
  });
})();

// ---- Carousel controls (no auto-advancing) ----
(() => {
  const shell = document.querySelector('.integrations-carousel .carousel-shell');
  if (!shell) return;

  const viewport = shell.querySelector('.carousel-viewport');
  const prev = shell.querySelector('.carousel-btn.prev');
  const next = shell.querySelector('.carousel-btn.next');

  function step() {
    // Scroll ~80% of visible width
    return Math.max(160, Math.floor(viewport.clientWidth * 0.8));
  }

  function updateButtons() {
    const max = viewport.scrollWidth - viewport.clientWidth - 1;
    if (prev) prev.disabled = viewport.scrollLeft <= 0;
    if (next) next.disabled = viewport.scrollLeft >= max;
  }

  prev?.addEventListener('click', () => { viewport.scrollBy({ left: -step(), behavior: 'smooth' }); });
  next?.addEventListener('click', () => { viewport.scrollBy({ left:  step(), behavior: 'smooth' }); });
  viewport.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  updateButtons();
})();

// ---- "Notify me" — store device choice (fills hidden input + shows status) ----
(() => {
  const status = document.getElementById('device-pick');
  const field = document.getElementById('device_interest');
  document.querySelectorAll('.notify-device').forEach((btn) => {
    btn.addEventListener('click', () => {
      const device =
        btn.dataset.device ||
        btn.closest('.slide')?.querySelector('.name')?.textContent?.trim() ||
        '';
      if (field) field.value = device;
      if (status) status.textContent = device
        ? `${device} selected — it will be included when you join the waitlist.`
        : '';
    });
  });
})();

// ---- Footer year ----
(() => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
})();
