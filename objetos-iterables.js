///  .some()
const array = [3, 7, 8, 98, 90, 678, 890, -5]

const res = array.some(valor => valor < -0)

console.log(res)

const existe = array.some(valor => valor === 9)

console.log(existe)

const listaObjetos = [
    { nombre: "leire", edad: 35},
    { nombre: "gorka", edad: 36},
    { nombre: "hiro", edad: 45},
    { nombre: "goku", edad: 43},
]

const existegorka = listaObjetos.some(persona => persona.nombre === "gorka")

console.log(existegorka)

/// como obtener una lista a partir de un objeto iterable
const str = "hola gorka"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 4, "hola", 5])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)


const ar_keys = Array.from(keys)
console.log(ar_keys)