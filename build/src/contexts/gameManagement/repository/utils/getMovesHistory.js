"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovesHistory = void 0;
const { Chess } = require("chess.js");
// Returns an array containing the moves of the game.
const getMovesHistory = (game) => {
    let table = new Chess(game.board.table);
    return table.history({ verbose: true });
};
exports.getMovesHistory = getMovesHistory;
