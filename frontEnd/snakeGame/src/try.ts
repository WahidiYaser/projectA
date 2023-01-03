function Board() {
    for (let i = 1; i < 1977; i++) {
        let div = document.createElement("div")
        div.classList.add("boardDiv", `${i}`);
        div.innerText = `${i}`;
        document.querySelector("body")!.appendChild(div);
    }
    //37 col, 51 rows
}

Board();