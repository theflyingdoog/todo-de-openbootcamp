// Casos muy especificos - break, continue
let lista = [1 , 3, 5, 5, 4 ,6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    
    if (lista[i] === 3) {
        continue;
    }

    console.log(lista[i]);

    if (lista[i] > 5 ) {
        break;
    }
}

// cual es el ambito de un bucle
console.log(i)
console.log(k)