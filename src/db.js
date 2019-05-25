const Events = require('events');
class MyEventEmitter extends Events {}
const myEmitter = new MyEventEmitter();

class Db {
  constructor(dbName, user, pass) {
    this.db = dbName
    this.user = user
    this.pass = pass
  }

  open() {
    myEmitter.emit('status', 'opening')
    setTimeout(
      function () {
        myEmitter.emit('status', 'open')
      }, 3000)
  }

  close() {
    myEmitter.emit('status', 'close')
  }

  getTable(tableName) {
    myEmitter.emit('getTable', tableName)
    const data = [{
        name: 'Francisco',
        lastName: 'Peñalo'
      },
      {
        name: 'Emir',
        lastName: 'Salazar'
      },
      {
        name: 'Juan',
        lastName: 'Perez'
      }
    ]

    return data
  }

  on(type, params) {
    myEmitter.on(type, params)
  }
}

module.exports = Db
