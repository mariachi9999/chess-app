import IGame from "../../domain/core/IGame";

const { Chess } = require("chess.js");

// return true is the games has finished by draw, false is not.
export const isGameFinishedByDraw = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.in_draw() || table.in_stalemate();
};
