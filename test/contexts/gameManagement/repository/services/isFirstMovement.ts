import IGame from "../../domain/model/IGame";
import IIsFirstMovement from "../../domain/services/IIsFirstMovement";

// return current side to move (b for black, w for white).
export const isFirstMovement: IIsFirstMovement = (game: IGame) => {
  return game.board.table ===
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    ? true
    : false;
};
