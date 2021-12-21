import IGame from "../model/IGame";

export default interface IRestartGame {
  (game: IGame): Promise<IGame>;
}
