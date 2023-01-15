
// this return only non-decimals number between 2-11
let firstCard = Math.floor(Math.random() * 13) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let sum = firstCard + secondCard 
console.log(firstCard + " + " + secondCard)
console.log("Total:" + sum)

if( sum < 21){
    console.log("Draw another card?")
}
else if (sum === 21){
    console.log("You win")
}
else {
    console.log("Burst, you lost")
}



