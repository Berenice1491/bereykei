const alumnos = ["Joe", "Matias", "Pedro", "Laura", "Samantha"];
/*alumnos.forEach((alumno) => {
  console.log(alumno);
});*/

/*const nombresMayu = alumnos.map((alumno) => {
  return alumno.toUpperCase();
});
console.log(nombresMayu);*/

/*const nombreLargo = alumnos.filter((alumno) => {
  return alumno.length > 4;
});
console.log(nombreLargo);*/

/*const dondeta = alumnos.find((alumno) => {
  return alumno === "Samantha";
});
console.log(dondeta);*/

/*const larga = alumnos.some((alumno) => {
  return alumno.length > 6;
});
console.log(larga);*/

const masDe3 = alumnos.every((alumno) => {
  return alumno.length >= 3;
});
console.log(masDe3);
