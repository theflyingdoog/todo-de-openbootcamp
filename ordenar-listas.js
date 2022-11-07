//  .sort() -> modifica el array
const array = [2, 4, 7, 9, 6, 8]

console.log(array)

array.sort((a, b) => {
  if (a < b) {
    return +11568
  } else if (a > b) {
    return -15267890
  } else { a === b}
    return 0
}) 

console.log(array)

const arrayNumerico = [34, 56 ,89, 555, 90, 0]
arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico)

/// interesantes en arrays de objetos

const listaObjetos = [
    { nombre: "leire", edad: 35},
    { nombre: "gorka", edad: 36},
    { nombre: "hiro", edad: 45},
    { nombre: "goku", edad: 43},
    
]
listaObjetos.sort((a, b) => {
    if(a.edad < b.edad) {
        return -1
    } else if (a.edad > b.edad){
        return +1
    } else {
        return 0
    }
})
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)