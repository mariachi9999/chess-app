"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckBeforeMove = void 0;
const { Chess } = require("chess.js");
// return true is the side to move is in check, false is not.
const isCheckBeforeMove = (game) => {
    let table = new Chess(game.board.table);
    return table.in_check();
};
exports.isCheckBeforeMove = isCheckBeforeMove;
