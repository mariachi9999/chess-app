import IGame from "../../domain/core/IGame";

const { Chess } = require("chess.js");

// return true is the side to move has been check mated, false is not.
export const isCheckMateBeforeMove = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.in_checkmate();
};
