function loadFile(event) {
    /*var loadFile = function (event) {*/
    const newImage = document.createElement("img")
    newImage = URL.createObjectURL(event.target.files[0]);
};

let form = document.getElementById("add-photo")
form.addEventListener("submit", addThePhoto)  

 function addThePhoto() {
   //x.preventDefault() 
   const newDiv = document.createElement("div")
   newDiv.setAttribute("class", "column")
   const newH3 = document.createElement("h3")
   const newPara = document.createElement("p")

   newH3.innerText = document.getElementById("p-header").value
   newPara.innerText = document.getElementById("p-description").value

   newDiv.appendChild(newH3)
   newDiv.appendChild(newImage(target.files[0]))
   newDiv.appendChild(newPara)
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