let cards = []
let sum = 0
let  hasBlackJack = false
let isAlive = false
let isStarted = false
let msg = ""
let messengerEl = document.getElementById("messenger-el") 

// need to use # for id
// querySelector: question css selector
let sumMsg = document.querySelector("#sum-el")
let cardsMSG = document.querySelector("#cards-el")
let startButton = document.getElementById("start")
let drawButton = document.getElementById("draw-card")
//  player object
let player = {
    name :  "Cash",
    cash: 0

}

let playerEl = document.getElementById("player-cash-el")
playerEl.textContent = player.name + ": " + player.cash

hideElement(drawButton)
function startGame(){
    cards = []
    hideElement(startButton)
    showElement(drawButton)
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard 
    renderGame()
}

function hideElement(element){
    element.style.display = "none"
}
function showElement(element){
    element.style.display = "block"
}
function renderGame(){

    
    cardsMSG.textContent = "Cards: " 
    for(i = 0; i < cards.length; i++){
        cardsMSG.textContent += cards[i] + " "
    }

    sumMsg.textContent = "Sum: " + sum
    if( sum < 21){
        msg = "Draw another card?"
        hideElement(startButton)
        showElement(drawButton)

    }
    else if (sum === 21){
        msg = "You win"
        hasBlackJack = true;
        player.cash += 10
        playerEl.textContent = player.name + ": " + player.cash
        hideElement(drawButton)
        showElement(startButton)
    }
    else {
        msg ="Burst, you lost"
        player.cash -= 10
        isAlive = false
        playerEl.textContent = player.name + ": " + player.cash
        hideElement(drawButton)
        showElement(startButton)
        
    }

    messengerEl.textContent = msg
}

function newCard(){
    if(isAlive === true && hasBlackJack === false )
    {
        let nextCard = getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        renderGame()
    }
    
    
}

function getRandomCard(){
    let randomeCard = Math.floor(Math.random() * 13) + 1
    if(randomeCard === 1)
    {
        return 11
    }
    else if(randomeCard === 11 || randomeCard === 12|| randomeCard === 13)
    {
        return 10
    }
    else
    {
        return randomeCard

    }

    
}

