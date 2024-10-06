import { Hono } from "hono";
import { ClientConnection } from "./types/network";
import { getUnusedPort } from "./features/utilities";

const app = new Hono();

// List of client connections
const pendingConnections: ClientConnection[] = [];
const connectedClients: ClientConnection[] = [];

// List of ports currently in use
const activePorts: number[] = [];
// First port to use (iterates up from there)
const startingPort = 7333;

// REST API for establishing connection to server
app.get("/", (c) => {
  const client = c.req.header("X-Forwarded-For");
  if (client) {
    let connection: ClientConnection = {
      port: getUnusedPort(startingPort, activePorts),
      userId: client,
    };
    pendingConnections.push(connection);
    return c.html(`
    <body>
      <h1>Big Server</h1>
      <p>Welcome, ${client}</p>
    </body>
  `);
  } else {
    return c.html(`
    <body>
      <h1>Big Server</h1>
      <p>Could not establish client address.</p>
    </body>
  `);
  }
});

export default {
  port: 3000,
  fetch: app.fetch,
};

// UDP Server
