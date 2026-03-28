export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";

    // Trata links que usam o parâmetro 'v=' (ex: youtube.com/watch?v=ID)
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }

    // Trata links curtos ou de embed, removendo parâmetros extras como '?si=' ou '?t='
    // Ex: youtu.be/ID?si=... ou youtube.com/embed/ID
    const lastPart = url.split('/').pop();
    return lastPart.split('?')[0];
}

export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}