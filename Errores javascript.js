const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val 

    }
    throw new Error("el valor debe de ser tipo numero")
}

const numero = 0;

try {
  /// el codigo que puede fallar
  console.log("esta ejecuntando de manera correta")
  const doble = miFuncion(numero)
  console.log(doble)
}catch (e) {
    /// en caso de fallar, quiero que ejecutes
    console.error(`el valor de e ese: ${e}`)
   console.error("ERROR!")
} finally {
    console.log("se va a ejecutare tanto si da error , como si no existe ninguno")
}

//InternaleError, SyntaxError, TypeError, RangeError y ReferenceError