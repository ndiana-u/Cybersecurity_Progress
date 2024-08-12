
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
   name: "Sammy",
   chips: 145
}

 
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":$" + player.chips

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "Wohoo! Youve got Blackjack"
        hasBlackJack = true
    }else{
         message = "You're out of the game"
         isAlive = false
    }
    messageEl.textContent = message

    for(let i =0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        console.log(cards)
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
     }

}

function startGame(){ 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive = true


    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}






