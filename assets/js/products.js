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
                            <button class="favorite-btn"><img src="./assets/img/Favoritos.svg" alt="Adicionar aos Favoritos"></button>
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
            incrementFavoriteCount();
            showSimpleFavoriteModal();
        });
    });
}

function incrementCartCount() {
    let currentCount = parseInt(cartCount.textContent, 10);
    cartCount.textContent = currentCount + 1;
}

function incrementFavoriteCount() {
    let currentCount = parseInt(favoriteCount.textContent, 10);
    favoriteCount.textContent = currentCount + 1;
}
