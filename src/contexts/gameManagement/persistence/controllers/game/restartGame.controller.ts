import express from "express";
import { findGame } from "../../services/findGameFromDb";
import { restartGame } from "../../../repository/services/restartGame";
import { GAME_RESTARTED } from "../../../repository/constants/message";
import { responseMessage } from "../../../repository/services/responseMessage";

// POST endpoint
export const DbFindGameAndRestart = async (
  req: express.Request,
  res: express.Response
) => {
  let game_id = req.body.game_id;
  let gameToRestart = await findGame(game_id);
  let gameRestarted = await restartGame(gameToRestart);
  try {
    res.status(201).send(responseMessage(GAME_RESTARTED, gameRestarted));
  } catch (error) {
    res.status(500).send(error);
  }
};
