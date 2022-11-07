//  como unir dos listas .concat(lista2)

const Lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]

console.log(Lista1.concat(lista2))
console.log(Lista1)

const lista3 = Lista1.concat(lista2)
console.log(lista3)


// como unir dos liatas con el factor de propagacion
console.log(...lista3)

const lista4 = [...Lista1, ...lista2]
console.log(lista4)

// Error!! mal entendido el concepto del factor de propagacion
const lista5 =[Lista1, lista2]
console.log(lista5)