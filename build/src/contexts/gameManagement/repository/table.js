"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Chess } = require("chess.js");
class table {
    constructor() {
        this.table = new Chess();
    }
    getTable(table) {
        return table.board();
    }
}
exports.default = table;
