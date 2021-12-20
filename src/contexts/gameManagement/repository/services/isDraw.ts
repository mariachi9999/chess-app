import IGame from "../../domain/model/IGame";

const { Chess } = require("chess.js");

// return true is the games has finished by draw, false is not.
export const isDraw = (table: any) => {
  return table.in_draw() || table.in_stalemate();
};
