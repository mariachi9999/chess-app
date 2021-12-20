import IBoard from "./IBoard";
import IPlayer from "./IPlayer";

export default interface IGame {
  game_id: Number;
  player1: IPlayer | String;
  player2: IPlayer | String;
  board: IBoard;
  status: String;
}
