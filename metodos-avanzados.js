// trabajr con metods mas avanzados 
// .map() .filter() .reduce()

const array = ["sanjuan", "santdo domingo", "bani", "azua"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})

console.log(val)

const newArray = array.map(valor =>{
    return `1 - ${valor}`
})

console.log(newArray)


const listaObjetos = [
    { nombre: "leire", edad: 35},
    { nombre: "gorka", edad: 36},
    { nombre: "hiro", edad: 45},
    { nombre: "goku", edad: 43},
    
]
const personamayore0s = listaObjetos.filter(obj => {
    if (obj.edad > 40) {
        return true
    } else {
        return false
    }
})

const personamayores = listaObjetos.filter(obj => obj.edad >40)
console.log(personamayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "hiro")
console.log(nuevaLista)


const valores = [3, 5, 78, 90, 76]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
}) 
console.log(suma)
