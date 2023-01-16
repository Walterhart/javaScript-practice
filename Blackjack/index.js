

let firstCard = 10 
let secondCard = 11
let sum = firstCard + secondCard 
let  hasBlackJack = false
let isAlive = true
let msg = ""
let messengerEl = document.getElementById("messenger-el") 
//let sumMsg = document.getElementById("sum-el")

// need to use # for id
// querySelector: question css selector
let sumMsg = document.querySelector("#sum-el")
function startGame(){

    console.log(firstCard + " + " + secondCard)
    console.log("Total:" + sum)

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
    console.log(isAlive)
    console.log(msg)
    sumMsg.textContent = "Sum: " + sum
    messengerEl.textContent = msg

}

startGame()

console.log(messengerEl)
