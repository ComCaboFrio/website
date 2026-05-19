const swiper = new Swiper('.slider-wrapper', {
    slidesPerView: "auto",
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //Responsive Breakpoints//
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 4
        }
    }

});

//client section owl carousel
$(".owl-carousel").owlCarousel({
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
            items: 2
        }
    }
});

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const mensagem = document.getElementById("mensagem").value;

const texto = `
Novo cadastro no site

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}
`;

const url = `https://api.callmebot.com/whatsapp.php?phone=5522997994770&text=${encodeURIComponent(texto)}&apikey=1395824`;

fetch(url)
.then(response => {
    alert("Mensagem enviada com sucesso!");
})
.catch(error => {
    alert("Erro ao enviar.");
});