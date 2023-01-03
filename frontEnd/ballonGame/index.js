"use strict";
let lives = 3;
let score = 0;
let keepBaloonsFly = 0;
document.body.querySelector("#popSound").play();
function startGame() {
    lives = 3;
    document.querySelector(".gameOver .score").innerText == "0";
    document.querySelector(".lives").innerHTML = lives.toString();
    keepBaloonsFly = window.setInterval(function createBaloons() {
        var _a;
        let xCross = (Math.round(Math.random() * (1437)) + 0).toString();
        const img = document.createElement("img");
        img.setAttribute("src", "./images/baloon1.png");
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
        if (confirm("Ooh you lose buddy :( \nyou want to play again ?!") == true)
            playAgain();
    }
}
function playAgain() {
    document.querySelector(".lives").innerHTML = "0";
    setTimeout(startGame, 150);
}
startGame();
