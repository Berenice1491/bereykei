const boton = document.getElementById("boton");
let numeritos = document.getElementById("numeritos");
let contador = 0;

boton.addEventListener("click", () => {
  contador = contador + 1;
  numeritos.textContent = contador;
});
