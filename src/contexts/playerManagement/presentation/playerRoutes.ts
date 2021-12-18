import express from "express";
import { addPlayerToDB } from "../repository/addPlayerController";
import { getPlayersFromDB } from "../repository/getPlayersController";
export const appRouter = express.Router();

// Player endpoints
// Add a player to database
appRouter.post("/add_player", addPlayerToDB);
// Get all players from database
appRouter.get("/players", getPlayersFromDB);
