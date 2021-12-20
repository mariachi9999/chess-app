import express from "express";
import Player from "../../../repository/entities/player/player";
import { PlayerModel } from "../../models/playerModel";

// POST endpoint
export const DbCreatePlayer = async (
  req: express.Request,
  res: express.Response
) => {
  const player = new Player(req.body.username);
  const playerToDb = new PlayerModel({ username: player.username });
  try {
    await playerToDb.save();
    res.send(player);
  } catch (error) {
    res.status(500).send(error);
  }
};
