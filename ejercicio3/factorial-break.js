let factorial = 1
let numero = 10
while (true) {
    // factorial = numero * factorial; es otra forma de hacerlo
    factorial *= numero
    numero--
    if (numero === 1) break
}
console.log(factorial)