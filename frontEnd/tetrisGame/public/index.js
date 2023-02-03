"use strict";
const gameBoard = document.querySelector("#gameBoard");
function makeBoard() {
    for (let i = 0; i < 380; i++) {
        let div = document.createElement("div");
        div.classList.add("boardDiv");
        gameBoard.appendChild(div);
    }
} //20 rows, 19 columns
makeBoard();
