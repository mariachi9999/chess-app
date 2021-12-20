import Game from "../model/IGame";

export default interface IRestartGame {
  (game: Game): void;
}
