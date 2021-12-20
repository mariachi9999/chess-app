"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckMateBeforeMove = void 0;
const { Chess } = require("chess.js");
// return true is the side to move has been check mated, false is not.
const isCheckMateBeforeMove = (game) => {
    let table = new Chess(game.board.table);
    return table.in_checkmate();
};
exports.isCheckMateBeforeMove = isCheckMateBeforeMove;
