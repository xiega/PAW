const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');


const PORT = 3000;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
});

server.listen(PORT, HOST, () => {
    console.log(`Server http://${HOST}:${PORT}/`);
});