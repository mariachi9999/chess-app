import express from "express";
import { PlayerModel } from "../../models/playerModel";

// GET endpoint
export const DbReturnAllPlayers = async (
  req: express.Request,
  res: express.Response
) => {
  const players = await PlayerModel.find({});
  try {
    res.status(201).send(players);
  } catch (error) {
    res.status(500).send(error);
  }
};
