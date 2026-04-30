let resta1 = document.getElementById("resta1");
let resta2 = document.getElementById("resta2");
let suma1 = document.getElementById("suma1");
let suma2 = document.getElementById("suma2");
let compra1 = document.getElementById("compra1");
let compra2 = document.getElementById("compra2");
let unidad1 = document.getElementById("unidad1");
let unidad2 = document.getElementById("unidad 2");

let unidad1 = false;

resta1.addEventListener("click", () => {
  if (resta1.clicked == true) {
     unidad1.value = parseInt(unidad1.value) - 1;
  }
});

suma1.addEventListener("click", () => {
  if (suma1.clicked == true) {
    unidad1.value = parseInt(unidad1.value) + 1;
  }