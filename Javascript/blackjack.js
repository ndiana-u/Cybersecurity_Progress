// let firstCard = 6
// let secondCard =15
// let sum = firstCard + secondCard
// if(sum < 21){
//     console.log("Do you want to draw a new card?")
// }else if("sum === 21"){
//     console.log("Wheeeeew!youve got blackjack!")
// }else if(sum > 21){
//     console.log("You're out of the game!")
// }

// let age = 22
// if(age < 22){
//     console.log("You can not enter the club")
// }else{
//     console.log("Welcome!")
// }

// let age = 100
// if(age < 100){
//     console.log("Not eligible")
// }else if(age === 100){
//     console.log("here is your birthday card from the king!")
// }else{
//     console.log("Not eligible, you have already gotten one")
// }

let firstCard = 17
let secondCard = 7
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function renderGame(){

    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if (sum === 21){
        message = "Wohoo! Youve got Blackjack"
        hasBlackJack = true
    }else{
         message = "youre out of the game"
         isAlive = false
    }
    messageEl.textContent = message

    for(let i =1; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
}

function newCard(){
   console.log("Drawing a new card from deck")
   let card = 3
   sum += card
   renderGame()
   cards.push(6)
}

function startGame(){
    renderGame()
}

function getRandomCard(){
    
}