import IGame from "../../domain/core/IGame";

const { Chess } = require("chess.js");

export const getBoard = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table;
};
