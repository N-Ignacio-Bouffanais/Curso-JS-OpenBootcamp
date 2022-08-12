let nombre = "Nicolas"
let apellido = "Bouffanais"


//let estudiante = `${nombre} ${apellido}`
let estudiante = nombre.concat(' ', apellido);
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

let largo = estudiante.length
console.log(largo) 

console.log(estudiante.trim().length)

/* 
let estudiante_sin_espacios = estudiante.replaces(/ /g, "")
console.log(estudiante_sin_espacios)
*/

let primeraLetra = nombre[0]
console.log(primeraLetra)

let ultimaLetra = apellido[apellido.length - 1]
console.log(ultimaLetra)

// ver si estudiante incluye el nombre

let opcion1 = estudiante.includes("Nicolas")
console.log(opcion1)
let opcion2 = estudiante.startsWith("Nicolas")
console.log(opcion2)

