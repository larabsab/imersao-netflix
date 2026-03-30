import { createCard } from './Card.js';

/**
 * Cria um carrossel de filmes/séries para uma categoria específica.
 * Cada carrossel contém um título e uma linha de cards.
 */
export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada item da categoria, cria um card visual
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);
    return section;
}
