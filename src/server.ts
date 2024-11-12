// import { ClientConnection } from "./types/network";
import { Server } from "bun";
import { logMessage } from "./features/utilities";
import { Player } from "./types/player";

// Logging info
const logName = "SERVER MESSAGE - src/server.ts";

// Login Function

// Create HTTP server & routes
const server = Bun.serve({
  fetch(req: Request, server: Server) {
    // Upgrade connection to websocket
    if (server.upgrade(req)) {
      logMessage(logName, "Websocket Upgrade", "Upgrade request validated.");
      return; // do not return a Response
    }

    // HTTP Routes
    const url = new URL(req.url);
    if (url.pathname === "/api/login") {

    };

  },
  // Websocket handlers
  websocket: {
    message(ws, message) {}, // a message is received
    open(ws) {}, // a socket is opened
    close(ws, code, message) {}, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  },
});

// // List of client connections
// const pendingConnections: ClientConnection[] = [];
// const connectedClients: ClientConnection[] = [];

// // List of ports currently in use
// const activePorts: number[] = [];
// // First port to use (iterates up from there)
// const startingPort = 7333;

// // Ping - Periodically checks connections with clients, upgrades pending clients, removes inactive clients
// setInterval(() => {
//   // logMessage(logName, "~ Ping ~", null);
// }, 3000);

// Tick - Constantly runs, executes server logic, returns data to clients
