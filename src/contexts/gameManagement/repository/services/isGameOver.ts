import IGame from "../../domain/model/IGame";

const { Chess } = require("chess.js");

// return true is game is over, false is not.
export const isGameOver = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.game_over();
};
