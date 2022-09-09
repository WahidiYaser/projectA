
let rows = document.querySelectorAll("tbody tr")
let sum = 0
for(let i = 0; i < rows.length; i+=1){
    let cells = rows[i].children
    sum += parseInt(cells[1].innerText)
}
document.getElementById("sum").innerText = sum + ""

let form = document.getElementById("add-product-form")

form.addEventListener("submit", addProduct)

function addProduct(x){
    x.preventDefault()

let nameInput = document.getElementById("p-name")
let priceInput = document.getElementById("p-price")

let row = document.createElement("tr")
let td1 = document.createElement("td")
let td2 = document.createElement("td")

td1.innerText = nameInput.value
td2.innerText = priceInput.value

row[0].appendChild(td1)
row[1].appendChild(td2)

let tBody = document.getElementsByTagName("tbody")
tBody.appendChild(row)
}
