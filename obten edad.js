const persona = {
    nombre: "eury",
    apellido: "sosa",
    edad: 15
}
console.log(persona)

function obtenerDobleedad(edad) {
    return 2 * edad
}

const dobleedad = obtenerDobleedad(persona.edad)
console.log(dobleedad)

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = 
        [...arrayNums, numero]
    }
    return arrayNums
}
const array = obtenArray(persona.edad)

console.log(array)