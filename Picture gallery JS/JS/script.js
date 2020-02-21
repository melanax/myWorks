var imgGrid = document.querySelector("section");
var largeIMG = document.getElementById("largeIMG");
var imgALT = document.getElementById("imgALT");

imgGrid.addEventListener("click", function(e){
    console.log(e.target.alt);
    console.log(e.target.src);
    largeIMG.setAttribute("src", e.target.src);
    imgALT.innerHTML = e.target.alt;
})
