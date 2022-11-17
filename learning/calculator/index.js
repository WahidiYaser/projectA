let btns = document.body.querySelectorAll(".calculator-wrraper .calculator button")
btns.forEach((a) => { a.addEventListener("click", btnClick) })

let ac = document.querySelector(".ac")
ac.removeEventListener("click", btnClick)
ac.addEventListener("click", clear)

let eq = document.querySelector(".equalBtn")
eq.removeEventListener("click", btnClick)
eq.addEventListener("click", solveIt)

// let form = document.querySelector(".calculator-wrraper")
// form.addEventListener("submit", solveIt)

function solveIt() {
    //  e.preventDefault()
    let mem = document.querySelector(".mem")
    mem.value = eval(mem.value)
}
function clear() {
    let mem = document.querySelector(".mem")
    mem.value = ""
}
function btnClick() {
    let mem = document.querySelector(".mem")
    mem.value += this.textContent
}