import IGame from "../../domain/core/IGame";

// return current side to move (b for black, w for white).
export const isFirstMovement = (game: IGame) => {
  return game.board.table ===
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    ? true
    : false;
};
