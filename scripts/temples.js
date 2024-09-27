// temples.js

// Function to update footer with current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString(undefined, options);
}

// Function to toggle navigation menu on mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle display
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    } else {
        nav.style.display = 'block';
        hamburger.innerHTML = '&times;'; // 'X' icon
    }
}

// Event Listener for DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();

    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', toggleMenu);
});
