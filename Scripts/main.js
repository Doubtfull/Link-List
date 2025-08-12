const theme = document.getElementById("theme")
const logo = document.getElementById("logo")
const saveBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const storedLinks = JSON.parse(localStorage.getItem("myLinks"))
const savedTheme = JSON.parse(localStorage.getItem("theme"))

let ifDarkMode = false
let myLinks = []

if (storedLinks) {
    myLinks = storedLinks
    render(myLinks)
}

if (savedTheme == true) {
    toggleTheme()
}
function render(links) {
    let listItems = "";
    for (let i = 0; i < links.length; i++) {
        listItems += `
        <li>
            <a href= "${links[i]}" target="_blank" rel="noopener noreferrer">
                ${links[i]}
            </a>
        </li>` 

    }

    ulEl.innerHTML = listItems;
    inputEl.value = ""
}

function toggleTheme() {
    document.body.classList.toggle("dark_mode");
    theme.classList.toggle("sun-icon");
    logo.classList.toggle("logo-darkmode");

    if (document.body.classList.contains("dark_mode")) {
        ifDarkMode = true
        theme.src = "Icons/Sun Icon.png";
    } else {
        ifDarkMode = false
        theme.src = "Icons/Cresent Icon.png";
    }

    localStorage.setItem("theme", JSON.stringify(ifDarkMode))
}

theme.addEventListener("click", function () {
    toggleTheme()
})



saveBtn.addEventListener("click", function () {
    myLinks.push(inputEl.value)
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})



tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
    })
})

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLinks = []
    render(myLinks)

    if (ifDarkMode == true) {
        localStorage.setItem("theme", JSON.stringify(ifDarkMode))
    } else {
        localStorage.clear()
    }
})



/*
    Alternative for creating unordered list
const li = document.createElement("li")
li.textContent = listItems
ulEl.append(li)
*/