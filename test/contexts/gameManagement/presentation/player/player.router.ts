import express from "express";
import { DbCreatePlayer } from "../../persistence/controllers/player/createPlayer.controller";
import { DbReturnAllPlayers } from "../../persistence/controllers/player/findAllPlayers.controller";
export const playerRouter = express.Router();

playerRouter.post("/", DbCreatePlayer);
playerRouter.get("/", DbReturnAllPlayers);
