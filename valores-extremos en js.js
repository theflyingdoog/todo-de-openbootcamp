// operdor numerico  .valueOf() - obtener los valores numericos a partir de literales
let a = 3;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a .valueOf() + b.valueOf())

console.log(b .valueOf());

let str = new String("hola soy un string");
console.log(str);
console.log(str.valueOf());
// nan - infinity
let n = Number('adios');
console.log(n);
console.log(isNaN(n));


let numerador = 23;
let divisor = 0;

console.log(numerador / divisor);

// como convertir los strings a valores numericos con number, par5seint y paserfload
let numero = '5.78';
let num2 = 13.67;

console.log(typeof numero);
console.log(numero + num2); // error de concepto

console.log(Number(numero) + num2);

console.log(parseFloat(numero));
console.log(parseInt(numero));

// numeros hexadecimales (base 16)
let numHex = '0x3a5b7'
console.log(parseInt(numHex));

// obtener los valores minimo en Javascript
let min_precision = Number.EPSILON;
let max_valor_js = Number.MAX_VALUE;
let min_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);

