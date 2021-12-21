import express from "express";
import Game from "../../../repository/entities/game/game";
import { GamesModel } from "../../models/gamesModel";

// POST endpoint
export const DbJoinGame = async (
  req: express.Request,
  res: express.Response
) => {
  let filter = { game_id: req.body.id };
  let black = { black: req.body.username };
  try {
    let gameUpdated = await GamesModel.findOneAndUpdate(filter, black, {
      new: true,
    });
    res.send(gameUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
