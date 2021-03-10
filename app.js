const cards = document.querySelectorAll(".flip-card-inner")

function flipCard(){
    this.classList.toggle(".flip")
}

cards.forEach((card) => card.addEventListener("click", flipCard))
    
