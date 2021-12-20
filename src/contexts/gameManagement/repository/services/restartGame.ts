import IGame from "../../domain/model/IGame";
import { GamesModel } from "../../persistence/models/gamesModel";
import Board from "../entities/board/board";

export const restartGame = async (game: IGame) => {
  let gameUpdated = await GamesModel.findOneAndUpdate(
    { game_id: game.game_id },
    { board: new Board(), status: "Ready to Start" },
    {
      new: true,
    }
  );
  return gameUpdated;
};
