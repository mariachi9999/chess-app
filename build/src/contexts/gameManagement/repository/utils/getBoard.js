"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoard = void 0;
const { Chess } = require("chess.js");
const getBoard = (game) => {
    let table = new Chess(game.board.table);
    return table;
};
exports.getBoard = getBoard;
