import IIsCheckMate from "../../domain/services/IIsCheckMate";

const { Chess } = require("chess.js");

// return true is the side to move has been check mated, false is not.
export const isCheckMate: IIsCheckMate = (table: any) => {
  return table.in_checkmate();
};
