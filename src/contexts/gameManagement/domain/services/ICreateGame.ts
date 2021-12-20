import Board from "../model/IBoard";
import Game from "../model/IGame";
import Player from "../model/IPlayer";

export default interface ICreateGame {
  createGame: (board: Board) => Game;
}
