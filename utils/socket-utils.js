
const http = require('http');
const socketIO = require('socket.io');

let io;

function initializeSocket(server) {
  io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('A user connected');



    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
}

module.exports = {
  initializeSocket,
  getSocket: () => io,
};
