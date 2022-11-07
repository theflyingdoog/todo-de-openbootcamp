// break y continue
// labels

let unidades = 0
let decenas = 0

 buclesDecenas: while (true) {
   buclesUnidades: while (true) {
    console.log("el elmento  actual es: ${decenas}${unidades}")
    unidades++;
    if (unidades === 10) {
      unidades = 0;
      break buclesUnidades
    }
  }
  decenas++;
  if (decenas === 2) {
    console.log("el numero actual es: ${decenas}${unidades}")
    break buclesDecenas
  }
}
