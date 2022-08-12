
let lista_super = ["pollo", "pate","chancho","almohada","cloro"]

console.log(lista_super)

lista_super.push("Aceite de Girasol");
console.log(lista_super)

// lista_super.splice(5,1);
lista_super.pop()
console.log(lista_super)

const FavoritesMovies = [
    pelicula1 = {
        titulo: "V de venganza",
        director: "James McTeigue",
        fecha: 2005
    },
    pelicula2 = {
        titulo: "El señor de los anillos, La comunidad del anillo",
        director: "Peter Jackson",
        fecha: 2001
    },
    pelicula3 = {
        titulo: "Gintama: The Final",
        director: "Chizuru Miyawaki",
        fecha: 2021
    }
]

// const peliculasNuevas = FavoritesMovies.filter( peliculas => {
//     if (peliculas.fecha > 2010 ){
//         return true
//     } else {
//         return false
//     }
// })
// lista con el filtro de las peliculas solo mas nuevas desde el 2010
const peliculasNuevas = FavoritesMovies.filter( movie => movie.fecha > 2010)

console.log(peliculasNuevas);


//lista con solo los directores de las peliculas
const directores = FavoritesMovies.map(obj => obj.director )
console.log(directores)

// lista con los titulos de las peliculas
const titulos = FavoritesMovies.map(tit => tit.titulo)
console.log(titulos)

const titulosDirectores1 = titulos.concat(directores)
console.log(titulosDirectores1)

const titulosDirectores2 = [...titulos, ...directores]
console.log(titulosDirectores2)