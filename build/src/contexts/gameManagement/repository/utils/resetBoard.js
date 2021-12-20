"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetBoard = void 0;
const { Chess } = require("chess.js");
const resetBoard = (game) => {
    let table = new Chess(game.board.table);
    return table.reset();
};
exports.resetBoard = resetBoard;
