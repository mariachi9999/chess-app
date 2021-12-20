import IGame from "../model/IGame";

export default interface IIsGamesOver {
  (game: IGame): Boolean;
}
