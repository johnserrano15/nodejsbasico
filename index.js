const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const q = [
  'Cual es tu primer nombre? ',
  'Cual es tu primer apellido? ',
  'Cual es tu edad? '
];

const AskQuestion = (rl, question) => {
  return new Promise((resolve, rej) => {
    rl.question(question, answer => {
      resolve(answer)
    })
  })
}

const Ask = (questions) => {
  return new Promise(async resolve => {
    let results = [];
    for (let question of questions) {
      const result = await AskQuestion(rl, question);
      results = [...results, result];
    }
    rl.close();
    resolve(results);
  });
}

// (async function() {
//   const greeting = await Ask(q);
//   console.log(`Hola ${greeting[0]} ${greeting[1]}, tu edad es la siguiente ${greeting[2]}`)
// })()

Ask(q)
  .then(greeting => {
    console.log(`Hola ${greeting[0]}${greeting[1]}, tu edad es la siguiente: ${greeting[2]}`);
  })
