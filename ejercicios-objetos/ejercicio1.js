const persona = {
  nombre: "Emma Harrigan",
  edad: 25,
  activo: "Estudia",
  hobbies: ["Correr", "dibujar", "Leer", "Hacer manualidades"],
  direccion: {
    calle: "Av Flores",
    ciudad: "Nashville",
    codigoPostal: "F34085",
  },
  idiomas: ["Ingles", "Español", "Italiano", "Portugues"],
  notas: [8, 9, 9, 10, 7, 10],
  contacto: {
    email: "emmaharrigan730@gmail.com",
    telefono: 101 - 76 - 456789,
    redesSociales: ["ig:EmmaSolis98", "x:Emmh367", "tiktok:Harrigan247"],
  },
  experiencias: [
    {
      lugar: "Universidad de Tennessee",
      rol: "Estudiante de Profesorado de Ed.Fisica",
      anios: 3,
    },
    {
      lugar: "Conservatorio Frant Listz",
      rol: "Estudiante de Bellas Artes",
      anios: 5,
    },
    {
      lugar: "Restaurante Los Hermanos",
      rol: "Mesera",
      anios: 4,
    },
  ],
  mascotas: [
    {
      nombre: "Mochi",
      especie: "Gato",
      edad: 2,
    },
    {
      nombre: "Tobi",
      especie: "Perro",
      edad: 12,
    },
  ],
};

//nombre y edad de la persona
console.log(persona.nombre);
console.log(persona.edad);
//la ciudad donde vive
console.log(persona.direccion.ciudad);
//el segundo hobby de la lista
console.log(persona.hobbies[1]);
//el nombre y especie de la primera mascota
console.log(persona.mascotas[0].nombre);
console.log(persona.mascotas[0].especie);
//todos los lugares donde trabajo o estudio
console.log(persona.experiencias[0].lugar);
console.log(persona.experiencias[1].lugar);
console.log(persona.experiencias[2].lugar);
//la cantidad total de experiencias
console.log(persona.experiencias.length);
//agregar un hobby y mostrar
persona.hobbies.push("cocinar");
console.log(persona.hobbies[4]);
