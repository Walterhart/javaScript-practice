let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function randomHand() {
    let random = Math.floor(Math.random() * hands.length)
    return hands[random]
}

console.log(randomHand())