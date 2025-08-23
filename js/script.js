// Prazise site JS — smooth scroll + robust waitlist handling
(() => {
  // ---- Smooth-scroll for in-page anchors (and fix old #learn alias) ----
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute('href');
    const id = href === '#learn' ? 'features' : href.slice(1); // alias #learn -> #features
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ---- Waitlist form ----
  const form   = document.getElementById('waitlist-form');
  const result = document.getElementById('form-result');
  if (!form || !result) return;

  const btn = form.querySelector('button[type="submit"]');
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Optional: if you want email notifications for waitlist too,
  // set this to a real endpoint (e.g., FormSubmit/Formspree):
  // Example (emails you): "https://formsubmit.co/ajax/johnslavinskas@my.uopeople.edu"
  const WAITLIST_ENDPOINT = "";

  function setStatus(text, cls) {
    result.textContent = text;
    result.className = `form-result ${cls}`; // expects .ok / .warn styles
    // Announce to assistive tech:
    result.setAttribute('aria-live', 'polite');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.dataset.sending === '1') return; // prevent double submits
    const email = form.elements['email']?.value.trim() || '';

    if (!EMAIL_RE.test(email)) {
      setStatus('Please enter a valid email.', 'warn');
      return;
    }

    // Prepare UI
    form.dataset.sending = '1';
    form.setAttribute('aria-busy', 'true');
    setStatus('', '');
    if (btn) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = 'Submitting…'; }

    try {
      // Prefer explicit form.action if you set one later
      let endpoint = form.getAttribute('action');
      if (!endpoint || endpoint === '#' || endpoint === window.location.href) {
        endpoint = WAITLIST_ENDPOINT;
      }

      if (endpoint) {
        const method = (form.getAttribute('method') || 'POST').toUpperCase();
        const res = await fetch(endpoint, {
          method,
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (!res.ok) throw new Error('Network error');
      } else {
        // No backend yet → keep a local backup so you don't lose signups
        const key = 'prazise_waitlist';
        const list = JSON.parse(localStorage.getItem(key) || '[]');
        // If you later add <input id="device_interest" ...>, we capture it:
        const device = document.getElementById('device_interest')?.value || null;
        list.push({ email, device, ts: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(list));
      }

      setStatus('Thanks! You’re on the list — we’ll be in touch.', 'ok');
      form.reset();
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
