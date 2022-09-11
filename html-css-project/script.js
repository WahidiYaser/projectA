function loadFile(event) {
    /*var loadFile = function (event) {*/
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "column")
    var newH3 = document.createElement("h3")
    var newPara = document.createElement("p")
    var newImage = document.createElement('img')

    newH3.innerText = document.getElementById("p-header").value
    newPara.innerText = document.getElementById("p-description").value

    var newImageSrc = 0
    newImageSrc = URL.createObjectURL(event.target.files[0]);
    newImageSrc.onload = function () {
        URL.revokeObjectURL(newImageSrc.src) // free memory
        newImage.setAttribute("src", newImageSrc)
    }
    newDiv.appendChild(newH3)
    newDiv.appendChild(newImage)
    newDiv.appendChild(newPara)


    /* newDiv.document.style.dispalty = "hidden" */
};

function addThePhoto(x) {
    x.preventDefault()

    document.body.querySelector(".container").appendChild(newDiv)
}


















/*
function upload(){
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
  }
  */