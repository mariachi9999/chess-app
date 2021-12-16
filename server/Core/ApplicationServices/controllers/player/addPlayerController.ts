import express from "express";
import { PlayerModel } from "../../../../Database/models/playerModel";

// POST endpoint
export const addPlayerToDB = async (
  req: express.Request,
  res: express.Response
) => {
  const player = new PlayerModel(req.body);
  try {
    await player.save();
    res.send(player);
  } catch (error) {
    res.status(500).send(error);
  }
};
