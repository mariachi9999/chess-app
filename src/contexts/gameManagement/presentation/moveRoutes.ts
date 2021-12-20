import express from "express";
import { movePiece } from "../persistence/controllers/move/movePieceController";

export const moveRouter = express.Router();

// Player endpoints
// Add a player to database
moveRouter.post("/", movePiece);

// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
