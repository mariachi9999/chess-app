import express from "express";
import Game from "../../../repository/entities/game/game";
import { GamesModel } from "../../models/gamesModel";

// POST endpoint
export const joinGame = async (req: express.Request, res: express.Response) => {
  let filter = { game_id: req.body.id };
  let player2 = { player2: req.body.username };
  try {
    let gameUpdated = await GamesModel.findOneAndUpdate(filter, player2, {
      new: true,
    });
    res.send(gameUpdated);
  } catch (error) {
    res.status(500).send(error);
  }
};
