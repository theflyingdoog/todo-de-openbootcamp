// Funciones tipo flecha - funciones anonimas

const array = [2, 4, 5, 7, 8, 546, 8, 8]

const array_2 = array.map((valor) => valor *2)

console.log(array_2)

const dobleDelvalor = valor => valor * 2
////
console.log(doble(5))
console.log(dobleDelvalor(8))

const array3 = array.map(dobleDelvalor)

console.log(array3)

function doble(valor) {
    return valor * 2
}