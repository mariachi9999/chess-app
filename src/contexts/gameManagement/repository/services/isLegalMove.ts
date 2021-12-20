import IGame from "../../domain/model/IGame";
import ILastMove from "../../domain/model/ILastMove";
import IMove from "../../domain/model/IMovePiece";
import { fieldConversion } from "./fieldConversion";

const { Chess } = require("chess.js");

// return true if is legal move, false is not
export const isLegalMove = (game: IGame, move: IMove): Boolean => {
  let table = new Chess(game.board.table);
  let legal_moves = table.moves({ square: fieldConversion(move.move.from) });
  let legal_moves_adj = legal_moves.map((cell: string) =>
    fieldConversion(cell)
  );
  return legal_moves_adj.includes(fieldConversion(move.move.to));
};
