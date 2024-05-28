import { productsPromo, productsLanc, productsBest } from './data.js';

const swipperPromo = document.getElementById('swiper-wrapper');
const swipperLanc = document.getElementById('swiper-wrapper-2');
const swipperBest = document.getElementById('swiper-wrapper-3');
const cartCount = document.getElementById('cart-count');
const favoriteCount = document.getElementById('favorite-count');

function renderCards(src, name, category, priceMax, priceMin) {
    return `<div class="swiper-slide">
                <img data-src=${src} alt="Perfume" />
                <div class="product-details">
                    <h4><a href="#">${name}</a></h4>
                    <span class="product-catagory">${category}</span>
                    <div class="product-bottom-details">
                        <div class="product-price"><small>R$ ${priceMax.toFixed(2)}</small>R$ ${priceMin.toFixed(2)}</div>
                        <div class="product-links">
                            <a href="#"><i class="fa fa-heart"></i></a>
                            <button class="favorite-btn">
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="favorite-icon" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#5E17EB" stroke-width="2" fill="none"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="btn-container">
                        <button class="product-btn">COMPRAR</button>
                    </div>
                </div>
            </div>`;
}

swipperPromo.innerHTML = productsPromo.map((product) =>
    renderCards(product.src, product.name, product.category, product.priceMax, product.priceMin)
).join('');

swipperLanc.innerHTML = productsLanc.map((product) =>
    renderCards(product.src, product.name, product.category, product.priceMax, product.priceMin)
).join('');

swipperBest.innerHTML = productsBest.map((product) =>
    renderCards(product.src, product.name, product.category, product.priceMax, product.priceMin)
).join('');

document.addEventListener('DOMContentLoaded', () => {
    initializeModalButtons();
    setupModal();
    setupCartButtons();
    setupFavoriteButtons();
    setupSimpleFavoriteModal();
});

function setupCartButtons() {
    const buyButtons = document.querySelectorAll('.product-btn');
    buyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            incrementCartCount();
        });
    });
}

function setupFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const iconPath = button.querySelector('svg path');
            const isFavorited = iconPath.classList.toggle('favorited');
            incrementFavoriteCount(isFavorited);
            showSimpleFavoriteModal(isFavorited);
        });
    });
}

function incrementCartCount() {
    let currentCount = parseInt(cartCount.textContent, 10);
    cartCount.textContent = currentCount + 1;
}

function incrementFavoriteCount(isFavorited) {
    let currentCount = parseInt(favoriteCount.textContent, 10);
    if (isFavorited) {
        favoriteCount.textContent = currentCount + 1;
    } else {
        favoriteCount.textContent = currentCount - 1;
    }
}

