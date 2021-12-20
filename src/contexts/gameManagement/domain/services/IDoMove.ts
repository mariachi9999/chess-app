import IBoard from "../model/IBoard";
import IGame from "../model/IGame";
import IMove from "../model/IMove";
export default interface IDoMove {
  (game: IGame, move: IMove): IBoard;
}
