// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// this return only non-decimals number between 2-11
let firstCard = Math.floor(Math.random() * 12) + 2;
let secondCard = Math.floor(Math.random() * 12) + 2;
console.log(firstCard + " + " + secondCard);

// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard;

console.log(sum)
