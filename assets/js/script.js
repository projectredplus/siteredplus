const yearSelect = document.getElementById("yearSelect");
const cardContainer = document.getElementById("cardContainer");

yearSelect.addEventListener("change", function() {
    cardContainer.innerHTML = ""; // Limpa os cards anteriores

    const selectedYear = yearSelect.value;
    const numCards = 3; // Número de redações para exibir

    for (let i = 1; i <= numCards; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-year", selectedYear); // Define o atributo data-year
        
        const cardImage = document.createElement("img");
        cardImage.src = "caderno.png"; // Substitua pelo caminho da imagem do caderno
        card.appendChild(cardImage);

        const buttonText = document.createTextNode("Ver Redação");
        const cardButton = document.createElement("button");
        cardButton.classList.add("btn");
        cardButton.appendChild(buttonText);
        
        card.appendChild(cardButton);
        cardContainer.appendChild(card);
    }
    
    // Referência aos cards criados
    const cards = cardContainer.querySelectorAll(".card");
    
    yearSelect.addEventListener("change", function() {
        const selectedYear = yearSelect.value;
    
        cards.forEach(card => {
            const cardYear = card.getAttribute("data-year");
            if (cardYear === selectedYear || selectedYear === "all") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

