import express from "express";
import { PlayerModel } from "../../../Database/models/playerModel";
import { addPlayerToDB } from "../controllers/player/addPlayerController";
import { getPlayersFromDB } from "../controllers/player/getPlayersController";
export const router = express.Router();

// Player endpoints
// Add a player to database
router.post("/add_player", addPlayerToDB);
// Get all players from database
router.get("/players", getPlayersFromDB);
