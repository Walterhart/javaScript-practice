
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
    inputEl.value =""
    renderLinks()
})

function renderLinks(){
    let listItems = ""

    // store links into listItems
    for(i=0; i < links.length; i++){
        
        console.log(links[i])
        //listItems += "<li><a target = _blank href ='" + links[i]+"'>"+links[i] + "</a></li>"
        listItems += `
        <li>
            <a target =' _blank' href = '${links[i]}'> ${links[i]}  </a>
        </li>
        `
        console.log(listItems)
    }

    // render links
    ulEl.innerHTML = listItems

}
