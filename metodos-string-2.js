// metodos de cadenas de texto #2
let input = "escorpio"
let db = 'Escorpio'

// tolowercase() - touppercase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())


// formas de concatenar de caracteres
let str_1 = "hola soy la primera."
let str_2 = " hola soy la segunda"

console.log(str_1.concat(str_2))
console.log(str_1 + "" + str_2)

// eliminar los espacios
let str_3 = "h ol aa a a"
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// obtener el caracteer que hay en cierta posicion
let str_4 = "hola hola hola "

console.log(str_4.charAt(5))
console.log(str_4[5])