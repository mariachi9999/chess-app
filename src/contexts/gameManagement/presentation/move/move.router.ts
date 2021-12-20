import express from "express";
import { DbUpdateWithMove } from "../../persistence/controllers/move/movePiece.controller";

export const moveRouter = express.Router();

// Player endpoints
// Add a player to database
moveRouter.post("/", DbUpdateWithMove);

// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
