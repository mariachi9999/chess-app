import express from "express";
import { DbCreateGame } from "../../persistence/controllers/game/createGame.controller";
import { DbJoinGame } from "../../persistence/controllers/game/joinGame.controller";
import { DbFindGame } from "../../persistence/controllers/game/findGame.controller";
import { DbFindGameAndRestart } from "../../persistence/controllers/game/restartGame.controller";
export const gameRouter = express.Router();

gameRouter.post("/", DbCreateGame);
gameRouter.put("/join", DbJoinGame);
gameRouter.get("/", DbFindGame);
gameRouter.put("/restart", DbFindGameAndRestart);
