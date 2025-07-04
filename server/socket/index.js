export default function socketConnection(io) {
  io.on('connection', (socket) => {
    console.log(`[Socket Connected] ID: ${socket.id}`);

    socket.on('join', (username) => {
      socket.broadcast.emit('message', {
        user: 'system',
        text: `${username} joined the chat.`,
      });
    });

    socket.on('sendMessage', (data) => {
      io.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log(`[Socket Disconnected] ID: ${socket.id}`);
    });
  });
}
