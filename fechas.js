// treabajndo con fecha
const fecha = new Date()

console.log(fecha)


// atencion - los meses empiezan en 0
const fecha2 = new Date(1945, 13, 09, 1, 2, 45, 198)

console.log(fecha2)

const fecha3 = new Date(1000000000000000)
console.log(fecha3)

const fecha4 = new Date("october 13, 1959, 12:12:34:67")
console.log(fecha4)

console.log( fecha < fecha4)

const fecha5 = new Date(1945, 13, 09, 1, 2, 45, 198)
console.log(fecha5)

console.log(fecha2 === fecha5) // Error - no se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) ///  ok esta es la forma de comparar la igualdad entre fechas


////////// Obtener el dia, el mes y el año de una fecha
// obtener el dia
console.log(fecha2.getDate())

// obtener el ano
console.log(fecha2.getFullYear())

console.log(fecha2)

/// .tolocaldatestrings
console.log(fecha2.toDateString())