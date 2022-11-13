"use strict";
let Turn = true; /* if true it's X turn, if false it's O turn */
let btnsHtml = document.body.getElementsByClassName("btn");
let winTimesX = document.body.querySelector(".winTimesX");
winTimesX.textContent = 0 + "";
let winTimesO = document.body.querySelector(".winTimesO");
winTimesO.textContent = 0 + "";
for (let i = 0; i < btnsHtml.length; i++) {
    btnsHtml[i].addEventListener("click", onPlay);
}
function onPlay(e) {
    var _a, _b;
    if ((Turn == true) && ((e.target).textContent == "")) {
        (e.target).innerHTML = "X";
        let theXSymbolIndex = (_a = (e.target).getAttribute("class")) === null || _a === void 0 ? void 0 : _a.charAt(4);
        let theXSymbolInteger = parseInt(theXSymbolIndex);
        winOrNot(theXSymbolInteger);
        Turn = false;
    }
    else if ((Turn == false) && ((e.target).textContent == "")) {
        (e.target).innerHTML = "O";
        let theOSymbolIndex = (_b = (e.target).getAttribute("class")) === null || _b === void 0 ? void 0 : _b.charAt(4);
        let theOSymbolInteger = parseInt(theOSymbolIndex);
        winOrNot(theOSymbolInteger);
        Turn = true;
    }
}
function winOrNot(index) {
    if (index == 0 && Turn) {
        if (((btnsHtml[1].textContent === "X") && (btnsHtml[2].textContent === "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[8].textContent == "X")) ||
            ((btnsHtml[3].textContent == "X") && (btnsHtml[6].textContent == "X"))) {
            alert("you win X !");
            clearBoard("X");
        }
    }
    else if (index == 0 && !Turn) {
        if (((btnsHtml[1].textContent === "O") && (btnsHtml[2].textContent === "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[8].textContent == "O")) ||
            ((btnsHtml[3].textContent == "O") && (btnsHtml[6].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 1 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[2].textContent === "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[7].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 1 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[2].textContent === "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[7].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 2 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[1].textContent === "X")) ||
            ((btnsHtml[5].textContent == "X") && (btnsHtml[8].textContent == "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[6].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 2 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[1].textContent === "O")) ||
            ((btnsHtml[5].textContent == "O") && (btnsHtml[8].textContent == "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[6].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 3 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[6].textContent === "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[5].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 3 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[6].textContent === "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[5].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 4 && Turn) {
        if (((btnsHtml[3].textContent === "X") && (btnsHtml[5].textContent === "X")) ||
            ((btnsHtml[1].textContent == "X") && (btnsHtml[7].textContent == "X")) ||
            ((btnsHtml[2].textContent == "X") && (btnsHtml[6].textContent == "X")) ||
            ((btnsHtml[0].textContent == "X") && (btnsHtml[8].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 4 && !Turn) {
        if (((btnsHtml[3].textContent === "O") && (btnsHtml[5].textContent === "O")) ||
            ((btnsHtml[1].textContent == "O") && (btnsHtml[7].textContent == "O")) ||
            ((btnsHtml[2].textContent == "O") && (btnsHtml[6].textContent == "O")) ||
            ((btnsHtml[0].textContent == "O") && (btnsHtml[8].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 5 && Turn) {
        if (((btnsHtml[3].textContent === "X") && (btnsHtml[4].textContent === "X")) ||
            ((btnsHtml[2].textContent == "X") && (btnsHtml[8].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 5 && !Turn) {
        if (((btnsHtml[3].textContent === "O") && (btnsHtml[4].textContent === "O")) ||
            ((btnsHtml[2].textContent == "O") && (btnsHtml[8].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 6 && Turn) {
        if (((btnsHtml[0].textContent === "X") && (btnsHtml[3].textContent === "X")) ||
            ((btnsHtml[7].textContent == "X") && (btnsHtml[8].textContent == "X")) ||
            ((btnsHtml[4].textContent == "X") && (btnsHtml[2].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 6 && !Turn) {
        if (((btnsHtml[0].textContent === "O") && (btnsHtml[3].textContent === "O")) ||
            ((btnsHtml[7].textContent == "O") && (btnsHtml[8].textContent == "O")) ||
            ((btnsHtml[4].textContent == "O") && (btnsHtml[2].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 7 && Turn) {
        if (((btnsHtml[6].textContent === "X") && (btnsHtml[8].textContent === "X")) ||
            ((btnsHtml[1].textContent == "X") && (btnsHtml[4].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 7 && !Turn) {
        if (((btnsHtml[6].textContent === "O") && (btnsHtml[8].textContent === "O")) ||
            ((btnsHtml[1].textContent == "O") && (btnsHtml[4].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
    // ----------------------------------------------------------------------------------------------
    else if (index == 8 && Turn) {
        if (((btnsHtml[2].textContent === "X") && (btnsHtml[5].textContent === "X")) ||
            ((btnsHtml[6].textContent == "X") && (btnsHtml[7].textContent == "X")) ||
            ((btnsHtml[0].textContent == "X") && (btnsHtml[4].textContent == "X")))
            alert("you win X !"), clearBoard("X");
    }
    else if (index == 8 && !Turn) {
        if (((btnsHtml[2].textContent === "O") && (btnsHtml[5].textContent === "O")) ||
            ((btnsHtml[6].textContent == "O") && (btnsHtml[7].textContent == "O")) ||
            ((btnsHtml[0].textContent == "O") && (btnsHtml[4].textContent == "O")))
            alert("you win O !"), clearBoard("O");
    }
}
function clearBoard(str) {
    var _a, _b;
    for (let i = 0; i < btnsHtml.length; i++) {
        btnsHtml[i].innerHTML = "";
    }
    if (str == "X") {
        let num = parseInt((_a = document.body.querySelector(".winTimesX")) === null || _a === void 0 ? void 0 : _a.textContent);
        winTimesX.textContent = (num + 1).toString();
    }
    else if (str == "O") {
        let num = parseInt((_b = document.body.querySelector(".winTimesO")) === null || _b === void 0 ? void 0 : _b.textContent);
        winTimesO.textContent = (num + 1).toString();
    }
}
function resetGame() {
    Turn = true;
    winTimesX.textContent = 0 + "";
    winTimesO.textContent = 0 + "";
    for (let i = 0; i < btnsHtml.length; i++) {
        btnsHtml[i].innerHTML = "";
    }
}
