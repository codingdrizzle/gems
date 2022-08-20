const next = require("next");
const ExpressManager = require("./manager/expressManager");
const ServerManager = require("./manager/serverManager.js");
const SocketManager = require("./manager/socketManager.js");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";

const nextApp = next({ dev });

const app = new ExpressManager(nextApp);
const serverManager = new ServerManager(app.getInstance());

/**
 *  Exporting the io object from the SocketManager class. 
 * Use this as the io instance in socket implementation

*/
const io = new SocketManager(serverManager.getInstance()).io;

nextApp.prepare().then(() => {
  serverManager.getInstance().listen({
    port,
    callBack: () => {
      console.log(`App listening on port http://localhost:${port}`);
    },
  });
});

module.exports = { io };
