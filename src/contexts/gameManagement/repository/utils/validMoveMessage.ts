import IGame from "../../domain/core/IGame";
import { returnPiece } from "./returnPiece";

export const validMoveMessage = (game: IGame) => {
  let { color, from, to, flags, piece, san } = game.board.last_move;
  let captured = game.board.last_move.captured || "";
  let player_color = color === "w" ? "White" : "Black";
  let piece_name = returnPiece(piece);
  let move = `${player_color} player moves ${piece_name} from ${from} to ${to}.`;
  let capture = "";
  let capture_name;
  if (flags === "c") {
    capture_name = returnPiece(captured);
    capture_name === "King"
      ? (capture = `${player_color} captured the enemy´s King and won! Congrats!.`)
      : (capture = `${player_color} captured a ${capture_name}.`);
  }
  let jaque = "";
  if (san.charAt(san.length - 1) === "+") {
    jaque = "Adversary´s King is on jaque!";
  }

  let message = `${move}
  ${capture}
  ${jaque}`;
  return message;
};
