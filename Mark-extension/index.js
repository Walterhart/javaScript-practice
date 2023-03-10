
const inputBtn = document.getElementById("input-btn")
const deleteBTN = document.getElementById("delete-btn")
const saveBTN = document.getElementById("save-btn")
let links = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// convert links from local storage into an array
let storedLoacalStorageLinks = JSON.parse(localStorage.getItem("links"))
console.log(storedLoacalStorageLinks)

if(storedLoacalStorageLinks)
{
    links = storedLoacalStorageLinks
    renderLinks(links)
}

function renderLinks(links){
    let listItems = ""

    // store links into listItems
    for(i=0; i < links.length; i++){
        
        //listItems += "<li><a target = _blank href ='" + links[i]+"'>"+links[i] + "</a></li>"
        listItems += `
        <li>
            <a target =' _blank' href = '${links[i]}'> ${links[i]}  </a>
        </li>
        `
    }

    // render links
    ulEl.innerHTML = listItems

}


// listen for clicks from id input-btn
// perform function on click
// let js handle event listener instead of html
// convert links into string and store it in localstorage
inputBtn.addEventListener("click",function (){
    if(inputEl.value){
        links.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("links", JSON.stringify(links))
        renderLinks(links)
    }
   
})

// clear local storagem, links , and dom
deleteBTN.addEventListener("dblclick", function(){
    localStorage.clear()
    links =[]
    renderLinks(links)
})

saveBTN.addEventListener("click", function(){

    // allow acess to chrome tab bar
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        links.push(tabs[0].url)
        localStorage.setItem("links",JSON.stringify(links))
        renderLinks(links)
     })
})