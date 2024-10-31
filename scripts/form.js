// Sample Product Array
const products = [
    { id: 1, name: 'Design' },
    { id: 2, name: 'Website Creation' },
    { id: 3, name: 'Online Video' }
];

// Populate Product Name Select Field
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Form submission handler to increase the review counter
window.onload = function() {
    const reviewsCount = localStorage.getItem('reviewsCount') || 0;
    localStorage.setItem('reviewsCount', parseInt(reviewsCount) + 1);
}


// Footer JavaScript for current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;