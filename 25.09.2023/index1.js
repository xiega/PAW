const http = require('http');

const PORT = 3000;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(PORT, HOST, () => {
  console.log(`Server http://${HOST}:${PORT}/`);
});