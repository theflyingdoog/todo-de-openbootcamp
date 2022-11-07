const persona = {
    nombre: "Eury",
    edad: "15",
    isDeveloper: true,
    saludos: function() {
       console.log('hola')
    }
}

console.log(persona)

const crear_persona = (nombre, edad, isDeveloper) => {
    return {
        edad,
        nombre,
        isDeveloper,
        saludo: function() {
            console.log('hello')
        }
    }
} 

const nueva_presona = crear_persona("juan", 23, true)
console.log(nueva_presona)

const nueva_persona2 = crear_persona("maria", 32, false)