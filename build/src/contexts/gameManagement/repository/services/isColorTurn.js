"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isColorTurn = void 0;
const { Chess } = require("chess.js");
// return current side to move (b for black, w for white).
const isColorTurn = (game) => {
    let table = new Chess(game.board.table);
    return table.turn();
};
exports.isColorTurn = isColorTurn;
