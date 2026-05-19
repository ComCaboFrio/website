document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !telefone || !mensagem) {
            formMessage.innerHTML = '<div class="alert alert-danger">Preencha todos os campos!</div>';
            return;
        }

        let texto = `
📩 NOVO CONTATO DO SITE

👤 Nome: ${nome}
📧 E-mail: ${email}
📞 Telefone: ${telefone}

💬 Mensagem:
${mensagem}
`;

        let url = `https://api.callmebot.com/whatsapp.php?phone=5522997994770&text=${encodeURIComponent(texto)}&apikey=1395824`;

        fetch(url)
            .then(() => {
                formMessage.innerHTML = '<div class="alert alert-success">Mensagem enviada para seu WhatsApp!</div>';
                form.reset();

                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
            })
            .catch(() => {
                formMessage.innerHTML = '<div class="alert alert-danger">Erro ao enviar mensagem.</div>';
            });

    });

});