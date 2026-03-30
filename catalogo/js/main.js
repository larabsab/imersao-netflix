// Importa os dados de filmes e séries e a função que cria cada carrossel
import { categories, profileCategoryItems } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Aguarda toda a estrutura HTML ser carregada antes de manipular a página
document.addEventListener('DOMContentLoaded', () => {
    // Recupera o nome e a imagem do perfil escolhido na página anterior
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        // Se houver dados do perfil, usa-os para preencher a navbar
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Local onde os sliders/carrosséis serão inseridos
    const container = document.getElementById('main-content');
    const categoriesToShow = getCategoriesForProfile(nomePerfil);
    
    if (container) {
        categoriesToShow.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});

/**
 * Retorna as categorias de conteúdo que devem ser exibidas ao usuário.
 * Se o perfil tiver uma lista personalizada, usa essa lista. Caso contrário,
 * usa o conjunto padrão de categorias.
 */
function getCategoriesForProfile(profileName) {
    if (!profileName || !profileCategoryItems[profileName]) {
        return categories;
    }

    return categories.map(category => {
        const profileItems = profileCategoryItems[profileName][category.title];
        return {
            ...category,
            // Usa os itens personalizados do perfil quando houver,
            // ou mantém a lista padrão da categoria.
            items: Array.isArray(profileItems) && profileItems.length > 0 ? profileItems : category.items,
        };
    });
}
