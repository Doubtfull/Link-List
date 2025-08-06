const theme = document.getElementById("theme")
const logo = document.getElementById("logo")
const saveBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a href= "${myLeads[i]}" target="_blank" rel="noopener noreferrer">
                ${myLeads[i]}
            </a>
        </li>` 

    }

    ulEl.innerHTML = listItems;
    inputEl.value = ""
}

theme.addEventListener("click", function () {
    document.body.classList.toggle("dark_mode");
    theme.classList.toggle("sun-icon");
    logo.classList.toggle("logo-darkmode");

    if (document.body.classList.contains("dark_mode")) {
        theme.src = "Icons/Sun Icon.png";
    } else {
        theme.src = "Icons/Cresent Icon.png";
    }
})

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
})



/*
    Alternative for creating unordered list
const li = document.createElement("li")
li.textContent = listItems
ulEl.append(li)
*/