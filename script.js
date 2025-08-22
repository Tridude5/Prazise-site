// Minimal client-side handling for the waitlist form (no backend yet)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlist-form');
  const result = document.getElementById('form-result');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.elements['email']?.value.trim();
    if (!email) {
      result.textContent = 'Please enter a valid email.';
      result.className = 'form-result warn';
      return;
    }
    // Placeholder success. Replace by setting <form action="..."> to a real endpoint.
    result.textContent = 'Thanks! You’re on the list — we’ll be in touch.';
    result.className = 'form-result ok';
    form.reset();
  });
});
