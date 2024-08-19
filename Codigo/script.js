let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});

// Movimento aleatório do botão 'não' ao clicar
document.querySelector("#no").addEventListener("click", function () {
  let width = window.innerWidth - 100;  // Ajuste para largura do botão
  let height = window.innerHeight - 50; // Ajuste para altura do botão

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});
