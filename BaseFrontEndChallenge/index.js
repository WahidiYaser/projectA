let images = []
let aHref = []

let containerDiv = document.querySelector(".container")

for (let i = 0; i < 6; i++) {
    images[i] = document.createElement("img")
    images[i].setAttribute("src", "./photos/photo" + i + ".jpeg")

    aHref[i] = document.createElement("a")
    aHref[i].setAttribute("href", "./photo"+i+".html")
    aHref[i].classList.add("photos")
    
    aHref[i].appendChild(images[i])
    containerDiv.appendChild(aHref[i])
}