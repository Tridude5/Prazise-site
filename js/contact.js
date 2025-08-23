// js/contact.js — FormSubmit (AJAX) to Gmail primary + CC EDU

// Force AJAX endpoint to Gmail (Plan B)
const FORMS_ENDPOINT = "https://formsubmit.co/ajax/slavinskasjack@gmail.com";

const form   = document.getElementById('contact-form');
const result = document.getElementById('contact-result');
const topic  = document.getElementById('topic');

// Prefill topic from URL (?topic=Partnerships|Security|Privacy|Support|General)
(() => {
  const params = new URLSearchParams(location.search);
  const t = (params.get('topic') || '').toLowerCase();
  const map = { partnerships:'Partnerships', security:'Security', privacy:'Privacy', support:'Support', general:'General' };
  if (topic && map[t]) topic.value = map[t];
})();

// Small helpers
function setStatus(msg, kind) {
  if (!result) return;
  result.textContent = msg || '';
  // Uses .ok / .warn classes you have in styles.css
  result.className = `form-result ${kind || ''}`;
}

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  setStatus('', '');

  // Honeypot check (supports _honey or legacy "company")
  const hp = form.querySelector('input[name="_honey"], input[name="company"]');
  if (hp && hp.value.trim() !== '') return; // bot — silently drop

  // Gather + validate
  const fd = new FormData(form);
  const email = String(fd.get('email') || '').trim();
  const message = String(fd.get('message') || '').trim();
  const chosenTopic = String(fd.get('topic') || 'General').trim();

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_RE.test(email) || !message) {
    setStatus('Please provide a valid email and a short message.', 'warn');
    return;
  }

  // Ensure FormSubmit meta fields are set
  fd.set('_subject', `Prazise contact — ${chosenTopic}`);
  fd.set('_replyto', email);
  // CC your EDU inbox as backup (only add if not already present in HTML)
  if (!fd.has('_cc')) fd.append('_cc', 'johnslavinskas@my.uopeople.edu');
  // Template + captcha defaults (safe if duplicates)
  if (!fd.has('_template')) fd.append('_template', 'table');
  if (!fd.has('_captcha'))  fd.append('_captcha', 'false');

  // UI state
  const btn = form.querySelector('button[type="submit"]');
  const old = btn?.textContent;
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
  form.setAttribute('aria-busy', 'true');

  try {
    const res = await fetch(FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: fd
    });
    if (!res.ok) throw new Error('Network error');

    setStatus('Thanks! We’ll get back to you shortly.', 'ok');
    form.reset();
  } catch (err) {
    console.error(err);
    setStatus('Something went wrong. Please try again.', 'warn');
  } finally {
    form.removeAttribute('aria-busy');
    if (btn) { btn.disabled = false; btn.textContent = old || 'Send'; }
  }
});
