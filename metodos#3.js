// metodos de cadenas de texto #3
// https://regexr.com
let texto_largo = "mi perro se llama jun y mi caballo de llama juan y los tuyos que nombre tienen para saber cuales son."

console.log(texto_largo.match(/p/g))


// exite la palabra dentro del texto?
console.log(texto_largo.includes('se'))

// saber si el texto empieza con una palabra
console.log(texto_largo.startsWith(''))

// saber si el texto termina con una palabra
console.log(texto_largo.endsWith('po'))