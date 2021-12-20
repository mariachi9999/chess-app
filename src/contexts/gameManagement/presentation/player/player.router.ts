import express from "express";
import { DbCreatePlayer } from "../../persistence/controllers/player/createPlayer.controller";
import { DbReturnAllPlayers } from "../../persistence/controllers/player/findAllPlayers.controller";
export const playerRouter = express.Router();

// Player endpoints
// Add a player to database
playerRouter.post("/create", DbCreatePlayer);
// Get all players from database
playerRouter.get("/players", DbReturnAllPlayers);
