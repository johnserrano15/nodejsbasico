const greet = require('./src/greet')

greet.emit('clap') //Hacer llamado al evento sin argumento
greet.emit('greet', 'CC') //Hacer llamado al evento, con un argumento

greet.emit('call', 'Carlos Castañeda', (name) => { //Llamado a evento con función Callback
  console.log(`Hi! ${name}`)
})

/* ------------------------- */

const db = require('./src/db')
const objDb = new db('plazti', 'test', 'itzalp')

objDb.on('status', status => {
  console.log(`Estado de Base Datos: ${status}`)

  if (status === 'open') {
    const data = objDb.getTable('students')
    console.log('Datos de la tabla Student:\n', data)
    objDb.close()
  }
})

objDb.on('getTable', tableName => {
  console.log(`Consultando la tabla ${tableName}`)
})

objDb.open()