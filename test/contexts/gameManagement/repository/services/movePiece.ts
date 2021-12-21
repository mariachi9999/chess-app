import { doMove } from "./doMove";
import { checkStatus } from "./checkStatus";
import { validMoveMessage } from "./validMoveMessage";
import IGame from "../../domain/model/IGame";
import { updateGameInDb } from "../../persistence/services/updateGameInBb";
import IBoard from "../../domain/model/IBoard";
import { updatePlayerScore } from "./updatePlayerScore";

const { Chess } = require("chess.js");

// Return the new table fen
export const movePiece = async (game: IGame, move: any) => {
  let newBoard = doMove(game, move);
  let newStatus = checkStatus(newBoard);
  if (newStatus === "Jaque Mate" || newStatus === "Draw") {
    await updatePlayerScore(newBoard, game, newStatus);
  }
  let message = validMoveMessage(newBoard);
  let gameUpdated = await updateGameInDb(
    game.game_id,
    newBoard as IBoard,
    newStatus
  );
  return { message, gameUpdated };
};
