import IGame from "../../domain/model/IGame";
import IMove from "../../domain/model/IMove";
import IIsLegalMove from "../../domain/services/IIsLegalMove";
import { fieldConversion } from "../utils/fieldConversion";

const { Chess } = require("chess.js");

// return true if is legal move, false is not
export const isLegalMove: IIsLegalMove = (
  game: IGame,
  move: IMove
): Boolean => {
  let table = new Chess(game.board.table);
  let legal_moves = table.moves({ square: fieldConversion(move.move.from) });
  let legal_moves_adj = legal_moves.map((cell: string) =>
    fieldConversion(cell)
  );
  return legal_moves_adj.includes(fieldConversion(move.move.to));
};
