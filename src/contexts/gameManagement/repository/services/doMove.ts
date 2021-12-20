import IGame from "../../domain/model/IGame";
import ILastMove from "../../domain/model/ILastMove";
import IMove from "../../domain/model/IMovePiece";
import { fieldConversion } from "./fieldConversion";
import { isCheckMate } from "./isCheckMate";

const { Chess } = require("chess.js");

// Return the new table fen
export const doMove = (game: IGame, move: any) => {
  let posAdj = {
    from: fieldConversion(move.from),
    to: fieldConversion(move.to),
  };
  let table = new Chess(game.board.table);
  let lastMove = table.move(posAdj, { sloppy: true });
  isCheckMate(table);
  return { table: table.fen(), last_move: lastMove };
};
