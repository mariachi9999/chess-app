import IGame from "../model/IGame";

export default interface IIsColorTurn {
  (game: IGame): String;
}
