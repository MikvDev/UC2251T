// Pegamos os botões de escolha
const botoes = document.querySelectorAll(".choices button");

const textoJ1 = document.getElementById("Player1-choice");
const textoJ2 = document.getElementById("Player2-choice");
const textoResultado = document.getElementById("winner");

let jogador1 = null;
let jogador2 = null;

function verificarVencedor(j1, j2) {
  if (j1 === j2) {
    return "Empate!";
  }
  if (
    (j1 === "pedra" && j2 === "tesoura") ||
    (j1 === "papel" && j2 === "pedra") ||
    (j1 === "tesoura" && j2 === "papel")
  ) {
    return "Jogador 1 venceu! 👋🏻";
  } else {
    return "Jogador 2 venceu! 👋🏻";
  }
}

function novoJogo() {
  jogador1 = null;
  jogador2 = null;
  textoJ1.textContent = "Jogador 1: escolha sua jogada:";
  textoJ2.textContent = "Jogador 2: escolha sua jogada:";
  textoResultado.textContent = ""; // Corrigido aqui
}

// Tratamento de clique nos botões
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const escolha = botao.getAttribute("data-choice");

    if (jogador1 === null) {
      jogador1 = escolha;
      textoJ1.textContent = "Jogador 1 já escolheu";
      textoResultado.textContent = "Vez do jogador 2!";
    } else if (jogador2 === null) {
      jogador2 = escolha;
      textoJ2.textContent = "Jogador 2 já escolheu";
      const resultado = verificarVencedor(jogador1, jogador2);
      textoResultado.textContent = `${resultado} (J1: ${jogador1} | J2: ${jogador2})`;
    } else {
      novoJogo();
      jogador1 = escolha;
      textoJ1.textContent = "Jogador 1 já escolheu";
      textoResultado.textContent = "Vez do jogador 2!";
    }
  });
});
