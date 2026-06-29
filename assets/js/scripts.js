const swiper = new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  
  spaceBetween: 15,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination', 
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});