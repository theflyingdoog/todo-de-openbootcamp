// que son la funciones, cmo se declaran y como se utilizan
const nom = "miguel"

//saludar("miguel")

// saludar ()
saludar(nom)

function saludar(nombre) {
    console.log(`hola ${nombre}`)
}

/////

let nombre_2 = "juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    console.log(`adios ${nombre}`)
}

////

let apellido = {nombre: "juan", apellido: "gonzales"}

console.log(apellido)

function saludarapellido(objeto) {
    console.log(`hola ${objeto.nombre} ${objeto.apellido}`)
}



///// 

function inprimeNumero(numero = 7) {
    console.log(numero)
}

inprimeNumero()


////



function inprimir(... parametros) {
    console.log(parametros) 
}

inprimir(1, 3, 54, 5, "hola", { id: 9})

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma (1, 3, 4, 6, 3, 45)

console.log(s)

////

function multiplicar(a= 0, b= 0) {
    return a * b
}

console.log(multiplicar(4, 9))