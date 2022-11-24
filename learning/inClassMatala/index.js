let btnPhone = document.querySelector("#phone")
let btnLaptop = document.querySelector("#laptop")
let btnPlaystation = document.querySelector("#playstation")

let loadImgBtn = document.querySelector("#loadImgBtn")

btnPhone.addEventListener("click", ()=>{
    document.querySelector(".phone").style.display = "flex"
    document.querySelector(".laptop").style.display = "none"
    document.querySelector(".playstation").style.display = "none"
})
btnLaptop.addEventListener("click", ()=>{
    document.querySelector(".laptop").style.display = "flex"
    document.querySelector(".phone").style.display = "none"
    document.querySelector(".playstation").style.display = "none"
})
btnPlaystation.addEventListener("click", ()=>{
    document.querySelector(".playstation").style.display = "flex"
    document.querySelector(".laptop").style.display = "none"
    document.querySelector(".phone").style.display = "none"
})


loadImgBtn.addEventListener("click", (e)=>{
e.preventDefault()
let src = document.getElementById("loadImg")

let phoneDiv = document.querySelector(".phone")
let laptopDiv = document.querySelector(".laptop")
let playstationDiv = document.querySelector(".playstation")

let img = document.createElement("img")
img.setAttribute("src", src.value)

if(phoneDiv.style.display == "flex")
phoneDiv.appendChild(img)
else if(laptopDiv.style.display == "flex")
laptopDiv.appendChild(img)
else if(playstationDiv.style.display == "flex")
playstationDiv.appendChild(img)

})