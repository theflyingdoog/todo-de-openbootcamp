//  sets o conjuntos ( en castellano)
const array = [2, 4, 5, 6, 7, 8, 09, "hola", { id: 5}, { id: 5}]

console.log({ id:5} === { id:5})

const miSet = new Set(array)

console.log(array)
console.log(miSet)


miSet.add(9)
console.log(miSet)
miSet.add(7)
console.log(miSet)

// .delate()

miSet.delete("hola")
console.log(miSet)

// .clear
miSet.clear()
console.log(miSet)

// .has()
console.log(array.includes(2))
console.log(miSet.has(30))

// .size
console.log(miSet.size)

miSet.forEach(valor => {
   console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet]
console.log(ar_miSet)
