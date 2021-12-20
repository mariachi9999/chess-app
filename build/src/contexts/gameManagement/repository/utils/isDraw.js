"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDraw = void 0;
const { Chess } = require("chess.js");
// return true is the games has finished by draw, false is not.
const isDraw = (table) => {
    return table.in_draw() || table.in_stalemate();
};
exports.isDraw = isDraw;
