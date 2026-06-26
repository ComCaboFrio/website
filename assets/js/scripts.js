

const swiper = new Swiper('.cards-container.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSLides: true,

  // CONFIGURAÇÃO DO MOVIMENTO (CORRIGIDA)
  autoplay: {
    delay: 3000,             // Tempo parado em cada card (ex: 3 segundos)
    disableOnInteraction: false, // O movimento NÃO morre se o usuário clicar nas setas
    
  },


  // CONFIGURAÇÃO DAS SETAS (Verifique se as classes batem exatamente com o HTML)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Breakpoints para manter a responsividade que configuramos

    breakpoints: {
  0: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      
  576: {
      slidesPerView: 1,
      spaceBetween: 20
      },
      
  768: {
      slidesPerView: 2,
      spaceBetween: 25
      },
  
  992: {
    slidesPerView: 3,
    spaceBetween: 25
      },
  
  1200: {
    slidesPerView: 4,
    spaceBetween: 30
  }
}
  });


  //OS
  AOS.init({
      duration: 1000,
      once: true
  });
       

  