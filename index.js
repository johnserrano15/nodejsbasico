const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  fs.readFile('./resources/my_page.html', (err, content) => {
    if (err) { console.error(err); return; }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content, 'utf-8');
  })
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Otra forma de crear un server basic
/* http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('Hello World!')
  res.end()
}).listen(8080) */
