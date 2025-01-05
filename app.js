const display = document.getElementById("display");
const img = document.getElementById("myhead");
const open = document.getElementById("open");
const close = document.getElementById("close");
const rizz = document.getElementById("rizz");

open.addEventListener("click", () => {
  img.src = "img/eyesopen.svg";
});
close.addEventListener("click", () => {
  img.src = "img/eyesclose.svg";
});
rizz.addEventListener("click", () => {
  if (img.src.includes("eyesopen.svg")) {
    img.src = "img/eyesrizz.svg";
  } else {
    alert("Ouvrir d'abord les yeux");
  }
});
function appendToDisplay(input) {
  display.value += input; //pour ajouter dans le donnee
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
