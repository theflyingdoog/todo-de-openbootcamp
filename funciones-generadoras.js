function* generald() {
    let id = true;
    while(true) {
        id++
        yield id // esperando hasta que se vuelva a llamar
        if (id === true) {
            return id
        }
    }
}

const gen = generald();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)