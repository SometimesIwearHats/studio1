/*
 * Equipment Page Logic
 *
 * Render equipment cards from a dedicated data structure and support per-card image carousels.
 * The carousel logic keeps track of the current slide for each item and updates the visible image,
 * count indicator, and active dot. Touch events allow swiping on mobile devices.
 */

const equipmentCarouselState = {};

function groupEquipmentByCategory(items) {
    return items.reduce((grouped, item) => {
        if (!grouped[item.category]) {
            grouped[item.category] = [];
        }
        grouped[item.category].push(item);
        return grouped;
    }, {});
}

function createEquipmentCard(item, index) {
    const hasMultipleImages = item.images.length > 1;
    const slidesMarkup = item.images.map((image, imageIndex) => {
        return `
            <div class="carousel-slide" role="group" aria-label="${item.name} image ${imageIndex + 1} of ${item.images.length}">
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </div>
        `;
    }).join('');

    const controlsMarkup = hasMultipleImages ? `
        <div class="carousel-controls">
            <button type="button" class="carousel-button carousel-prev" aria-label="Show previous image for ${item.name}">‹</button>
            <button type="button" class="carousel-button carousel-next" aria-label="Show next image for ${item.name}">›</button>
        </div>
    ` : '';

    const indicatorsMarkup = hasMultipleImages ? `
        <div class="carousel-indicators" aria-label="Select an image for ${item.name}">
            ${item.images.map((_, dotIndex) => `
                <button type="button" class="carousel-dot" data-slide-index="${dotIndex}" aria-label="Show image ${dotIndex + 1} for ${item.name}"></button>
            `).join('')}
        </div>
    ` : '';

    const sourceLinkMarkup = item.sourceUrl ? `
        <a class="equipment-source-link" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">Learn more</a>
    ` : '';

    return `
        <article class="equipment-card" data-equipment-code="${item.code}">
            <div class="equipment-image">
                <div class="equipment-carousel" role="group" aria-label="${item.name} image carousel">
                    <div class="carousel-track">
                        ${slidesMarkup}
                    </div>
                    ${controlsMarkup}
                    ${indicatorsMarkup}
                    <div class="carousel-counter" aria-live="polite">1 / ${item.images.length}</div>
                </div>
            </div>
            <div class="equipment-info">
                <div class="equipment-meta">
                    <span class="equipment-category-label">${item.category}</span>
                    <span class="equipment-code">${item.code}</span>
                </div>
                <h4 class="equipment-name">${item.name}</h4>
                <div class="equipment-brand">${item.brand}</div>
                <p class="equipment-description">${item.description}</p>
                <div class="equipment-best-for"><strong>Best for:</strong> ${item.bestFor}</div>
                ${sourceLinkMarkup}
            </div>
        </article>
    `;
}

function renderEquipmentCatalogue() {
    const catalogueContainer = document.getElementById('equipment-catalogue');
    if (!catalogueContainer || !Array.isArray(window.EQUIPMENT_ITEMS)) {
        return;
    }

    const grouped = groupEquipmentByCategory(window.EQUIPMENT_ITEMS);
    const categorySections = Object.keys(grouped).map(category => {
        const cardsMarkup = grouped[category]
            .map((item, index) => createEquipmentCard(item, index))
            .join('');

        return `
            <section class="equipment-category">
                <h3>${category}</h3>
                <div class="cards-grid">${cardsMarkup}</div>
            </section>
        `;
    }).join('');

    catalogueContainer.innerHTML = categorySections;
    window.requestAnimationFrame(() => {
        setupAllEquipmentCarousels();
    });
}

function setupAllEquipmentCarousels() {
    const cards = document.querySelectorAll('.equipment-card');
    cards.forEach(card => {
        const itemCode = card.dataset.equipmentCode;
        const item = window.EQUIPMENT_ITEMS.find(entry => entry.code === itemCode);
        if (item) {
            setupEquipmentCarousel(card, item);
        }
    });
}

function setupEquipmentCarousel(cardElement, item) {
    const track = cardElement.querySelector('.carousel-track');
    const slides = Array.from(cardElement.querySelectorAll('.carousel-slide'));
    const counter = cardElement.querySelector('.carousel-counter');
    const prevButton = cardElement.querySelector('.carousel-prev');
    const nextButton = cardElement.querySelector('.carousel-next');
    const dotButtons = Array.from(cardElement.querySelectorAll('.carousel-dot'));
    const totalSlides = slides.length;
    const code = item.code;

    if (!track || totalSlides === 0) {
        return;
    }

    equipmentCarouselState[code] = 0;

    function updateCarousel(index) {
        equipmentCarouselState[code] = index;
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;

        if (counter) {
            counter.textContent = `${index + 1} / ${totalSlides}`;
        }

        dotButtons.forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
            dot.setAttribute('aria-pressed', dotIndex === index ? 'true' : 'false');
        });
    }

    function moveDelta(delta) {
        const nextIndex = (equipmentCarouselState[code] + delta + totalSlides) % totalSlides;
        updateCarousel(nextIndex);
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => moveDelta(-1));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => moveDelta(1));
    }

    dotButtons.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => updateCarousel(dotIndex));
        dot.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                updateCarousel(dotIndex);
            }
        });
    });

    let touchStartX = null;
    track.addEventListener('touchstart', event => {
        touchStartX = event.changedTouches[0]?.clientX || null;
    });

    track.addEventListener('touchend', event => {
        if (touchStartX === null) {
            return;
        }
        const touchEndX = event.changedTouches[0]?.clientX || 0;
        const deltaX = touchEndX - touchStartX;
        if (Math.abs(deltaX) > 40) {
            moveDelta(deltaX > 0 ? -1 : 1);
        }
        touchStartX = null;
    });

    updateCarousel(0);
}

function initializeEquipmentPage() {
    if (!document.getElementById('equipment-catalogue')) {
        return;
    }
    renderEquipmentCatalogue();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEquipmentPage);
} else {
    initializeEquipmentPage();
}
