// inheritace - herencia
class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
    }

    saludos() {
        console.log(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    saludoDesarrollador() {

    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje

    }
    saludo() { /// override
        console.log(`hola soy un desarrollador de ${this._nombre}`)
    }
}

const nuevodev = new Desarrollador("eury", 16, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

// polimorfismo => varias formas