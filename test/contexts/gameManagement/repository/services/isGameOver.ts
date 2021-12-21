import IGame from "../../domain/model/IGame";
import IIsGamesOver from "../../domain/services/IIsGameOver";

const { Chess } = require("chess.js");

// return true is game is over, false is not.
export const isGameOver: IIsGamesOver = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.game_over();
};
