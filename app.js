const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;//pour ajouter dans le donnee
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
