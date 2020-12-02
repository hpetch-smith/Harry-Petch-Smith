const cards = document.querySelectorAll(".flip-card")

function flipCard(){
    this.classList.toggle("flip-card.flip-card-inner")
}

cards.forEach((card) => card.addEventListener("click", flipCard))
    
