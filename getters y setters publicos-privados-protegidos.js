class Persona {
    // protected -> #
    // private -> solo se puede acceder desde dentro de la clase
    #nombe
    #edad

     // protected -> _
     // protected -> solo se puede acceder desde dentro de la clase y desde descendientes
     _isDeveloper = true
    constructor(nombre, edad,) {
        this.nombre = nombre
        this.edad = edad
     
    }
    saludos() {
        console.log(`hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
    obtenNombre() { /// Funcion getters -> Nos permite acceder ( de forma controlda) a algun atributo protegido
        return this.#nombe
    }
    #obtenEdad() {
        return this.#obtenEdad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.edad = nuevaedad
    }
}


const persona = new Persona("erick", 70)
//console.log(persona)
//console.log(persona.nombre)
persona.saludos(persona.obtenNombre())
console.log(persona._isDeveloper())


// getters -> metdos qu no permiten obtener atributos/ metodos publicos o privado o protegidos\
const edad = persona.getEdad()
console.log(edad)

// setters -> metodo que nos permite cambiar el valor de algunos de los atributos privados o protegidos
persona.setEdad(45)
console.log(persona.getEdad())