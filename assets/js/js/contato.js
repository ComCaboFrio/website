document.getElementById("contactForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;

    let texto = `
NOVO CONTATO DO SITE

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}
`;

    let url = `https://api.callmebot.com/whatsapp.php?phone=5522997994770&text=${encodeURIComponent(texto)}&apikey=1395824`;

    fetch(url)
    .then(response => {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contactForm").reset();
    });

});

