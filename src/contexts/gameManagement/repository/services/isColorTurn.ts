import IGame from "../../domain/model/IGame";

const { Chess } = require("chess.js");

// return current side to move (b for black, w for white).
export const isColorTurn = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.turn();
};
