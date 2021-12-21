import IGame from "../model/IGame";
import IMove from "../model/IMove";

export default interface IIsLegalMove {
  (game: IGame, move: IMove): Boolean;
}
