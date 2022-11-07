// Listas, array o arreglo
const lista = [1, 'hola', true, undefined, null];
const lista2 = new Array(2, "hola",true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0"
const lista4 = [lista, lista2, lista3]; 

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// objetos 
const movil = {
    altura: 20,
    anchura: 78,
    marca: 'huawei',
    isWhite: false,
    contactos: ['goku','pablo','marcos','raul'],
    tarjeta: {
        marca: 'huawei',
        almacenamiento: 32
    },
    'altura-tarjeta': 4
}
movil.anyo = 2019;
movil.marca = 'huawei'

console.log(movil.marca)

// librerias de apoyo moment.js
// fechas 

const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10)  // utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date( 'march 22 1890')
console.log(fecha_cadena)

const fecha_valores = new Date(2022,0,15)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() +1 
const anyo = ahora.getFullYear()

console.log(dia,mes,anyo)