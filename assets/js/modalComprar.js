// const openModalButtons = document.querySelectorAll(".product-btn");
// const closeModalButton = document.querySelector("#close-modal");
// const modal = document.querySelector("#modal");
// const fade = document.querySelector("#fade");
// const continueComprandoButton = document.querySelector(".btn-continuar-comprando");

// toggleModal = () => {
//   modal.classList.toggle("hide");
//   fade.classList.toggle("hide");
// };

// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     toggleModal();
//     const productContainer = button.closest(".swiper-slide");
//     const productName = productContainer.querySelector("h4 a").textContent;
//     const smallElement = productContainer.querySelector(".product-price small");
//     const productPrice = smallElement.nextSibling.textContent.trim();
//     const productImageSrc = productContainer.querySelector("img").getAttribute("data-src");

//     document.querySelector("#product-name").textContent = `${productName}`;
//     document.querySelector("#product-price").innerHTML = `<strong>Preço: ${productPrice}</strong>`;
//     document.querySelector("#product-image").src = productContainer.querySelector("img").getAttribute("data-src");
//   });
// });

// [closeModalButton, fade].forEach((el) => {
//   el.addEventListener("click", () => toggleModal());
// });

// continueComprandoButton.addEventListener("click", () => {
//   window.location.href = "index.html";
// });

// modal.js

export const toggleModal = () => {
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

export const setupModal = () => {
  const closeModalButton = document.querySelector("#close-modal");
  const fade = document.querySelector("#fade");
  const continueComprandoButton = document.querySelector(".btn-continuar-comprando");

  [closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });

  continueComprandoButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
};

export const initializeModalButtons = () => {
  const openModalButtons = document.querySelectorAll(".product-btn");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      toggleModal();
      const productContainer = button.closest(".swiper-slide");
      const productName = productContainer.querySelector("h4 a").textContent;
      const smallElement = productContainer.querySelector(".product-price small");
      const productPrice = smallElement.nextSibling.textContent.trim();
      const productImageSrc = productContainer.querySelector("img").getAttribute("data-src");

      document.querySelector("#product-name").textContent = productName;
      document.querySelector("#product-price").innerHTML = `<strong>Preço: ${productPrice}</strong>`;
      document.querySelector("#product-image").src = productImageSrc;
    });
  });
};
