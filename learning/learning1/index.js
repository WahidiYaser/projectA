// let colors = ["red", "green", "yellow", "blue"]
// let elementa = []
// elementa = colors.map((e, i) => {
//     elementa[i] = document.createElement("button")
//     elementa[i].innerText = e
//     elementa[i].style.background = e
//     elementa[i].classList.add("buttons", e)
//     document.body.appendChild(elementa[i])
//     console.log(elementa[i].innerText)
// })

let colors = ["red", "green", "yellow", "blue"]
let text = colors.map(a => "<div class='"+a+"' style='background-color: "+a+";'> <button>"+a+"</button></div>")
text.forEach(b => document.body.innerHTML += b)
let btns = document.body.querySelectorAll("button")

btns.forEach((a) => {
    //let parent = a.parentElement
    //parent.remove()
    //console.log(parent)
    a.addEventListener("mouseover", ()=>{
        alert("Watch Out Man!")
    })
})