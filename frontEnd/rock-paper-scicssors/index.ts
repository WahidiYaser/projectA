let choises:any = [];
let turn = true;
choises[0] = ["rock", "./pics/rock.png"];
choises[1] = ["paper", "./pics/paper.png"];
choises[2] = ["scicssors", "./pics/scicssors.png"];
let playerClick = document.body.querySelectorAll("area");
playerClick.forEach(c => c.addEventListener("click", playerTurn));

function startGame(){
    
}

function playerTurn(this: any, e:Event){
    e.preventDefault();
    if(turn){
    let temp:any = "";
    temp = choises.find((a: any)=> {
        if(a[0] == this.className)
        return a;
    })
    if(document.querySelector(".player img") == null){
    let img = document.createElement("img");
    img.setAttribute("src", temp[1]);
    document.querySelector(".player")!.appendChild(img);
    }
    else{
        document.querySelector(".player img")?.setAttribute("src", temp[1]);
    }
    turn = false;
    computerTurn();
    }
}
function computerTurn(){
    if(!turn){
    const random = Math.round(Math.random() * 2) + 0;
    let temp:any = "";
    temp = choises[random][1]
    if(document.querySelector(".computer img") == null){
    let img = document.createElement("img");
    img.setAttribute("src", temp);
    document.querySelector(".computer")!.appendChild(img);
    }else{
        document.querySelector(".computer img")?.setAttribute("src", temp);
    }
    turn = true
}
    checkWin()
}

function checkWin(){

}