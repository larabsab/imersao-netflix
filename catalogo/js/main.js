import { categories, profileCategoryItems } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    const categoriesToShow = getCategoriesForProfile(nomePerfil);
    
    if (container) {
        categoriesToShow.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});

function getCategoriesForProfile(profileName) {
    if (!profileName || !profileCategoryItems[profileName]) {
        return categories;
    }

    return categories.map(category => {
        const profileItems = profileCategoryItems[profileName][category.title];
        return {
            ...category,
            items: Array.isArray(profileItems) && profileItems.length > 0 ? profileItems : category.items,
        };
    });
}
