import express from "express";
import { PlayerModel } from "../../../../Database/models/playerModel";

export const getPlayersFromDB = async (
  req: express.Request,
  res: express.Response
) => {
  const players = await PlayerModel.find({});
  try {
    res.send(players);
  } catch (error) {
    res.status(500).send(error);
  }
};
