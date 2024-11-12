// import { ClientConnection } from "./types/network";
import { Server } from "bun";
import { logMessage } from "./features/utilities";
import { Player } from "./types/user";

// Logging info
const logName = "SERVER MESSAGE - src/server.ts";

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

    if (url.pathname === "/api/register") {

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

// // REST API for establishing connection to server
// app.get("/", (c) => {
//   const client = getConnInfo(c).remote.address;
//   if (client) {
//     let connection: ClientConnection = {
//       port: getUnusedPort(startingPort, activePorts),
//       userId: client,
//     };
//     pendingConnections.push(connection);
//     logMessage(
//       logName,
//       `Pending Connections:`,
//       JSON.stringify(pendingConnections)
//     );
//     activePorts.push(connection.port);
//     logMessage(
//       logName,
//       `${connection.userId} connected to port ${connection.port}`,
//       null
//     );

//     return c.html(`
//     <body>
//       <h1>Connected!</h1>
//       <p>Welcome, ${client}</p>
//     </body>
//   `);
//   } else {
//     logMessage(logName, "Could not establish connection to client.", null);

//     return c.html(`
//     <body>
//       <h1>Server Error</h1>
//       <p>Could not establish connection to client.</p>
//     </body>
//   `);
//   }
// });

// export default {
//   port: 3000,
//   fetch: app.fetch,
// };

// Server

// // Ping - Periodically checks connections with clients, upgrades pending clients, removes inactive clients
// setInterval(() => {
//   // logMessage(logName, "~ Ping ~", null);
// }, 3000);

// Tick - Constantly runs, executes server logic, returns data to clients
