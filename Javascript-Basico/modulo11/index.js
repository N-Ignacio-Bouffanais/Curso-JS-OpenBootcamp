
class Estudiante {
    nombre = "Nicolas"
    asignaturas = ["HTML", "CSS", "JS"]

    ObtenDatos(){
        return {
            nombre : this.nombre,
            asignaturas : this.asignaturas
        }
    }
}

const Estudiante_1 = new Estudiante()

console.log(Estudiante_1.ObtenDatos())