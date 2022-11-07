// como trabajar listas (arrays , arreglos ,vectores...)
let var1 = {id: false};
let array = [1, "hola", false, { id: 5}, null, undefined, var1];

console.log(array);

/// acceder a los valores de un array a traves de su posicion
/// array[indice] => 0, 1, 2, 3, 4 ,5
console.log.(array[0])
console.log.(array[1])
console.log.(array[2])
console.log.(array[3])

// metodos para introducir nuevos valores en nuestro arrays
// .push() . unshitft() => mutan el valor de nuuestros arrays

//valdres al final -> push
array .push("final", 45, 100, false)
console.log(array) 

// valores al principio  -> unshift
array.unshift("incio", 87, 99)
console.log(array);


const array2 = [1, 3, "hola", false]
// valor al final  -> pop
array2.pop()
console.log(array2)

//valores al principio -> shift
array2.shift()
console.log(array2)

//metodos para eliminar, modificar o agreguar nuestro array
// . splice(x. y . z)
const array3 = [1 ,2 ,3 ,4 ,5 ,6]

array3.splice(2, 1);
console.log(array3)
