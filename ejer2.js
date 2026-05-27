/*const alumnos = [];
const boton = document.getElementById("boton");
const caja = document.getElementById("caja");
const boton2 = document.getElementById("botonmostrar");

boton.addEventListener("click", () => {
  if (caja.value != "") {
    agregarAlumno(caja.value);
  }
});
function agregarAlumno(nombre) {
  alumnos.push(nombre);
  console.log(nombre);
}
boton2.addEventListener("click", () => {
  mostrarAlumnos(0);
});

function mostrarAlumnos(indice) {
  for (let index = indice; index < alumnos.length; index++) {
    alert(alumnos[index]);
  }
}*/

const alumno = ["Carol", "lupito", "barbara", "jorge"];

/*function alumnitos() {
  console.log(alumno[0]);
  console.log(alumno[3]);
}
alumnitos();

console.log(alumno.length);

alumno[0] = "Pepa";
console.log(alumno);

function eliminar() {
  alumno.pop();
  alumno.shift();
}
eliminar();
console.log(alumno);

function agg() {
  alumno.unshift("Maria");
}
agg();
console.log(alumno);
function recorrido() {
  for (let index = 0; index < alumno.length; index++) {
    const alumni = alumno[index];
    alert(alumni);
  }
}
recorrido(); */

function esta() {
  console.log(alumno.includes("Carol"));
}
esta();

function donde() {
  console.log(alumno.indexOf("lupito"));
}
donde();
