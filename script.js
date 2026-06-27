// Dark Mode
const DARK_KEY = 'sd-dark-mode';

function applyDark(isDark) {
  document.body.classList.toggle('dark', isDark);
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = isDark ? 'LIGHT MODE' : 'DARK MODE';
}

function initDarkMode() {
  const saved = localStorage.getItem(DARK_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved !== null ? saved === 'true' : prefersDark;
  applyDark(isDark);
}

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem(DARK_KEY, isDark);
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = isDark ? 'LIGHT MODE' : 'DARK MODE';
}

// Mobile Nav Toggle
function initNavToggle() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      links.classList.remove('open');
    }
  });

  document.addEventListener('click', event => {
    if (!links.classList.contains('open')) return;
    if (toggle.contains(event.target) || links.contains(event.target)) return;
    links.classList.remove('open');
  });
}

// Active Nav Link
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link a, .nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === page);
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initNavToggle();
  setActiveNav();
});
