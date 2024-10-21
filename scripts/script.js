// Product Array
const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
];

// Populate product select options
const productSelect = document.getElementById('product-name');
products.forEach(product => {
    let option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Counter for reviews in localStorage
window.onload = function() {
    if (localStorage.getItem('reviewCount') === null) {
        localStorage.setItem('reviewCount', '0');
    }
};

// On the review.html page, increment counter
if (window.location.pathname.includes('review.html')) {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.body.innerHTML += `<p>Total reviews submitted: ${reviewCount}</p>`;
}
