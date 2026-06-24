
//client section owl carousel
/* $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});
 */
/* 
const swiper = new Swiper('.cards-container', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
}); */

/*const swiper = new Swiper('.cards-container.swiper', {
  // CONFIGURAÇÃO DE MOVIMENTO (Escolha uma ou use ambas):
  
  // Opção A: Movimento contínuo e automático (Estilo esteira de aeroporto)
  autoplay: {
    delay: 0, // Sem pausa entre os cards
    disableOnInteraction: false, // Não para se o usuário tocar nele
  },
  speed: 4000, // Velocidade do movimento (4 segundos para rodar o bloco)
  loop: true, // Essencial para o movimento não ter fim

  // Opção B: Se você preferir o movimento livre ao arrastar com o mouse/dedo
  /*
  freeMode: {
    enabled: true,
    momentum: true, // Mantém o empurrão suave
  }, 
  */
/* 
  // Configuração padrão de partida (Mobile)
  slidesPerView: 1.2, // Mostra 1 card inteiro e uma bordinha do próximo
  spaceBetween: 15,

  // RESPONSIVIDADE DO MOVIMENTO
  breakpoints: {
    // Telas pequenas / Tablets
    576: {
      slidesPerView: 2.2, 
      spaceBetween: 20,
    },
    // Tablets maiores
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // Monitores Desktop
    1200: {
      slidesPerView: 4, // Mostra 4 cards perfeitos na tela
      spaceBetween: 30,
    }
  },

  // Vinculação dos botões que arrumamos antes
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
 */

const swiper = new Swiper('.cards-container.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,

  // CONFIGURAÇÃO DO MOVIMENTO (CORRIGIDA)
  autoplay: {
    delay: 3000,             // Tempo parado em cada card (ex: 3 segundos)
    disableOnInteraction: false, // O movimento NÃO morre se o usuário clicar nas setas
    pauseOnMouseEnter: true,    // Opcional: pausa o movimento se o mouse estiver em cima do card
  },
  
  // Se você usa o movimento fluido e contínuo (estilo esteira de aeroporto),
  // as setas precisam de uma velocidade rápida para vencer o fluxo:
  speed: 600, // Tempo da transição ao clicar na seta (em milissegundos)

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
    576: { slidesPerView: 1, spaceBetween: 40 },
    768: { slidesPerView: 3, spaceBetween: 25 },
    1200: { slidesPerView: 4, spaceBetween: 30 }
  }
});
