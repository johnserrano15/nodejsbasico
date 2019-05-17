const math = require('./math')
const greet = require('./greetings')
const hello = require('./greetings/hello')
const sum = require('./greetings/sum')

const util = require('./greetings/util')

const msg = require('./greetings/export-test')

console.log(math.add(4, 50))
console.log(math.divide(4, 50))
console.log(math.multiply(4, 50))
console.log(math.substract(4, 50))

console.log(greet.greet('John Serrano'))

console.log(hello.sayHello('John Andrey'))

console.log(sum())

console.log('The result of multiplication is ->', util.multiply(5, 2))
console.log('The result of sum is ->', util.sum(10, 20))
console.log(`My name is ${util.name}`)

console.log(msg.message)

// More examples https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
