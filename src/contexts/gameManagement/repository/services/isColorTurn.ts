import IGame from "../../domain/model/IGame";
import IIsColorTurn from "../../domain/services/IIsColorTurn";

const { Chess } = require("chess.js");

// return current side to move (b for black, w for white).
export const isColorTurn: IIsColorTurn = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.turn();
};
