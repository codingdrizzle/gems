const express = require("express");
const cors = require('cors')

class ExpressManager {
  constructor(nextApp) {
    this.instance = express();
    this.instance.use(cors());
    this.instance.use(express.json());
    this.instance.use(express.urlencoded());
    this.instance.use(nextApp.getRequestHandler());
  }
  getInstance() {
    return this.instance;
  }
}

module.exports = ExpressManager;
