import IGame from "../../domain/core/IGame";
import { GamesModel } from "../../persistence/models/gamesModel";
import Board from "../board/board";

export const restartGame = async (game: IGame) => {
  let gameUpdated = await GamesModel.findOneAndUpdate(
    { game_id: game.game_id },
    { board: new Board() },
    {
      new: true,
    }
  );
  return gameUpdated;
};
