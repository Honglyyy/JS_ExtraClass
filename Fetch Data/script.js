// Global variables
let allProducts = [];
let filteredProducts = [];
let cartItems = [];
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const applyPriceBtn = document.getElementById('applyPriceFilter');
const retryButton = document.getElementById('retryButton');
const cartCount = document.getElementById('cartCount');

// Fetch products from API
async function fetchProducts() {
try {
    showLoading();
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    
    allProducts = await response.json();
    filteredProducts = [...allProducts];
    renderProducts();
    hideLoading();
} catch (error) {
    console.error('Error fetching products:', error);
    showError();
}
}

// Show loading state
function showLoading() {
loadingState.classList.remove('hidden');
productsGrid.classList.add('hidden');
errorState.classList.add('hidden');
noResults.classList.add('hidden');
}

// Hide loading state
function hideLoading() {
loadingState.classList.add('hidden');
productsGrid.classList.remove('hidden');
}

// Show error state
function showError() {
loadingState.classList.add('hidden');
productsGrid.classList.add('hidden');
errorState.classList.remove('hidden');
noResults.classList.add('hidden');
}

// Generate star rating HTML
function generateStars(rating) {
const fullStars = Math.floor(rating);
const hasHalfStar = rating % 1 >= 0.5;
let starsHTML = '';

for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
        starsHTML += '<i class="fas fa-star star-filled"></i>';
    } else if (i === fullStars && hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star-filled"></i>';
    } else {
        starsHTML += '<i class="far fa-star star-empty"></i>';
    }
}
return starsHTML;
}

// Truncate text
function truncateText(text, maxLength) {
return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Capitalize category
function capitalizeCategory(category) {
return category.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
).join(' ');
}

// Add to cart
function addToCart(productId) {
const product = allProducts.find(p => p.id === productId);
if (product) {
    cartItems.push(product);
    updateCartCount();
    showNotification(`${product.title} added to cart!`);
}
}

// Update cart count
function updateCartCount() {
cartCount.textContent = cartItems.length;
}
// Show notification
function showNotification(message) {
// Create notification element
const notification = document.createElement('div');
notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
notification.textContent = message;
document.body.appendChild(notification);

// Show notification
setTimeout(() => {
    notification.classList.remove('translate-x-full');
}, 100);

// Hide notification
setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 300);
}, 3000);
}

// Render products
function renderProducts() {
if (filteredProducts.length === 0) {
    productsGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
    return;
}

noResults.classList.add('hidden');
productsGrid.classList.remove('hidden');
productsGrid.innerHTML = '';
filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 card-hover';
    
    productCard.innerHTML = `
        <div class="relative overflow-hidden group">
            <img src="${product.image}" 
                    alt="${product.title}" 
                    class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy">
            <div class="absolute top-4 left-4">
                <span class="bg-brand-100 text-brand-800 text-xs font-medium px-2.5 py-1 rounded-full">
                    ${capitalizeCategory(product.category)}
                </span>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button class="bg-white rounded-full p-2 shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <button onclick="quickView(${product.id})" class="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                </button>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-brand-600 cursor-pointer">
                ${truncateText(product.title, 60)}
            </h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                ${truncateText(product.description, 100)}
            </p>
            <div class="flex items-center mb-4">
                <div class="flex items-center text-sm mr-2">
                    ${generateStars(product.rating.rate)}
                </div>
                <span class="text-gray-500 text-sm">(${product.rating.count} reviews)</span>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-2xl font-bold text-gray-900">
                    $${product.price}
                </div>
                <button onclick="addToCart(${product.id})" class="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:shadow-lg">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    `;
    
    productsGrid.appendChild(productCard);
});
}

// Quick view function (placeholder)
function quickView(productId) {
const product = allProducts.find(p => p.id === productId);
alert(`Quick view for: ${product.title}\nPrice: $${product.price}\nRating: ${product.rating.rate}/5`);
}

// Filter and sort functions
function applyFilters() {
let filtered = [...allProducts];// Search filter
const searchTerm = searchInput.value.toLowerCase();
if (searchTerm) {
    filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
}

// Category filter
const selectedCategory = categoryFilter.value;
if (selectedCategory) {
    filtered = filtered.filter(product => product.category === selectedCategory);
}

// Price range filter
const minPrice = parseFloat(minPriceInput.value) || 0;
const maxPrice = parseFloat(maxPriceInput.value) || Infinity;
filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);

// Sort
const sortBy = sortFilter.value;
switch (sortBy) {
    case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
    case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
    case 'rating-high':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    case 'rating-low':
        filtered.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
    case 'name-az':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    case 'name-za':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
}

filteredProducts = filtered;
renderProducts();
}

// Event listeners
categoryFilter.addEventListener('change', applyFilters);
sortFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', debounce(applyFilters, 300));
applyPriceBtn.addEventListener('click', applyFilters);
retryButton.addEventListener('click', fetchProducts);

// Debounce function for search
function debounce(func, wait) {
let timeout;
return function executedFunction(...args) {
    const later = () => {
        clearTimeout(timeout);
        func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
};
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
fetchProducts();
});