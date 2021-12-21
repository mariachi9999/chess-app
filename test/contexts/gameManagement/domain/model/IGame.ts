import IBoard from "./IBoard";
import IPlayer from "./IPlayer";

export default interface IGame {
  game_id: Number;
  white: IPlayer | String;
  black: IPlayer | String;
  board: IBoard;
  status: String;
}
