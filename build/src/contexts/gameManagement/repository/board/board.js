"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Chess } = require("chess.js");
let board = new Chess();
class Board {
    constructor() {
        this.table = board.fen();
        this.last_move = board.history({ verbose: true });
    }
}
exports.default = Board;
