import IGame from "../../domain/model/IGame";

const { Chess } = require("chess.js");

export const getBoard = (game: IGame) => {
  let table = new Chess(game.board.table);
  return table;
};
