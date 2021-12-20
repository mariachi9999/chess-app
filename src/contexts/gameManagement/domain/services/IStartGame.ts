import Game from "../model/IGame";

export default interface IStartGame {
  (game: Game): void;
}
