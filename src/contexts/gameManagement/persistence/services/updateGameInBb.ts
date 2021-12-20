import IBoard from "../../domain/model/IBoard";
import { GamesModel } from "../models/gamesModel";
import { findGame } from "./findGameFromDb";

export const updateGameInDb = async (
  id: Number,
  newBoard: IBoard,
  newStatus: String
) => {
  console.log(newBoard);
  await GamesModel.updateOne(
    { game_id: id },
    { status: newStatus, board: newBoard }
  );
  let gameUpdated = await findGame(id);

  return gameUpdated;
};
