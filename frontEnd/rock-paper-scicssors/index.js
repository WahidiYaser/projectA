"use strict";
let choises = [];
let turn = true;
choises[0] = ["rock", "./pics/rock.png"];
choises[1] = ["paper", "./pics/paper.png"];
choises[2] = ["scicssors", "./pics/scicssors.png"];
let playerClick = document.body.querySelectorAll("area");
let reset = document.body.querySelector("#reset");
reset.addEventListener("click", restartGame);
playerClick.forEach(c => c.addEventListener("click", playerTurn));
function restartGame() {
    turn = true;
    document.querySelector(".player img").remove();
    document.querySelector(".computer img").remove();
    document.querySelector(".scoreComputer .win").textContent = 0 + "";
    document.querySelector(".scoreComputer .lose").textContent = 0 + "";
    document.querySelector(".scoreComputer .draw").textContent = 0 + "";
    document.querySelector(".scorePlayer .win").textContent = 0 + "";
    document.querySelector(".scorePlayer .lose").textContent = 0 + "";
    document.querySelector(".scorePlayer .draw").textContent = 0 + "";
}
function playerTurn(e) {
    var _a, _b;
    e.preventDefault();
    let playerScore = Number(document.querySelector(".scorePlayer .win").textContent);
    let computerScore = Number(document.querySelector(".scoreComputer .win").textContent);
    if (turn && (playerScore < 3 && computerScore < 3)) {
        let temp = "";
        temp = choises.find((a) => {
            if (a[0] == this.className)
                return a;
        });
        if (document.querySelector(".player img") == null) {
            let img = document.createElement("img");
            img.setAttribute("src", temp[1]);
            img.setAttribute("class", temp[0]);
            document.querySelector(".player").appendChild(img);
        }
        else {
            (_a = document.querySelector(".player img")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", temp[1]);
            (_b = document.querySelector(".player img")) === null || _b === void 0 ? void 0 : _b.setAttribute("class", temp[0]);
        }
    }
    turn = false;
    computerTurn();
}
function computerTurn() {
    var _a, _b;
    let playerScore = Number(document.querySelector(".scorePlayer .win").textContent);
    let computerScore = Number(document.querySelector(".scoreComputer .win").textContent);
    if (!turn && (playerScore < 3 && computerScore < 3)) {
        const random = Math.round(Math.random() * 2) + 0;
        if (document.querySelector(".computer img") == null) {
            let img = document.createElement("img");
            img.setAttribute("src", choises[random][1]);
            img.setAttribute("class", choises[random][0]);
            document.querySelector(".computer").appendChild(img);
        }
        else {
            (_a = document.querySelector(".computer img")) === null || _a === void 0 ? void 0 : _a.setAttribute("class", choises[random][0]);
            (_b = document.querySelector(".computer img")) === null || _b === void 0 ? void 0 : _b.setAttribute("src", choises[random][1]);
        }
    }
    turn = true;
    check();
}
function check() {
    let player = document.querySelector(".player img");
    let computer = document.querySelector(".computer img");
    let playerScore = Number(document.querySelector(".scorePlayer .win").textContent);
    let computerScore = Number(document.querySelector(".scoreComputer .win").textContent);
    if (playerScore < 3 && computerScore < 3) {
        // if player and computer is equal "draw"
        if (((player === null || player === void 0 ? void 0 : player.className) == (computer === null || computer === void 0 ? void 0 : computer.className))) {
            let temp1 = Number(document.querySelector(".scoreComputer .draw").textContent);
            let temp2 = Number(document.querySelector(".scorePlayer .draw").textContent);
            temp1++, temp2++;
            document.querySelector(".scoreComputer .draw").textContent = temp1 + "";
            document.querySelector(".scorePlayer .draw").textContent = temp2 + "";
        }
        /*--------------------------------paper scicssors-----------------------------*/
        // if computer win
        else if (((player === null || player === void 0 ? void 0 : player.className) == "paper") && ((computer === null || computer === void 0 ? void 0 : computer.className) == "scicssors")) {
            computerWin();
            playerLose();
        }
        // if player win
        else if (((player === null || player === void 0 ? void 0 : player.className) == "scicssors") && ((computer === null || computer === void 0 ? void 0 : computer.className) == "paper")) {
            playerWin();
            computerLose();
        }
        /*----------------------------paper rock----------------------------*/
        // if computer win
        else if (((player === null || player === void 0 ? void 0 : player.className) == "rock") && ((computer === null || computer === void 0 ? void 0 : computer.className) == "paper")) {
            computerWin();
            playerLose();
        }
        // if player win
        else if (((player === null || player === void 0 ? void 0 : player.className) == "paper") && ((computer === null || computer === void 0 ? void 0 : computer.className) == "rock")) {
            playerWin();
            computerLose();
        }
        /*----------------------------rock scicssors----------------------------*/
        // if computer win
        else if (((player === null || player === void 0 ? void 0 : player.className) == "scicssors") && ((computer === null || computer === void 0 ? void 0 : computer.className) == "rock")) {
            computerWin();
            playerLose();
        }
        // if player win
        else if (((player === null || player === void 0 ? void 0 : player.className) == "rock") && ((computer === null || computer === void 0 ? void 0 : computer.className) == "scicssors")) {
            playerWin();
            computerLose();
        }
        chekWining();
    }
}
function playerWin() {
    let temp = Number(document.querySelector(".scorePlayer .win").textContent);
    temp++;
    document.querySelector(".scorePlayer .win").textContent = temp + "";
}
function playerLose() {
    let temp = Number(document.querySelector(".scorePlayer .lose").textContent);
    temp++;
    document.querySelector(".scorePlayer .lose").textContent = temp + "";
}
function computerWin() {
    let temp = Number(document.querySelector(".scoreComputer .win").textContent);
    temp++;
    document.querySelector(".scoreComputer .win").textContent = temp + "";
}
function computerLose() {
    let temp = Number(document.querySelector(".scoreComputer .lose").textContent);
    temp++;
    document.querySelector(".scoreComputer .lose").textContent = temp + "";
}
function chekWining() {
    let playerScore = Number(document.querySelector(".scorePlayer .win").textContent);
    let computerScore = Number(document.querySelector(".scoreComputer .win").textContent);
    if (playerScore >= 3 && playerScore > computerScore) {
        setTimeout(() => {
            restartGame();
            alert("Congratulation Player");
        }, 500);
    }
    if (computerScore >= 3 && computerScore > playerScore) {
        setTimeout(() => {
            restartGame();
            alert("Ooh You Lose :(");
        }, 500);
    }
}
function alertMessage(msg) {
    return alert(msg);
}
