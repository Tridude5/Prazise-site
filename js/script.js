// Prazise site JS — anchors, waitlist (live/demo/AJAX), carousel, notify-me

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

// ---- Waitlist form (works with FormSubmit, AJAX, or demo) ----
(() => {
  const form   = document.getElementById('waitlist-form');
  const result = document.getElementById('form-result');
  if (!form || !result) return;

  const btn = form.querySelector('button[type="submit"]');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Optional custom endpoint if you ever want to force AJAX elsewhere
  const WAITLIST_ENDPOINT = ""; // e.g., "https://formsubmit.co/ajax/you@example.com"

  const action = (form.getAttribute('action') || '').trim();
  const isFormSubmit = /formsubmit\.co/i.test(action);
  const isAjaxAction = /\/ajax\//i.test(action);
  const isDemo = !action || action === '#';

  function setStatus(text, cls) {
    result.textContent = text || '';
    result.className = `form-result ${cls || ''}`; // expects .ok / .warn
    result.setAttribute('aria-live', 'polite');
  }

  form.addEventListener('submit', async (e) => {
    const email = form.elements['email']?.value?.trim() || '';
    const reply = document.getElementById('_replyto');
    if (reply) reply.value = email; // so you can Reply in your inbox

    // Basic validation first
    if (!EMAIL_RE.test(email)) {
      e.preventDefault();
      setStatus('Please enter a valid email.', 'warn');
      return;
    }

    // Mode 1: REAL FormSubmit (standard POST) -> let the browser submit/redirect
    if (isFormSubmit && !isAjaxAction) {
      // Optionally show a brief busy state; don't block submission.
      setStatus('', '');
      return; // no preventDefault
    }

    // From here on, we handle it ourselves (AJAX or demo)
    e.preventDefault();

    // UI: busy
    form.dataset.sending = '1';
    form.setAttribute('aria-busy', 'true');
    setStatus('', '');
    if (btn) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = 'Submitting…'; }

    try {
      // Mode 2: AJAX endpoint (FormSubmit /ajax or custom)
      let endpoint = isAjaxAction ? action : WAITLIST_ENDPOINT;

      if (endpoint) {
        const res = await fetch(endpoint, {
          method: (form.getAttribute('method') || 'POST').toUpperCase(),
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (!res.ok) throw new Error('Network error');
        setStatus('Thanks! You’re on the list — we’ll be in touch.', 'ok');
        form.reset();
      } else {
        // Mode 3: Demo fallback (no endpoint)
        const key = 'prazise_waitlist';
        const list = JSON.parse(localStorage.getItem(key) || '[]');
        const device = document.getElementById('device_interest')?.value || null;
        list.push({ email, device, ts: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(list));
        setStatus('Thanks! You’re on the list — we’ll be in touch.', 'ok');
        form.reset();
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong. Please try again in a moment.', 'warn');
    } finally {
      form.removeAttribute('aria-busy');
      form.dataset.sending = '0';
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

// ---- "Notify me" — store device choice (no auto-scroll) ----
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
