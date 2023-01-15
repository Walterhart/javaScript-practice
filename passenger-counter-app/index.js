
// global
// DOM document object model: how you use js to modify website
let counter = document.getElementById("counter") 
let prevEnter = document.getElementById("prev-enter")

let count = 0 

// increase count
function increment(){
    count += 1
    counter.innerText = count
    console.log(count)
}

// decrease count
function decrement(){
    count -=1
    counter.innerText = count
    console.log(count)
}

// reset count
function reset(){
    count = 0;
    counter.innerText = count
    prevEnter.textContent = "Previous entries: "
}

// save
function save(){
    prevEnter.textContent += count + " - "
    counter.textContent = count
    count = 0;
    console.log(count)
}