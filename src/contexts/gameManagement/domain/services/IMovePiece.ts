import Piece from "../core/IPiece";

export default interface IMovePiece {
  (piece: Piece): void;
}
