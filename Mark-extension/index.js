
const inputBtn = document.getElementById("input-btn")
let links = ["test.com","idk"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// listen for clicks from id input-btn
// perform function on click
// let js handle event listener instead of html
inputBtn.addEventListener("click",function (){
    links.push(inputEl.value)
    console.log(links)
})

for(i=0; i < links.length; i++){
    console.log(links[i])
    ulEl.innerHTML += "<li>"+ links[i] + "</li>"
}