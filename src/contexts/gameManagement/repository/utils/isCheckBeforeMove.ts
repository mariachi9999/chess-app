import IGame from "../../domain/core/IGame";

const { Chess } = require("chess.js");

// return true is the side to move is in check, false is not.
export const isCheckBeforeMove = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.in_check();
};
