// deletion-request.js — AJAX to FormSubmit with inline success (no redirect)
(() => {
  const form = document.getElementById('delete-form');
  const out  = document.getElementById('delete-result');
  if (!form || !out) return;

  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    out.textContent = '';
    out.className = 'form-result';

    // Honeypot
    if ((form.querySelector('input[name="company"]')?.value || '').trim()) return;

    const fd    = new FormData(form);
    const email = (fd.get('email') || '').toString().trim();
    if (!EMAIL.test(email) || !fd.get('confirm')) {
      out.textContent = 'Please confirm and provide a valid email.';
      out.classList.add('warn');
      return;
    }

    // Require at least one box or some details
    const selected = fd.get('delete_waitlist') || fd.get('delete_messages') || fd.get('delete_other');
    const details  = (fd.get('details') || '').toString().trim();
    if (!selected && !details) {
      out.textContent = 'Tell us what to delete (select an option or add details).';
      out.classList.add('warn');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.dataset.old = btn.textContent; btn.textContent = 'Sending…'; }
    form.setAttribute('aria-busy', 'true');

    try {
      const res = await fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd });
      if (!res.ok) throw new Error('Network error');

      out.textContent = 'Thanks — your deletion request was sent. We’ll confirm shortly.';
      out.classList.add('ok');
      form.reset();
    } catch (err) {
      console.error(err);
      out.textContent = 'Something went wrong. Please try again or email us.';
      out.classList.add('warn');
    } finally {
      form.removeAttribute('aria-busy');
      if (btn) { btn.disabled = false; btn.textContent = btn.dataset.old || 'Send request'; }
    }
  });
})();
