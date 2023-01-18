


let cards = []
let sum = 0
let  hasBlackJack = false
let isAlive = false
let msg = ""
let messengerEl = document.getElementById("messenger-el") 

// need to use # for id
// querySelector: question css selector
let sumMsg = document.querySelector("#sum-el")
let cardsMSG = document.querySelector("#cards-el")

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard 
    renderGame()
}
function renderGame(){


    cardsMSG.textContent = "Cards: " 
    for(i = 0; i < cards.length; i++){
        cardsMSG.textContent += cards[i] + " "
    }

    sumMsg.textContent = "Sum: " + sum
    if( sum < 21){
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
}

function newCard(){
    if(isAlive === true && hasBlackJack === false )
    {
        let nextCard = getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        console.log(cards)
        renderGame()
    }
    
    
}

function getRandomCard(){
    let randomeCard = Math.floor(Math.random() * 13) + 1
    console.log(randomeCard)
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



