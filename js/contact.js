// js/contact.js
// Sends form to your inbox via FormSubmit (no account needed).
const FORMS_ENDPOINT = "https://formsubmit.co/ajax/johnslavinskas@my.uopeople.edu";

const form = document.getElementById('contact-form');
const result = document.getElementById('contact-result');
const topicSelect = document.getElementById('topic');
const subjectField = document.getElementById('fs_subject');

// Prefill topic from URL (?topic=partnerships|security|privacy|support|general)
const params = new URLSearchParams(location.search);
const t = (params.get('topic') || '').toLowerCase();
if (['partnerships','security','privacy','support','general'].includes(t)) {
  topicSelect.value = t;
}

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  result.textContent = '';
  result.classList.remove('success', 'error');

  // Honeypot
  const hp = form.querySelector('input[name="company"]');
  if (hp && hp.value.trim() !== '') return;

  const fd = new FormData(form);
  const email = (fd.get('email') || '').toString().trim();
  const msg = (fd.get('message') || '').toString().trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !msg) {
    result.textContent = 'Please provide a valid email and a short message.';
    result.classList.add('error');
    return;
  }

  // Nice email subject in your inbox
  if (subjectField) subjectField.value = `Prazise Contact — ${fd.get('topic') || 'general'}`;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true; const old = btn.textContent; btn.textContent = 'Sending…';

  try {
    const res = await fetch(FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: fd
    });
    if (!res.ok) throw new Error('Network error');

    result.textContent = 'Thanks! We’ll get back to you shortly.';
    result.classList.add('success');
    form.reset();
  } catch (err) {
    console.error(err);
    result.textContent = 'Something went wrong. Please try again.';
    result.classList.add('error');
  } finally {
    btn.disabled = false; btn.textContent = old;
  }
});
