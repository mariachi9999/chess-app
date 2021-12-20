import Game from "../core/IGame";

export default interface IQuitGame {
  (game: Game): void;
}
