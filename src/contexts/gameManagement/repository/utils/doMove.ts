import IGame from "../../domain/core/IGame";
import ILastMove from "../../domain/core/ILastMove";
import IMove from "../../domain/core/IMovePiece";
import { fieldConversion } from "./fieldConversion";

const { Chess } = require("chess.js");

// Return the new table fen
export const doMove = (game: IGame, move: any) => {
  let posAdj = {
    from: fieldConversion(move.from),
    to: fieldConversion(move.to),
  };
  let table = new Chess(game.board.table);
  let lastMove = table.move(posAdj, { sloppy: true });
  return { table: table.fen(), last_move: lastMove };
};
