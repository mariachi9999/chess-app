import Game from "../core/IGame";

export default interface IStartGame {
  (game: Game): void;
}
