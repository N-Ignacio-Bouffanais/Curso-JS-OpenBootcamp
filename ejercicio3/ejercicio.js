
let persona = {
    nombre: "Nicolas",
    edad: 22,
    isDeveloper: true
}

for (let prop in persona) {
    console.log(prop);
    console.log(persona[prop])
}