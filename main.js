// alert("Bere, Kiki");
//const dni = "4867451";
//let edad = 18;

//edad = 19;
//console.log("Mi edad es " + edad);0

//const nombreDeUsuario = prompt("Ingrese su nombre.");
//alert("Hola, " + nombreDeUsuario);

-let dni = prompt("Ingrese su DNI");

while (dni.length < 7 || dni.length > 9) {
  alert("DNI inválido");
  dni = prompt("Ingrese su DNI");
}

let nombre = prompt("Ingrese su nombre");
while (
  nombre.length < 3 ||
  nombre.length > 35 ||
  nombre == "" ||
  !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)
) {
  alert("Nombre inválido");
  nombre = prompt("Ingrese su nombre");
}
let apellido = prompt("Ingrese su apellido");
while (
  apellido.length < 3 ||
  apellido.length > 20 ||
  apellido == "" ||
  !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)
) {
  alert("Apellido inválido");
  apellido = prompt("Ingrese su apellido");
}

let email = prompt("Ingrese su email");
while (email == "" || !email.includes("@") || !email.includes(".")) {
  alert("Email inválido");
  email = prompt("Ingrese su email");
}

let edad = prompt("Ingrese su edad");
while (
  isNaN(edad) ||
  !/^\d+$/.test(edad) ||
  edad == "" ||
  edad <= 17 ||
  edad > 101
) {
  alert("Edad inválida");
  edad = prompt("Ingrese su edad");
}
 
