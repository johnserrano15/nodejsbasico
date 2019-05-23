const fs = require('fs')
const ops = require('./src/fileops')

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, list) => {
      if (err) reject(err)

      resolve(list.split('\n'))
    })
  })
}

const writeFile = (path, value) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, value.join('\n'), (err, list) => {
      if (err) reject(err)

      resolve(true)
    })
  })
}

async function main () {
  try {
    const numbers = await readFile('./resources/number.txt')
    const newNumbers = ops.incrementValues(numbers)

    const names = await readFile('./resources/name.txt')
    const newNames = ops.callNames(names)

    const saveNumbers = await writeFile('./resources/numberNew.txt', newNumbers)
    const saveNames = await writeFile('./resources/nameNew.txt', newNames)
    
    console.log(saveNumbers)
    console.log(saveNames)
  } catch (err) {
    console.error(err)
  }
}

main()


