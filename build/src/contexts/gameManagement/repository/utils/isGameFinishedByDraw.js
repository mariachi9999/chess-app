"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameFinishedByDraw = void 0;
const { Chess } = require("chess.js");
// return true is the games has finished by draw, false is not.
const isGameFinishedByDraw = (game) => {
    let table = new Chess(game.board.table);
    return table.in_draw() || table.in_stalemate();
};
exports.isGameFinishedByDraw = isGameFinishedByDraw;
