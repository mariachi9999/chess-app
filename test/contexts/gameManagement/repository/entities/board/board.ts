import IBoard from "../../../domain/model/IBoard";
import IMoveResult from "../../../domain/model/IMoveResult";
const { Chess } = require("chess.js");

let board = new Chess();

export default class Board implements IBoard {
  public table: String;
  public last_move: IMoveResult;
  constructor() {
    this.table = board.fen();
    this.last_move = board.history({ verbose: true });
  }
}
