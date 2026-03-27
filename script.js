const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.add('active');
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    body.classList.remove('light-mode');
    themeToggle.classList.remove('active');
    themeToggle.setAttribute('aria-pressed', 'false');
  }
}

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

if (themeToggle) {
  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(newTheme);
    saveTheme(newTheme);
  });
}
