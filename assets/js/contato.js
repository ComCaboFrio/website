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

    // VALIDAÇÃO BÁSICA
    if (!nome || !email || !telefone || !mensagem) {
      formMessage.innerHTML =
        `<div class="alert alert-danger">Por favor, preencha todos os campos!</div>`;
      return;
    }

    // BLOQUEIA BOTÃO
    btn.disabled = true;
    btn.innerText = "Enviando...";

    // MENSAGEM WHATSAPP
    const texto =
`📩 Novo contato:
👤 Nome: ${nome}
📧 Email: ${email}
📞 Telefone: ${telefone}
💬 Mensagem: ${mensagem}`;

    // CALLMEBOT
    const url = `https://api.callmebot.com/whatsapp.php?phone=5522997994770&text=${encodeURIComponent(texto)}&apikey=1395824`;

    window.open(url, "_blank");

    // FEEDBACK NA TELA
    formMessage.innerHTML =
      `<div class="alert alert-success">Mensagem enviada com sucesso!</div>`;

    // RESET FORM
    form.reset();

    // REABILITA BOTÃO
    btn.disabled = false;
    btn.innerText = "Enviar";

    // LIMPA MENSAGEM
    setTimeout(() => {
      formMessage.innerHTML = "";
    }, 5000);

  });

});

if (btn) {
  btn.disabled = true;
  btn.innerText = "Enviando...";
}

window.open(url, "_blank");