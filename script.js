// Seleciona o botão usado para alternar entre tema claro e tema escuro
const themeToggle = document.getElementById('theme-toggle');
// Referência ao elemento <body> para alternar classes de estilo
const body = document.body;

// Recupera a preferência de tema salva no navegador, se existir
const savedTheme = localStorage.getItem('theme');
// Detecta se o sistema do usuário está configurado para tema escuro
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// Define o tema inicial: usa o valor salvo ou o preferido pelo sistema
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

/**
 * Aplica o tema visual na página.
 * @param {'light'|'dark'} theme
 */
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

/**
 * Salva a escolha de tema do usuário no localStorage.
 * @param {'light'|'dark'} theme
 */
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

// Caso o botão exista, inicializa o tema e configura o clique
if (themeToggle) {
  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    // Alterna entre light-mode e dark-mode a cada clique
    const newTheme = body.classList.contains('light-mode') ? 'dark' : 'light';
    applyTheme(newTheme);
    saveTheme(newTheme);
  });
}

// Seleciona todos os links que representam os perfis de usuário
const profileLinks = document.querySelectorAll('.profile a');
if (profileLinks.length) {
  profileLinks.forEach(link => {
    link.addEventListener('click', () => {
      const avatarImg = link.querySelector('.avatar-wrapper img');
      const profileName = link.querySelector('.profile-name');
      if (!avatarImg || !profileName) return;

      // Extrai apenas o nome do arquivo da imagem do avatar
      const src = avatarImg.getAttribute('src');
      const filename = src.substring(src.lastIndexOf('/') + 1);

      // Salva no navegador o perfil selecionado para usar na próxima página
      localStorage.setItem('perfilAtivoNome', profileName.textContent.trim());
      localStorage.setItem('perfilAtivoImagem', `../assets/${filename}`);
    });
  });
}
