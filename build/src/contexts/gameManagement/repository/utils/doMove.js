"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doMove = void 0;
const fieldConversion_1 = require("./fieldConversion");
const { Chess } = require("chess.js");
// Return the new table fen
const doMove = (game, move) => {
    let posAdj = {
        from: (0, fieldConversion_1.fieldConversion)(move.from),
        to: (0, fieldConversion_1.fieldConversion)(move.to),
    };
    let table = new Chess(game.board.table);
    let lastMove = table.move(posAdj, { sloppy: true });
    return { table: table.fen(), last_move: lastMove };
};
exports.doMove = doMove;
