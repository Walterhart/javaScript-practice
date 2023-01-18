

let firstCard = 10 
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let  hasBlackJack = false
let isAlive = true
let msg = ""
let messengerEl = document.getElementById("messenger-el") 

// need to use # for id
// querySelector: question css selector
let sumMsg = document.querySelector("#sum-el")
let cardsMSG = document.querySelector("#cards-el")

function startGame(){
  renderGame()
}
function renderGame(){


    cardsMSG.textContent = "Cards: " + cards[0] + "," + cards[1]
    sumMsg.textContent = "Sum: " + sum
    if( sum < 21){
        console.log("Draw another card?")
        msg = "Draw another card?"

    }
    else if (sum === 21){
        msg = "You win"
        hasBlackJack = true;
    }
    else {
        msg ="Burst, you lost"
        isAlive = false
    }
    //starterMSG.textContent = msg

    messengerEl.textContent = msg
    console.log("game started")

}

function newCard(){
    let nextCard = 1
   
    sum += nextCard
    
    renderGame()
}



