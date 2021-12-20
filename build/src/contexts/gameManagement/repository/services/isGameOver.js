"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameOver = void 0;
const { Chess } = require("chess.js");
// return true is game is over, false is not.
const isGameOver = (game) => {
    let table = new Chess(game.board.table);
    return table.game_over();
};
exports.isGameOver = isGameOver;
