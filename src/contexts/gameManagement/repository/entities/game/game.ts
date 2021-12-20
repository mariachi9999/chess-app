import IBoard from "../../../domain/model/IBoard";
import IGame from "../../../domain/model/IGame";
import Player from "../../../domain/model/IPlayer";
import Board from "../board/board";

export default class Game implements IGame {
  public game_id: Number;
  public player1: Player | String;
  public player2: Player | String;
  public board: IBoard;
  public status: String;

  constructor(player1: Player | String) {
    this.game_id = Math.round(Math.random() * 10000000);
    (this.player1 = player1),
      (this.player2 = ""),
      (this.board = new Board()),
      (this.status = "Ready to Start");
  }
}
