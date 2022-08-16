// Function arroja true

function verdadero(){
    return true
}
console.log(verdadero())

// Function timeout async, promesa.

let saludo = ""

function hello(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            saludo = "hola, soy una promesa"
            resolve();
        }, 5000);
    })
}
function synchronize(){
    console.log('1. empieza')
    hello().then(()=> console.log('2', saludo));
    console.log('3. termina')
}

synchronize();


// Funcion generadora

function* GeneradorID(){
    let id = 0;
    while(true){
        id +=2
        yield id
        if(id === 10){
            return
        }
        yield id // esperando a que se vuelva a llamar
    }
}

const gen = GeneradorID()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)