
// global
// DOM document object model: how you use js to modify website
let counter = document.getElementById("counter") 

let count = 0 


// increase count
function increment(){
    count = count + 1
    counter.innerText = count
    console.log(count)
}

// decrease count
function decrement(){
    count = count - 1
    counter.innerText = count
    console.log(count)
}

// reset count
function reset(){
    count = 0;
    counter.innerText = count
    console.log(count)
}

// save
function save(){
    console.log(count)
}