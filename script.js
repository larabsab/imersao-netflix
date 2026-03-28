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

const profileLinks = document.querySelectorAll('.profile a');
if (profileLinks.length) {
  profileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const avatarImg = link.querySelector('.avatar-wrapper img');
      const profileName = link.querySelector('.profile-name');
      if (!avatarImg || !profileName) return;

      const src = avatarImg.getAttribute('src');
      const filename = src.substring(src.lastIndexOf('/') + 1);
      localStorage.setItem('perfilAtivoNome', profileName.textContent.trim());
      localStorage.setItem('perfilAtivoImagem', `../assets/${filename}`);
    });
  });
}
