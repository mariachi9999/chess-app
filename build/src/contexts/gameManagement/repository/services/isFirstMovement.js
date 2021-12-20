"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirstMovement = void 0;
// return current side to move (b for black, w for white).
const isFirstMovement = (game) => {
    return game.board.table ===
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        ? true
        : false;
};
exports.isFirstMovement = isFirstMovement;
