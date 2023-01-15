

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let  hasBlackJack = false
let isAlive = true
let msg = ""

msg = "logging out"
console.log(firstCard + " + " + secondCard)
console.log("Total:" + sum)

if( sum < 21){
    console.log("Draw another card?")

}
else if (sum === 21){
    console.log("You win")
    hasBlackJack = true;
}
else {
    console.log("Burst, you lost")
    isAlive = false
}

console.log(isAlive)
console.log(msg)
