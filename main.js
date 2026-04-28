// alert("Bere, Kiki");
//const dni = "4867451";
//let edad = 18;

//edad = 19;
//console.log("Mi edad es " + edad);0

//const nombreDeUsuario = prompt("Ingrese su nombre.");
//alert("Hola, " + nombreDeUsuario);
const dni = prompt("Ingrese su DNI");
if (dni.length < 7 || dni.length > 9) {
  alert("DNI inválido");
} else {
  alert("DNI válido");
}

let nombre = prompt("Ingrese su nombre");
if (nombre.length < 3 || nombre.length > 35 || nombre == "") {
  alert("Nombre inválido");
} else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
  alert("Nombre inválido: solo se permiten letras");
}

let apellido = prompt("Ingrese su apellido");
if (apellido.length < 3 || apellido.length > 20 || apellido == "") {
  alert("Apellido inválido");
} else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
  alert("Apellido inválido: solo se permiten letras");
}

let email = prompt("Ingrese su email");
if (email == "") {
  alert("Email inválido");
} else if (!email.includes("@") || !email.includes(".")) {
  alert("Email inválido");
}

let edad = prompt("Ingrese su edad");
if (isNaN(edad) || !/^\d+$/.test(edad)) {
  alert("La edad debe contener solo números");
} else if (edad > 17 && edad <= 101) {
  alert("Edad válida");
} else if (edad <= 17 || edad > 101) {
  alert("Edad inválida");
}
