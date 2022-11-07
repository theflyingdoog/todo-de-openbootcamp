class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper

    }

    saludos() {
        console.log(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Eury", 23, true)
console.log(nueva_persona)
nueva_persona.saludos()

let numero = 60 // inicializar
let persona_2 = new Persona("maria", 23, false) // instanciar
console.log(persona_2 instanceof Persona)


/// instanceof -> parecido a typeof pero para clases