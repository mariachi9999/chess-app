import IGame from "../model/IGame";

export default interface IIsFirstMovement {
  (game: IGame): Boolean;
}
