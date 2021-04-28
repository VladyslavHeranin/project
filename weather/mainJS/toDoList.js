
let today = new Date();
let dd = String(today.getDate());
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let date = `${dd}.${mm}.${yyyy}`

let list = document.querySelector("#list");
let button = document.querySelector("#button");
let input = document.querySelector('#input');
 document.querySelector('#data').innerHTML = date

function createElem(text) {
    let newElem = document.createElement("div");
    newElem.className = "item";

    let info = document.createElement("p");
    info.className = "infoText";
    info.textContent = text.trim();

    let deletButton = document.createElement("div");
    deletButton.className = "delete";
    deletButton.textContent = "+"

    newElem.appendChild(info);
    newElem.appendChild(deletButton);

    deletButton.addEventListener('click', () => {
        list.removeChild(newElem);
    })

    info.onclick = (event) => {
        event.target.classList.toggle('infoText-check');
    }

    list.appendChild(newElem);
}


button.addEventListener("click", () => {
    if (input.value === "") {
        alert("please enter text")
    } else {
        createElem(input.value);
        input.value = ""
    };
})

