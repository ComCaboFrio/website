document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const formMessage = document.getElementById("formMessage");
    const btn = form.querySelector("button");

    // VALIDAÇÃO
    if (!nome || !email || !telefone || !mensagem) {

      formMessage.innerHTML =
        `<div class="alert alert-danger">
          Por favor, preencha todos os campos!
        </div>`;

      return;
    }

    // BLOQUEIA BOTÃO
    btn.disabled = true;
    btn.innerText = "Enviando...";

    // TEXTO WHATSAPP
    const texto =
`📩 Novo contato:
👤 Nome: ${nome}
📧 Email: ${email}
📞 Telefone: ${telefone}
💬 Mensagem: ${mensagem}`;

    // URL CALLMEBOT
    const url =
`https://api.callmebot.com/whatsapp.php?phone=5522997994770&text=${encodeURIComponent(texto)}&apikey=1395824`;

    // ABRE WHATSAPP
   /* window.open(url, "_blank"); */

    // FEEDBACK
    formMessage.innerHTML =
      `<div class="alert alert-success">
        Mensagem enviada com sucesso!
      </div>`;

    // LIMPA FORMULÁRIO
    form.reset();

    // REATIVA BOTÃO
    btn.disabled = false;
    btn.innerText = "Enviar";

    // REMOVE MENSAGEM
    setTimeout(() => {

      formMessage.innerHTML = "";

    }, 5000);

  });

});