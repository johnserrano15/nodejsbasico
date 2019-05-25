// const err = require('fs');
const err = require('./src/errors');

try {
  err.standardErr.range();
} catch (error) {
  console.log('Ha ocurrido un error -> ', error)
}

console.log('Hello world')
