import express from "express";
import Game from "../../../repository/entities/game/game";
import { GamesModel } from "../../models/gamesModel";

// GET endpoint
export const getGame = async (req: express.Request, res: express.Response) => {
  let id = req.body.id;
  try {
    let game = await GamesModel.findOne({ game_id: id });
    res.send(game);
  } catch (error) {
    res.status(500).send(error);
  }
};
