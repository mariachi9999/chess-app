import IBoard from "../../domain/core/IBoard";
import { GamesModel } from "../models/gamesModel";
import { findGame } from "./findGameFromDb";

export const updateGameInDb = async (id: Number, newBoard: IBoard) => {
  console.log(newBoard);
  await GamesModel.updateOne(
    { game_id: id },
    { status: "Playing", board: newBoard }
  );
  let gameUpdated = await findGame(id);

  return gameUpdated;
};
