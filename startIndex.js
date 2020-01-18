//Starting server file

const http = require('http');

PORT = 5000;
hostname = '127.0.0.1'; //or hostname = 'localhost'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.getHeader('Content-Type', 'text/plain');
    res.end('hello');
});

server.listen(PORT, hostname, () => console.log(`server is running on : http://${hostname}:${PORT}`));

//Using Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(5000);