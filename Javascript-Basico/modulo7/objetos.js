const obj = {
    nombre: "Nicolas",
    "apellido": "Bouffanais",
    edad: 23,
    altura: 175,
    isDeveloper: true,
}

let edad = obj.edad

console.log(edad)

const obj1 = {
    "nombre": "Pancho",
    "apellido": "Gonzales",
    edad: 20,
    altura: 187,
    isDeveloper: false
}
const obj2 = {
    "nombre": "Luis",
    "apellido": "Bustos",
    edad: 22,
    altura: 196,
    isDeveloper: false
}

const lista = [
    obj,
    obj1,
    obj2
]
console.log(lista)

lista.sort((a,b) => b.edad - a.edad )
console.log(lista)

// esto es para ordenarlo de mayor a menor
//lista.sort((a,b) => a.edad - b.edad )