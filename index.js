const server = require('http').Server();
// const server = require('http').createServer(); // Otra forma de hacerlo
// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/#create-the-server
const io = require('socket.io')(server);
const port = require('./config').SERVER_PORT;

const banner = `
***********************
  Basic Node.js Course
    Course Project
  Tic Tac Toe Server
***********************
Status: Online
Listening: on port: ${port}
`;

io.on('connection', (socket) => {
  socket.on('register', user => {
    console.info(`User registed: ${user.name}`)
  })
})

server.listen(port, () => {
  console.info(banner);
});