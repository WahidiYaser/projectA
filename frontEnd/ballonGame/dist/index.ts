let lives = 3;
let score = 0;
let keepBaloonsFly = 0;
let reset = (document.body.querySelector("#reset")as HTMLButtonElement);
reset.addEventListener("click", playAgain);

function startGame() {
    lives = 3;
    (document.querySelector(".gameOver .score")as HTMLSpanElement).innerText == "0";
    document.querySelector(".lives")!.innerHTML = lives.toString();
    keepBaloonsFly = window.setInterval(function createBaloons() {
        let xCross = (Math.round(Math.random() * (1437)) + 0).toString();
        const img = document.createElement("img");
        img.setAttribute("src", "../images/baloon1.png");
        img.setAttribute("class", "baloons");
        img.setAttribute("draggable", "false");
        img.style.left = `${xCross}px`;
        document.querySelector("#backgroundImg")?.append(img);

        let baloons = document.querySelectorAll(".baloons");
        baloons.forEach(b => {
            b.addEventListener("click", removeBaloon)
        })

        baloons.forEach(b => {
            b.addEventListener("animationend", checkIfBaloonPassed)
        })
    }, 2500);
}

function removeBaloon(e: Event) {
    let baloon = (e.target!) as HTMLImageElement;
    let popSound = document.querySelector("#popSound") as HTMLAudioElement;
    popSound.play();
    score++;
    (document.querySelector(".gameOver .score")as HTMLSpanElement).innerText = score.toString();
    document.querySelector("#backgroundImg")!.removeChild(baloon);
}

function checkIfBaloonPassed(e: Event) {
    let baloon = (e.target!) as HTMLImageElement;
    document.querySelector("#backgroundImg")!.removeChild(baloon);
    lives--;
    document.querySelector(".lives")!.innerHTML = lives.toString();
    if (lives <= 0) {
        window.clearInterval(keepBaloonsFly);
        (document.querySelector(".gameOver")as HTMLDivElement).style.display = "flex";
    }
}

function playAgain() {
    (document.querySelector(".gameOver")as HTMLDivElement).style.display = "none";
    document.querySelector(".lives")!.innerHTML = "3";
    setTimeout(startGame, 150);
}

startGame();