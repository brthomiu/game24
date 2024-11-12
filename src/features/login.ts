import { Player } from "../types/player";
import { ClientConnection } from "../types/server";
import { logMessage } from "./utilities";

// Logging info
const logName = "SERVER MESSAGE - src/features/login.ts";

// Login Function
export const login = (req: Request) => {
  // Get player data from request
  const playerId = req.headers.get("playerId");
  const playerName = req.headers.get("playerId");

  // Declare the player object
  const newPlayerObject: Player = {
    playerId: "",
    playerName: "",
    playerCreationTime: "",
  };

  // Declare client connection object
  const newClientConnection: ClientConnection = {
    port: 0,
    playerId: "",
  };

  // Validate that the playerId from the request exists
  if (playerId && playerId.length > 0) {
    // Add the playerId to the player and connection objects
    newPlayerObject.playerId = playerId;
    newClientConnection.playerId = playerId;
  } else {
    // Log and return error if playerId is invalid
    logMessage(
      logName,
      "Login Failed",
      "playerId from client request is invalid"
    );
    return new Response("Login error - possible malformed playerId.", {
      status: 400,
    });
  }
  return;
};
