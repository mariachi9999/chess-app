import express from "express";
import { addGameToDB } from "../persistence/controllers/game/addGameController";
import { joinGame } from "../persistence/controllers/game/joinGameUpdateController";
import { getGame } from "../persistence/controllers/game/getGameController";
import { restartGameController } from "../persistence/controllers/game/restartGameController";
export const gameRouter = express.Router();

// Player endpoints
// Add a player to database
gameRouter.post("/create", addGameToDB);
gameRouter.post("/join", joinGame);
gameRouter.get("/get", getGame);
gameRouter.post("/restart", restartGameController);

// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
