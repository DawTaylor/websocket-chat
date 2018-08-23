const express = require('express');
const { Server } = require('http');
const socket = require('socket.io');

const port = process.env.PORT || 5000;
const app = express();
const server = Server(app);
const io = socket(server);

let messages = [];

io.on('connection', (socket) => {
  socket.join('tech-talks', () => {
    socket.emit('update', messages)
    socket.on('message', (msg) => {
      socket.emit('ack', true);
      messages = [...messages, { id: socket.id, ...msg }];
      io.in('tech-talks').emit('update', messages);
    });
  });
});


server.listen(port, () => console.log(`Server listening on :${port}`))