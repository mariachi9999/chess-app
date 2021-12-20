import ILastMove from "./ILastMove";
import Piece from "./IPiece";

export default interface IBoard {
  table: String;
  last_move: ILastMove;
}
