const { Server } = require("socket.io");

class SocketManager {
  constructor(httpServer) {
    this.io = new Server(httpServer);
    this.io.on("connection", (socket) => {
      console.log(`${socket.id} is connected`);
    });

    this.io.on("disconnection", (socket) => {
      console.log(`${socket.id} is disconnected`);
    });
  }
}

module.exports = SocketManager;
