const { createServer } = require("http");
class ServerManager {
  constructor(expressApp) {
    this.instance = createServer(expressApp);
  }
  getInstance() {
    return this.instance;
  }
}

module.exports = ServerManager;
