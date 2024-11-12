// import { ClientConnection } from "./types/network";
import { Server } from "bun";
import { logMessage } from "./features/utilities";
import { ClientConnection } from "./types/server";
import { login } from "./features/login";

// Logging info
const logName = "SERVER MESSAGE - src/server.ts";

// List of client connections
const pendingConnections: ClientConnection[] = [];
const connectedClients: ClientConnection[] = [];

// First port to use (iterates up from there)
let startingPort = 7333;

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
      login(req)
    }
  },
  // Websocket handlers
  websocket: {
    message(ws, message) {}, // a message is received
    open(ws) {}, // a socket is opened
    close(ws, code, message) {}, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  },
});

// // Ping - Periodically checks connections with clients, upgrades pending clients, removes inactive clients
// setInterval(() => {
//   // logMessage(logName, "~ Ping ~", null);
// }, 3000);

// Tick - Constantly runs, executes server logic, returns data to clients
