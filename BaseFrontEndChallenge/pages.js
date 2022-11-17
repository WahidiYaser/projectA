let form = document.getElementById("form")

form.addEventListener("submit", addTheContent)

function addTheContent(e){
e.preventDefault()
let span = document.getElementById("inputHere")
let inp = document.getElementById("input")
span.textContent += inp.value
span.innerHTML += ("\n")
}