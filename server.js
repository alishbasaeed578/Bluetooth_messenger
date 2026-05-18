const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();

const server = http.createServer(app);

const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {

    console.log('User connected');

    socket.on('message', (data) => {

        socket.broadcast.emit('message', data);
    });

    socket.on('file', (data) => {

        socket.broadcast.emit('file', data);
    });
});

server.listen(3000, () => {

    console.log('Server running on port 3000');
});