import express from "express";
import Game from "../../../repository/entities/game/game";
import { GamesModel } from "../../models/gamesModel";

// POST endpoint
export const DbCreateGame = async (
  req: express.Request,
  res: express.Response
) => {
  let player = req.body.username;
  const game = new Game(player);
  const gameToDb = new GamesModel(game);
  try {
    await gameToDb.save();
    res.send(gameToDb);
  } catch (error) {
    res.status(500).send(error);
  }
};
