import Piece from "../model/IPiece";

export default interface IMovePiece {
  (piece: Piece): void;
}
