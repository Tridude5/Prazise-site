// accessibility.js — page-local preview toggles for high contrast & reduced motion
(() => {
  const root = document.body; // scoped to this page
  const btnContrast = document.getElementById('toggle-contrast');
  const btnMotion   = document.getElementById('toggle-motion');

  // Restore previous choice (local to this page)
  const prefHC = localStorage.getItem('prazise_a11y_hc') === '1';
  const prefRM = localStorage.getItem('prazise_a11y_rm') === '1';
  if (prefHC) { root.classList.add('a11y-hc'); btnContrast.setAttribute('aria-pressed', 'true'); }
  if (prefRM) { root.classList.add('a11y-rm'); btnMotion.setAttribute('aria-pressed', 'true'); }

  function toggle(cls, btn, key) {
    const active = root.classList.toggle(cls);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    localStorage.setItem(key, active ? '1' : '0');
  }

  btnContrast?.addEventListener('click', () => toggle('a11y-hc', btnContrast, 'prazise_a11y_hc'));
  btnMotion?.addEventListener('click',   () => toggle('a11y-rm', btnMotion,   'prazise_a11y_rm'));
})();
