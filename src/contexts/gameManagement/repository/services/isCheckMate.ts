import IBoard from "../../domain/model/IBoard";

const { Chess } = require("chess.js");

// return true is the side to move has been check mated, false is not.
export const isCheckMate = (table: any) => {
  return table.in_checkmate();
};
