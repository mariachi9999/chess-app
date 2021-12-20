"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckMate = void 0;
const { Chess } = require("chess.js");
// return true is the side to move has been check mated, false is not.
const isCheckMate = (table) => {
    return table.in_checkmate();
};
exports.isCheckMate = isCheckMate;
