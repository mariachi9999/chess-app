"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validMoveMessage = void 0;
const returnPiece_1 = require("./returnPiece");
const validMoveMessage = (newBoard) => {
    let { color, from, to, flags, piece, san } = newBoard.last_move;
    let captured = newBoard.last_move.captured || "";
    let player_color = color === "w" ? "White" : "Black";
    let piece_name = (0, returnPiece_1.returnPiece)(piece);
    let move = `${player_color} player moves ${piece_name} from ${from} to ${to}.`;
    let capture = "";
    let capture_name;
    if (flags === "c") {
        capture_name = (0, returnPiece_1.returnPiece)(captured);
        capture_name === "King"
            ? (capture = `${player_color} captured the enemy´s King and won! Congrats!.`)
            : (capture = `${player_color} captured a ${capture_name}.`);
    }
    let jaque = "";
    if (san.charAt(san.length - 1) === "+") {
        jaque = "Adversary´s King is on jaque!";
    }
    if (san.charAt(san.length - 1) === "#") {
        jaque = "Congrats! Jaque Mate!";
    }
    let message = `${move}
  ${capture}
  ${jaque}`;
    return message;
};
exports.validMoveMessage = validMoveMessage;
