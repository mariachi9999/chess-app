import express from "express";
import { GamesModel } from "../../models/gamesModel";

// GET endpoint
export const DbFindGame = async (
  req: express.Request,
  res: express.Response
) => {
  let id = req.body.id;
  try {
    let game = await GamesModel.findOne({ game_id: id });
    res.status(201).send(game);
  } catch (error) {
    res.status(500).send(error);
  }
};
