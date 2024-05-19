const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 19,
  slidesPerView: 1.5,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
  },
});

const swiperDestaque = new Swiper(".swiper__destaque", {
  speed: 400,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
