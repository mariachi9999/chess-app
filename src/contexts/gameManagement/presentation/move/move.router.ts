import express from "express";
import { responseToMove } from "../../persistence/controllers/move/responseToMove.controller";

export const moveRouter = express.Router();

moveRouter.put("/", responseToMove);
