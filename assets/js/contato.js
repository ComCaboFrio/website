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

    
    // VALIDAR NOME
    if (nome.length < 3) {

      formMessage.innerHTML =
        `<div class="alert alert-danger">
          Digite seu nome completo.
        </div>`;
      return;
    }

    // VALIDAR E-MAIL
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

      formMessage.innerHTML =
        `<div class="alert alert-danger">
          Digite um e-mail válido.
        </div>`;

      return;
    }

    // VALIDAR TELEFONE
    const telefoneLimpo = telefone.replace(/\D/g, "");

    if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {

      formMessage.innerHTML =
        `<div class="alert alert-danger">
          Digite um telefone válido com DDD.
        </div>`;

      return;
    }

    // VALIDAR MENSAGEM
    const palavrasMensagem = mensagem.trim().split(/\s+/);

    if (palavrasMensagem.length < 5) {

      formMessage.innerHTML =
        `<div class="alert alert-danger">
          A mensagem deve ter pelo menos 5 palavras.
        </div>`;

      return;
    }

    // BLOQUEIA BOTÃO
    btn.disabled = true;
    btn.innerHTML = "Enviando...";

    // TEXTO WHATSAPP
    const texto =
`📩 Novo contato:
👤 Nome: ${nome}
📧 Email: ${email}
📞 Telefone: ${telefoneLimpo}
💬 Mensagem: ${mensagem}`;

    // URL CALLMEBOT
    const url =
`https://api.callmebot.com/whatsapp.php?phone=5522997994770&text=${encodeURIComponent(texto)}&apikey=1395824`;

    //ENVIA SEM ABRIR PÁGINA
    fetch(url, {
      method: "GET",
      mode: "no-cors"
    })
    .then(()=> {

        // FEEDBACK
        formMessage.innerHTML =
          `<div class="alert alert-success">
          ${nome}, sua mensagem foi enviada com sucesso!
      </div>`;

        // LIMPA FORMULÁRIO
        form.reset();
  })
  
      .catch(error => { 
        formMessage.innerHTML =
          `<div class="alert alert-danger">
        Ocorreu um erro ao enviar a mensagem. Tente novamente.
      </div>`;
      })
      .finally(() => {

    // REATIVA BOTÃO
    btn.disabled = false;
    btn.innerText = "Enviar";

    // REMOVE MENSAGEM
    setTimeout(() => {

      formMessage.innerHTML = "";

    }, 5000);
    });

  });
});