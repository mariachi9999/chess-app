import Game from "../model/IGame";

export default interface IQuitGame {
  (game: Game): void;
}
