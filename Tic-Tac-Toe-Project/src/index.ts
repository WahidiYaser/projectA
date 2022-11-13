let Turn = true                 /* if true it's X turn, if false it's O turn */
let btnsHtml = document.body.getElementsByClassName("btn")

let winTimesX = document.body.querySelector(".winTimesX")
winTimesX!.textContent = 0 + ""
let winTimesO = document.body.querySelector(".winTimesO")
winTimesO!.textContent = 0 + ""

for (let i = 0; i < btnsHtml.length; i++) {
    btnsHtml[i].addEventListener("click", onPlay)
}

function onPlay(e: Event) {
    if ((Turn == true) && (((e.target) as HTMLElement).textContent == "")) {
        ((e.target) as HTMLElement).innerHTML = "X"
        let theXSymbolIndex = ((e.target) as HTMLElement).getAttribute("class")?.charAt(4)
        let theXSymbolInteger = parseInt(theXSymbolIndex!)
        winOrNot(theXSymbolInteger)
        Turn = false
    }
    else if ((Turn == false) && (((e.target) as HTMLElement).textContent == "")) {
        ((e.target) as HTMLElement).innerHTML = "O"
        let theOSymbolIndex = ((e.target) as HTMLElement).getAttribute("class")?.charAt(4)
        let theOSymbolInteger = parseInt(theOSymbolIndex!)
        winOrNot(theOSymbolInteger)
        Turn = true
    }
}

function winOrNot(index: number) {

    if (index == 0 && Turn) {
        if (((btnsHtml[1].textContent === "X") && (btnsHtml[2].textContent === "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[8].textContent == "X")) ||
            ((btnsHtml[3].textContent == "X") && (btnsHtml[6].textContent == "X"))) {
            alert("you win X !")
            clearBoard("X")
        }
    }
    else if (index == 0 && !Turn) {
        if (((btnsHtml[1].textContent === "O") && (btnsHtml[2].textContent === "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[8].textContent == "O")) ||
            ((btnsHtml[3].textContent == "O") && (btnsHtml[6].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 1 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[2].textContent === "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[7].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 1 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[2].textContent === "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[7].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 2 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[1].textContent === "X")) ||
            ((btnsHtml[5].textContent == "X") && (btnsHtml[8].textContent == "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[6].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 2 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[1].textContent === "O")) ||
            ((btnsHtml[5].textContent == "O") && (btnsHtml[8].textContent == "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[6].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 3 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[6].textContent === "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[5].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 3 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[6].textContent === "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[5].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 4 && Turn) {
        if (((btnsHtml[3].textContent === "X") && (btnsHtml[5].textContent === "X")) ||
            ((btnsHtml[1].textContent == "X") && (btnsHtml[7].textContent == "X")) ||
            ((btnsHtml[2].textContent == "X") && (btnsHtml[6].textContent == "X")) ||
            ((btnsHtml[0].textContent == "X") && (btnsHtml[8].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 4 && !Turn) {
        if (((btnsHtml[3].textContent === "O") && (btnsHtml[5].textContent === "O")) ||
            ((btnsHtml[1].textContent == "O") && (btnsHtml[7].textContent == "O")) ||
            ((btnsHtml[2].textContent == "O") && (btnsHtml[6].textContent == "O")) ||
            ((btnsHtml[0].textContent == "O") && (btnsHtml[8].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 5 && Turn) {
        if (((btnsHtml[3].textContent === "X") && (btnsHtml[4].textContent === "X")) ||
            ((btnsHtml[2].textContent == "X") && (btnsHtml[8].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 5 && !Turn) {
        if (((btnsHtml[3].textContent === "O") && (btnsHtml[4].textContent === "O")) ||
            ((btnsHtml[2].textContent == "O") && (btnsHtml[8].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 6 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[3].textContent === "X")) ||
            ((btnsHtml[7].textContent == "X") && (btnsHtml[8].textContent == "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[2].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 6 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[3].textContent === "O")) ||
            ((btnsHtml[7].textContent == "O") && (btnsHtml[8].textContent == "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[2].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 7 && Turn) {
        if (((btnsHtml[6].textContent === "X") && (btnsHtml[8].textContent === "X")) ||
            ((btnsHtml[1].textContent == "X") && (btnsHtml[4].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 7 && !Turn) {
        if (((btnsHtml[6].textContent === "O") && (btnsHtml[8].textContent === "O")) ||
            ((btnsHtml[1].textContent == "O") && (btnsHtml[4].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 8 && Turn) {
        if (((btnsHtml[2].textContent === "X") && (btnsHtml[5].textContent === "X")) ||
            ((btnsHtml[6].textContent == "X") && (btnsHtml[7].textContent == "X")) ||
            ((btnsHtml[0].textContent == "X") && (btnsHtml[4].textContent == "X")))
            alert("you win X !"), clearBoard("X")
    }
    else if (index == 8 && !Turn) {
        if (((btnsHtml[2].textContent === "O") && (btnsHtml[5].textContent === "O")) ||
            ((btnsHtml[6].textContent == "O") && (btnsHtml[7].textContent == "O")) ||
            ((btnsHtml[0].textContent == "O") && (btnsHtml[4].textContent == "O")))
            alert("you win O !"), clearBoard("O")
    }
}
function clearBoard(str: string) {
    for (let i = 0; i < btnsHtml.length; i++) {
        btnsHtml[i].innerHTML = ""
    }
    if (str == "X") {
    let num = parseInt(document.body.querySelector(".winTimesX")?.textContent!)
    winTimesX!.textContent = ( num + 1 ).toString()  
    }
    else if (str == "O") {
        let num = parseInt(document.body.querySelector(".winTimesO")?.textContent!)
        winTimesO!.textContent = ( num + 1 ).toString()  
    }
}

function resetGame() {
    Turn = true
    winTimesX!.textContent = 0 + ""
    winTimesO!.textContent = 0 + ""
    for (let i = 0; i < btnsHtml.length; i++) {
        btnsHtml[i].innerHTML = ""
    }
}