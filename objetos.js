// trabajado con Objetos
const obj = {
    id: 8,
    nombre: "juan",
    apellido: "sosa",
    isDeveloper: true,
    libro_favorito: ["el perro loco", "loco pobre", "perra de la calle", "sin ti"]
}

console.log(obj.id)

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2)

obj2.nombre = "inon"
console.log(obj2.nombre)

console.log(obj.nombre)

let val1 = 4
let val2 = val1
val2 = 6
console.log(val1)
console.log(val2)

////////////

const obj3 =  { ...obj}

console.log(obj.nombre)
console.log(obj3.nombre)

obj.nombre = "gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

/////////////
// como ordenar listas de objetos en funcion de una propiedad

const  Listapeliculas = [
    { titulo: "lo que el vinedo dice", anyo: 1839},
    { titulo: "loabes", anyo: 2082},
    { titulo: "eo dice", anyo: 1349},
    { titulo: "lbes", anyo: 20892}
]

console.log(Listapeliculas)
// .sort() -> muta el valor del original

Listapeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(Listapeliculas)