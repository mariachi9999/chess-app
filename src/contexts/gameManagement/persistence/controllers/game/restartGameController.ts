import express from "express";
import Game from "../../../repository/game/game";
import { GamesModel } from "../../models/gamesModel";
import { findGame } from "../../utils/findGameFromDb";
import { restartGame } from "../../../repository/utils/restartGame";
import { GAME_RESTARTED } from "../../../repository/utils/constants/message";
import { responseMessage } from "../../../repository/utils/responseMessage";

// POST endpoint
export const restartGameController = async (
  req: express.Request,
  res: express.Response
) => {
  let game_id = req.body.game_id;
  let gameToRestart = await findGame(game_id);
  let gameRestarted = await restartGame(gameToRestart);
  try {
    res.send(responseMessage(GAME_RESTARTED, gameRestarted));
  } catch (error) {
    res.status(500).send(error);
  }
};
