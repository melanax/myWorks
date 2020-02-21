var userNumber = document.getElementById("userNumber");
var btn = document.getElementById("btn");
var progress = document.getElementById("bar");

btn.addEventListener("click", function(){
  var number = userNumber.value;
  progress.style.width = number + "%";
  if (number >= 0 && number <= 39 ) {
  progress.classList.add("bg-danger");
  progress.classList.remove("bg-info");
  progress.classList.remove("bg-success");
} else if (number >= 40 && number <= 69) {
  progress.classList.add("bg-info");
    progress.classList.remove("bg-danger");
    progress.classList.remove("bg-success");
} else {
  progress.classList.add("bg-success");
  progress.classList.remove("bg-info");
  progress.classList.remove("bg-danger");
}
})
