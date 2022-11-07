// bucles for y while

//i = i + 1 
//i += 1
//i++

// bucle for
for (let i = 0; i < 10; i = i + 3) {
    // esto es el bucle  
    console.log(i)
}

let lista = [1,4,6,8,9,21,56,87];
for (let i = 0; 1 < lista.length; i++) {
  console.log(lista[i] * 2)
}

// estructura for...of
for (let valor of lista ) {
    console.log(valor)
}

// estructura forEach
lista.forEach(valor =>{
    console.log(valor)
})

// estructura for..in
let persona = {
    nombre: "goku",
    apellido: "sosa",
    edad: 34,
    isDeveloper: true
}

let prop = "edad";
console.log(persona[prop])

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}