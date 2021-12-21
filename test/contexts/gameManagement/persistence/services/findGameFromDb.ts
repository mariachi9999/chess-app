import express from "express";
import IGame from "../../domain/model/IGame";
import Game from "../../repository/entities/game/game";
import { GamesModel } from "../models/gamesModel";

// GET endpoint
export const findGame = async (id: Number) => {
  let game = await GamesModel.findOne({ game_id: id });
  return game;
};
