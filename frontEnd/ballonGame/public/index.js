"use strict";
let lives = 3;
let score = 0;
let keepBaloonsFly = 0;
let reset = document.body.querySelector("#reset");
reset.addEventListener("click", playAgain);
function startGame() {
    lives = 3;
    document.querySelector(".gameOver .score").innerText == "0";
    document.querySelector(".lives").innerHTML = lives.toString();
    keepBaloonsFly = window.setInterval(function createBaloons() {
        var _a;
        let xCross = (Math.round(Math.random() * (1437)) + 0).toString();
        const img = document.createElement("img");
        img.setAttribute("src", "../images/baloon1.png");
        img.setAttribute("class", "baloons");
        img.setAttribute("draggable", "false");
        img.style.left = `${xCross}px`;
        (_a = document.querySelector("#backgroundImg")) === null || _a === void 0 ? void 0 : _a.append(img);
        let baloons = document.querySelectorAll(".baloons");
        baloons.forEach(b => {
            b.addEventListener("click", removeBaloon);
        });
        baloons.forEach(b => {
            b.addEventListener("animationend", checkIfBaloonPassed);
        });
    }, 2500);
}
function removeBaloon(e) {
    let baloon = (e.target);
    let popSound = document.querySelector("#popSound");
    popSound.play();
    score++;
    document.querySelector(".gameOver .score").innerText = score.toString();
    document.querySelector("#backgroundImg").removeChild(baloon);
}
function checkIfBaloonPassed(e) {
    let baloon = (e.target);
    document.querySelector("#backgroundImg").removeChild(baloon);
    lives--;
    document.querySelector(".lives").innerHTML = lives.toString();
    if (lives <= 0) {
        window.clearInterval(keepBaloonsFly);
        document.querySelector(".gameOver").style.display = "flex";
    }
}
function playAgain() {
    document.querySelector(".gameOver").style.display = "none";
    document.querySelector(".lives").innerHTML = "3";
    setTimeout(startGame, 150);
}
startGame();
