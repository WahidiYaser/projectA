"use strict";
let view = document.querySelector("#view");
let game_Over = document.querySelector("#gameOver");
let reset = document.querySelector("#reset");
let score = document.querySelector("#score");
let snake = [];
let boradDivs;
let direction = 1;
let playStart = 960;
let playGame;
let exKeyPressed = "ArrowRight";
reset.addEventListener("click", restartAgain);
document.addEventListener("keydown", changeDirection);
function changeDirection(e) {
    //37 col, 51 rows
    let keyPressed = e;
    if ((exKeyPressed == "ArrowRight" && keyPressed.key == "ArrowLeft") || (keyPressed.key == "ArrowRight" && exKeyPressed == "ArrowLeft")
        || (exKeyPressed == "ArrowUp") && (keyPressed.key == "ArrowDown") || (exKeyPressed == "ArrowDown") && (keyPressed.key == "ArrowUp"))
        return;
    if (keyPressed.key == "ArrowUp") {
        direction = -52;
        exKeyPressed = "ArrowUp";
    }
    if (keyPressed.key == "ArrowDown") {
        direction = 52;
        exKeyPressed = "ArrowDown";
    }
    if (keyPressed.key == "ArrowLeft") {
        direction = -1;
        exKeyPressed = "ArrowLeft";
    }
    if (keyPressed.key == "ArrowRight") {
        direction = 1;
        exKeyPressed = "ArrowRight";
    }
}
function returnNumber(str) {
    // let num = txt.replace(/\D/g,'');
    let num = str.replace(/[^0-9]/g, '');
    return parseInt(num);
}
function makeBoard() {
    let boardWallLeft = 1;
    let boardWallRight = 52;
    for (let i = 1; i < 1977; i++) {
        let div = document.createElement("div");
        // lastlineStart 1925, firslineEnd 52
        if ((52 - i) >= 0) {
            div.classList.add("boardDiv", "wall", `${i}`);
        } // first line
        if ((1976 - i) < 52) {
            div.classList.add("boardDiv", "wall", `${i}`);
        } // last line
        if (i == boardWallRight) {
            div.classList.add("boardDiv", "wall", `${i}`);
            boardWallRight += 52;
        } // right divs wall
        if (i == boardWallLeft) {
            div.classList.add("boardDiv", "wall", `${i}`);
            boardWallLeft += 52;
        } // left divs wall
        div.classList.add("boardDiv", `${i}`);
        document.querySelector(".view").appendChild(div);
    }
}
function makeSnake() {
    for (let i = 1; i <= 8; i++) {
        let div = document.createElement("div");
        div.classList.add("boardDiv", "snake", `${960 + i}`);
        snake.push(div);
    }
    boradDivs = document.querySelectorAll(".boardDiv");
    for (let i = 0; i < boradDivs.length; i++) {
        let divPosition = returnNumber(boradDivs[i].getAttribute("class"));
        for (let j = 0; j < snake.length; j++) {
            if (returnNumber(snake[j].getAttribute("class")) == divPosition)
                boradDivs[i].classList.add("snake");
        }
    }
}
function moveTheSnake() {
    let removeTheTailExPosition = returnNumber(snake[0].getAttribute("class"));
    let headPosition = returnNumber(snake[snake.length - 1].getAttribute("class"));
    let replaceTheHead = 0;
    for (let i = snake.length - 1; i >= 0; i--) {
        if (i == snake.length - 1) {
            replaceTheHead = headPosition;
            if (direction > 0) {
                headPosition += direction;
            }
            if (direction < 0) {
                headPosition -= Math.abs(direction);
            }
            gameOver(headPosition);
            snake[i].setAttribute(`class`, `boardDiv snake ${headPosition}`);
            boradDivs[headPosition].classList.add("snake");
        }
        else {
            let temp = returnNumber(snake[i].getAttribute("class"));
            snake[i].setAttribute(`class`, `boardDiv snake ${replaceTheHead}`);
            boradDivs[replaceTheHead].classList.add("snake");
            replaceTheHead = temp;
        }
    }
    if (playStart) {
        boradDivs[playStart].classList.remove("snake"), playStart = 0;
    } //runs once
    boradDivs[removeTheTailExPosition].classList.remove("snake");
    if (appleEat(headPosition)) {
        boradDivs[removeTheTailExPosition].classList.remove("snake");
    }
}
function throwApple() {
    let random = Math.round(Math.random() * (1976 - 1)) + 1;
    if (boradDivs[random].classList.contains("snake"))
        throwApple();
    else
        boradDivs[random].classList.add("apple");
}
function appleEat(headPosition) {
    if (boradDivs[headPosition].classList.contains("apple")) {
        let div = document.createElement("div");
        div.classList.add("boardDiv", "snake", `${returnNumber(snake[0].getAttribute("class"))}`);
        boradDivs[headPosition].classList.remove("apple");
        // boradDivs[headPosition].classList.remove("snake");
        snake.unshift(div);
        throwApple();
        return true;
    }
    return false;
}
function gameOver(headPositionFunc) {
    if (boradDivs[headPositionFunc].classList.contains("wall") || (boradDivs[headPositionFunc].classList.contains("snake"))) {
        clearInterval(playGame);
        score.innerHTML = `${snake.length - 8}`;
        game_Over.style.display = "block";
    }
}
function restartAgain(e) {
    e.preventDefault();
    document.querySelectorAll(".boardDiv").forEach(div => {
        div.remove();
    });
    snake = [];
    direction = 1;
    score.innerHTML = "";
    playStart = 960;
    game_Over.style.display = "none";
    exKeyPressed = "ArrowRight";
    startTheGame();
}
function startTheGame() {
    makeBoard();
    makeSnake();
    throwApple();
    playGame = window.setInterval(moveTheSnake, 40);
}
startTheGame();
