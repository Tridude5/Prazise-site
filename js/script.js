// Prazise site JS — anchors, waitlist (AJAX), carousel, notify-me, footer year

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
    prev.disabled = viewport.scrollLeft <= 0;
    next.disabled = viewport.scrollLeft >= max;
  }

  prev.addEventListener('click', () => { viewport.scrollBy({ left: -step(), behavior: 'smooth' }); });
  next.addEventListener('click', () => { viewport.scrollBy({ left:  step(), behavior: 'smooth' }); });
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
