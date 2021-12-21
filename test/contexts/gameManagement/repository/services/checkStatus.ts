import ICheckStatus from "../../domain/services/ICheckStatus";
import { isCheckMate } from "./isCheckMate";
import { isDraw } from "./isDraw";

const { Chess } = require("chess.js");

// Return the new table fen
export const checkStatus: ICheckStatus = (newBoard: {
  table: any;
  last_move: any;
}) => {
  let status;
  let table = new Chess(newBoard.table);

  if (isCheckMate(table)) {
    return (status = "Jaque Mate");
  } else if (isDraw(table)) {
    return (status = "Draw");
  } else {
    return (status = "Playing");
  }
};
