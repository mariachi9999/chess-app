import express from "express";
import { gameRouter } from "../contexts/gameManagement/presentation/gameRoutes";
import { moveRouter } from "../contexts/gameManagement/presentation/moveRoutes";
import { playerRouter } from "../contexts/gameManagement/presentation/playerRoutes";
export const router = express.Router();

// router endpoints
router.use("/player", playerRouter);
router.use("/game", gameRouter);
router.use("/move", moveRouter);
