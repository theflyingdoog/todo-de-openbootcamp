// iterar los valores de una lista
const array = ["hola", 2,  5, 70, false, undefined]


// forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// forma ES6 (mas eficientes). forEach()
let suma = 0;
const arrayNums = [3, 4, 5, 77, 90, 88, 89]
arrayNums.forEach(valor => {
  if (valor === 90) {
    suma +=  valor;
    console.log(valor)
  }
})
   console.log(suma)
   
   // busqueda de un valor dentro de una lista . find()
   // quiero encontrar el elmento 90
   const variable = array.find(valor => {
       if (valor === 91) {
          return true
       }
   })

   console.log(variable)

   const listaObjetos = [
       { nombre: "leire", edad: 35},
       { nombre: "gorka", edad: 36},
       { nombre: "hiro", edad: 45},
       { nombre: "goku", edad: 43},
       
   ]
   
const objeto = listaObjetos.find(o =>{
    if (o.nombre === "hiro") {
        return true
    }
})

console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "hiro")
console.log(edad)