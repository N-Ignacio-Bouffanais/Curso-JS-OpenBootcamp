let nombre = "Nicolas"
let apellido = "Bouffanais"


let estudiante = nombre.concat(" ", apellido)
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let largo = estudiante.length
console.log(largo)

console.log(estudiante.trim().length)



let primeraLetra = nombre[0]
console.log(primeraLetra)

let ultimaLetra = apellido[apellido.length - 1]
console.log(ultimaLetra)


let opcion1 = estudiante.includes("Nicolas")
console.log(opcion1)
let opcion2 = estudiante.startsWith("Nicolas")
console.log(opcion2)


