    function loadFile(event) {
    /*var loadFile = function (event) {*/
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "column")
    let newH3 = document.createElement("h3")
    let newPara = document.createElement("p")
    var newImage = document.createElement('img')
    
    newH3.innerText = document.getElementById("p-header").value
    newPara.innerText = document.getElementById("p-description").value
    
    newImage.src = URL.createObjectURL(event.target.files[0]);

    newDiv.appendChild(newH3)
    newDiv.appendChild(newImage)
    newDiv.appendChild(newPara)

    document.body.querySelector(".container").appendChild(newDiv)
};


/*
function upload(){
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
  }
  */