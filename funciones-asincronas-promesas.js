// fuinciones asincronas

function miAsins () {
    // hacer una llmada a una base de datos
    // puede darnos algun erorr
}

const miPromesa = new Promise((resolve, reject) =>{
      const i = Math.floor(Math.random() * 2)
   // si esta tdo correcto
   if (i !== 0){
    resolve() 
   } else {
     reject()
   }
   
})

miPromesa
  .then(() => console.log("se ejecuto de forma correcta"))
  .catch(() => console.log("EROOR"))
   .finally(() => console.log("yo me ejecuto siempe"))

// async await