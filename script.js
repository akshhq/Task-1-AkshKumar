// Dark Mode
const DARK_KEY = 'sd-dark-mode';

function applyDark(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  if (document.body) {
    document.body.classList.toggle('dark', isDark);
  }
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function initDarkMode() {
  const saved = localStorage.getItem(DARK_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved !== null ? saved === 'true' : prefersDark;
  applyDark(isDark);
}

function toggleDark() {
  const isDark = !document.documentElement.classList.contains('dark');
  localStorage.setItem(DARK_KEY, String(isDark));
  applyDark(isDark);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode, { once: true });
} else {
  initDarkMode();
}
