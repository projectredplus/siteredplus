function toggleMenu() {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".toggle-button");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&#10006;"; // Define o ícone de "X"
    } else {
        toggleButton.innerHTML = "&#9776;"; // Define o ícone de "☰"
    }
}
function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    if (nome !== "") {
        document.getElementById("conteudo").classList.add("ocultar");
        document.getElementById("nome").style.display = "none";
        document.getElementById("botao").style.display = "none";
        document.getElementById("mensagem").innerHTML = "Seja bem-vindo(a), " + nome + "!";

        // Armazena o nome no localStorage
        localStorage.setItem("nome", nome);
    }
}

// Recupera o nome do localStorage ao carregar a página
window.onload = function () {
    var nomeArmazenado = localStorage.getItem("nome");
    if (nomeArmazenado) {
        document.getElementById("nome").value = nomeArmazenado;
        document.getElementById("mensagem").innerHTML = "Seja bem-vindo(a), " + nomeArmazenado + "!";
        document.getElementById("conteudo").classList.add("ocultar");
        document.getElementById("nome").style.display = "none";
        document.getElementById("botao").style.display = "none";
    }
};
function exibirCards() {
    var select = document.getElementById("anoSelect");
    var anoSelecionado = select.value;
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var dataAno = card.getAttribute("data-ano");

        if (dataAno === anoSelecionado) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}
exibirCards();
var seconds = 0;
var minutes = 0;
var hours = 0;
var timerInterval;
var isRunning = false;

