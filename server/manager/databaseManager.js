const { default: mongoose } = require("mongoose");
const { promisify } = require("util");

class DatabaseManager {
  static connect() {
    const mongoConnection = promisify(mongoose.connect);
    return mongoConnection(process.env.MONGODB_URL);
  }
}

module.exports = DatabaseManager;
