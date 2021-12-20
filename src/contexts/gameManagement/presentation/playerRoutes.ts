import express from "express";
import { addPlayerToDB } from "../persistence/controllers/player/addPlayerController";
import { getPlayersFromDB } from "../persistence/controllers/player/getPlayersController";
export const playerRouter = express.Router();

// Player endpoints
// Add a player to database
playerRouter.post("/add_player", addPlayerToDB);
// Get all players from database
playerRouter.get("/players", getPlayersFromDB);
