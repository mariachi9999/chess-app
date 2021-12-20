import IGame from "../../domain/core/IGame";

const { Chess } = require("chess.js");

// Returns an array containing the moves of the game.
export const getMovesHistory = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table.history({ verbose: true });
};
