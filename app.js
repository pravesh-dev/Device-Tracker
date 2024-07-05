const express = require('express');
const app = express()

const http = require('http');
const path = require('path');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send('hey')
});

server.listen(3000)