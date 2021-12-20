import Game from "../core/IGame";

export default interface IRestartGame {
  (game: Game): void;
}
