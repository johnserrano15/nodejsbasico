const call = require('./src/call');

// console.log(call.sync('John Serrano'));
// call.withCallback('John Serrano', call.sync)

// console.log(call.withPromise('John Serrano'));
call.withPromise('John Andrey')
  .then( name => console.log(name))