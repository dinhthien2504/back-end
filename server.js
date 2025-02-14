const http = require('http');//node.js

const hostname = 'localhost';

const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello word!');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});