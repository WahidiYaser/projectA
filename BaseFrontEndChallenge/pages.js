let form = document.getElementById("form")

form.addEventListener("submit", addTheContent)

function addTheContent(e){
e.preventDefault()
let paragraph = document.getElementById("inputHere")
let inp = document.getElementById("input")
paragraph.textContent +=  inp.value + "\n"
inp.value = ""
}