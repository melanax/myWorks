var img = document.querySelector("img");
var img1 = document.getElementById("img1");

var kaire = document.getElementById("kaire");
kaire.addEventListener("click", function () {
    img.setAttribute("class", "img-kair");
    img1.setAttribute("class", "img-nukel");
})

var desine = document.getElementById("desine");
desine.addEventListener("click", function () {
    img.setAttribute("class", "img-des");
    img1.setAttribute("class", "img-nukel");
})

var paslepti = document.getElementById("paslepti");
paslepti.addEventListener("click", function () {
    img.setAttribute("class", "img-pasl");
    img1.setAttribute("class", "img-nukel");
})

var nukelti = document.getElementById("nukelti");
nukelti.addEventListener("click", function () {
    img.setAttribute("class", "img-nukel");
    img1.setAttribute("class", "img-see");
})

var atstatyti = document.getElementById("atstatyti");
atstatyti.addEventListener("click", function () {
    img.setAttribute("class", "img-ats");
    img1.setAttribute("class", "img-nukel");
})
