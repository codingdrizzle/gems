const express = require("express");

class ExpressManager {
  constructor(nextApp) {
    this.instance = express();
    this.instance.use(express.json());
    this.instance.use(express.urlencoded());
    this.instance.use(nextApp.getRequestHandler());
  }
  getInstance() {
    return this.instance;
  }
}

module.exports = ExpressManager;
