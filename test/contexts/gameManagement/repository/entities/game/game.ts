import IBoard from "../../../domain/model/IBoard";
import IGame from "../../../domain/model/IGame";
import Player from "../../../domain/model/IPlayer";
import Board from "../board/board";

export default class Game implements IGame {
  public game_id: Number;
  public white: Player | String;
  public black: Player | String;
  public board: IBoard;
  public status: String;

  constructor(white: Player | String) {
    this.game_id = Math.round(Math.random() * 10000000);
    (this.white = white),
      (this.black = ""),
      (this.board = new Board()),
      (this.status = "Ready to Start");
  }
}
