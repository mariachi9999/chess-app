import Board from "../core/IBoard";
import Game from "../core/IGame";
import Player from "../core/IPlayer";

export default interface ICreateGame {
  createGame: (board: Board) => Game;
}
