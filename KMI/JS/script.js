var button = document.getElementById("button");
var kmi = document.getElementById("kmi");

button.addEventListener("click", function (e) {
    e.preventDefault();
    var ugis = document.getElementById("height").value;
    var svoris = document.getElementById("weight").value;
    var result = ((svoris / Math.pow(ugis, 2)) * 10000).toFixed(2);

    if (ugis <= 0 || svoris <= 10) {
        kmi.textContent = "Klaida"
    } else {
        kmi.textContent = "Jūsų KMI: " + result;
    }
})
