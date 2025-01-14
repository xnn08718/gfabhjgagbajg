const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let onlineCount = 0;

io.on('connection', (socket) => {
  onlineCount++;
  io.emit('online-count', onlineCount);

  socket.on('send-message', (msg) => {
    io.emit('receive-message', msg);
  });

  socket.on('disconnect', () => {
    onlineCount--;
    io.emit('online-count', onlineCount);
  });
});

app.use(express.static(__dirname + '/public'));

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});




