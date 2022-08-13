const fechaHoy = new Date()

console.log(fechaHoy)

const fechaNacimiento = new Date(1999,07,11)
console.log(fechaNacimiento)

const MasTarde = fechaHoy > fechaNacimiento
console.log(MasTarde)

//obtener mes, dia, anyo desde una fecha
const DiaNacimiento = fechaNacimiento.getDate()
console.log(DiaNacimiento)

const MesNacimiento = fechaNacimiento.getMonth() + 1
console.log(MesNacimiento)

const Year = fechaNacimiento.getFullYear()
console.log(Year)


//transformar fecha para que sea legible

const fechaLegible = fechaHoy.toLocaleDateString()
console.log(fechaLegible)
