const call = require('./src/call');

// call.greet('John Andrey')

// call.withPromise('John', 'Serrano')
// .then(n => console.log(n))

async function CallWithPromise() {
  try {
    const result = await call.withPromise('John', 'Serrano')
    console.log(result)
  } catch (error) {
    console.error(`Algo salio mal -> ${error}`)
  }
}

CallWithPromise()
