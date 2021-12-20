import express from "express";
import { gameRouter } from "./game/game.router";
import { moveRouter } from "./move/move.router";
import { playerRouter } from "./player/player.router";
export const router = express.Router();

// router endpoints
router.use("/player", playerRouter);
router.use("/game", gameRouter);
router.use("/move", moveRouter);
