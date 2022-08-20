const next = require("next");
const ExpressManager = require("./manager/expressManager");
const ServerManager = require("./manager/serverManager");
const SocketManager = require("./manager/socketManager");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev, port });

const app = new ExpressManager(nextApp);
const serverManager = new ServerManager(app.getInstance());

/**
 *  Exporting the io object from the SocketManager class. 
 * Use this as the io instance in socket implementation

*/
const io = new SocketManager(serverManager.getInstance()).io;

nextApp.prepare().then(() => {
  serverManager.getInstance().listen(port, () => {
    console.log(`App running on port ${port}`);
  });
});

module.exports = { io };
