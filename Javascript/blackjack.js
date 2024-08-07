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
         message = "youre out of the game"
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


//practice!!!
// let person = {
//     name: "Ndiana",
//     age: 35,
//     country: "Nigeria",

//     logData: function(){
//        let detail = person.name + " is " + person.age + " years old and lives in " + person.country
//        console.log(detail)
//     }

// }

// person.logData()

let age = Math.floor(Math.random() *100) + 1

if(age < 6){
    console.log(age + " free")
}else if(age >= 6 && age<= 17){
    console.log(age + " child discount")
}else if( age > 17 && age < 27){
    console.log(age + " student discount")
}else if( age > 26 && age < 67){
    console.log(age + " full price")
}else{
    console.log(age + " senior discount")
}





