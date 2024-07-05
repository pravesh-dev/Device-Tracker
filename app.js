const express = require('express');
const app = express()

const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res)=>{
    res.send('hey')
});

server.listen(3000)