const toggleModal = () => {
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

const setupModal = () => {
  const closeModalButton = document.querySelector("#close-modal");
  const fade = document.querySelector("#fade");
  const continueComprandoButton = document.querySelector(".btn-continuar-comprando");

  [closeModalButton, fade, continueComprandoButton].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });
};

const initializeModalButtons = () => {
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

let closeTimeout;

const toggleSimpleFavoriteModal = () => {
  const modal = document.querySelector("#simple-modal-favorite");
  const fade = document.querySelector("#simple-fade-favorite");
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

const setupSimpleFavoriteModal = () => {
  const closeModalButton = document.querySelector("#close-simple-modal-favorite");
  const fade = document.querySelector("#simple-fade-favorite");

  [closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => {
      toggleSimpleFavoriteModal();
      clearTimeout(closeTimeout);
    });
  });
};

const showSimpleFavoriteModal = () => {
  toggleSimpleFavoriteModal();
  closeTimeout = setTimeout(() => {
    toggleSimpleFavoriteModal();
  }, 6000);
};
