import IGame from "../../domain/model/IGame";
import IDoMove from "../../domain/services/IDoMove";
import { fieldConversion } from "../utils/fieldConversion";
import { isCheckMate } from "./isCheckMate";

const { Chess } = require("chess.js");

// Return the new table fen
export const doMove: IDoMove = (game: IGame, move: any) => {
  let posAdj = {
    from: fieldConversion(move.from),
    to: fieldConversion(move.to),
  };
  let table = new Chess(game.board.table);
  let lastMove = table.move(posAdj, { sloppy: true });
  isCheckMate(table);
  return { table: table.fen(), last_move: lastMove };
};
