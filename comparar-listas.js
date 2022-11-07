// como podemos comparar listas
// .every()
const array = [4, 7, 90 ,567, -67, -97, -454]

const resulta3do = array.every(valor => { // forma una poco mas ciomplicada de hacerlo pero igualmente funciona  // # la const tiene un 3 para que no tenga problema con la otra const
  if (valor > 0) {
    return true   
  } else {
    return false
  }
})

const resultado = array.every(valor => valor > 0) // <-  forma mas sencilla y facil de hacerlo ->

console.log(resultado)

/// comparacion de litas
const ar1 = [1, 4, 8, 9]
const ar2 = [3, 5, 7, 8]

console.log(ar1 === ar2)


const compararArrays = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))
const ar3 = [2, 6, 8, 9]

console.log(compararArrays(ar1, ar3))