let btns = document.body.querySelectorAll(".calculator-wrraper .calculator button")
btns.forEach((a) => { a.addEventListener("click", btnClick) })

let ac = document.querySelector(".ac")
ac.removeEventListener("click", btnClick)
ac.addEventListener("click", clear)

let eq = document.querySelector(".equalBtn")
eq.removeEventListener("click", btnClick)
eq.addEventListener("click", solveIt)

function solveIt() {
    let mem = document.querySelector(".mem")
    mem.textContent = eval(mem.textContent)
}
function clear() {
    let mem = document.querySelector(".mem")
    mem.textContent = ""
}
function btnClick() {
    let mem = document.querySelector(".mem")
    mem.textContent += this.textContent
}