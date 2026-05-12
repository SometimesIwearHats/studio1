/**
 * Main JavaScript File
 * 
 * This file handles:
 * - Loading shared components (navbar, footer)
 * - Mobile navigation toggle
 * - Announcement bar rendering
 * - General page setup
 */

/**
 * Load a shared component from the components folder
 * @param {string} componentName - Name of the component file (e.g., 'navbar', 'footer')
 * @param {string} targetElementId - ID of the element where the component should be inserted
 */
async function loadComponent(componentName, targetElementId) {
    try {
        // Use relative paths so component loading works in local development and with Live Server
        const response = await fetch(`components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentName} component`);
        }
        const componentHTML = await response.text();
        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
            targetElement.innerHTML = componentHTML;
        }
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
    }
}

/**
 * Initialize mobile navigation toggle
 * Handles the hamburger menu on mobile devices
 */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', 
                navToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });
        
        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

/**
 * Hide broken image elements so placeholder layouts remain clean when image assets are missing.
 */
function hideBrokenImages() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('error', () => {
            image.style.display = 'none';
        });
    });
}

/**
 * Initialize the page
 * This function runs when the DOM is fully loaded
 */
async function initializePage() {
    // Load shared components
    await loadComponent('navbar', 'navbar-container');
    await loadComponent('footer', 'footer-container');
    
    // Initialize mobile navigation
    initMobileNav();

    // Hide any missing images so the layout stays clean with placeholder assets
    hideBrokenImages();
    
    // Render announcement bar
    if (typeof renderAnnouncementBar === 'function') {
        renderAnnouncementBar();
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

/**
 * Smooth scroll to element by ID
 * Useful for anchor links like "Visit Us" button
 */
function smoothScrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Make smoothScrollToElement available globally for onclick handlers
window.smoothScrollToElement = smoothScrollToElement;
