"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doMove = void 0;
const fieldConversion_1 = require("../utils/fieldConversion");
const isCheckMate_1 = require("./isCheckMate");
const { Chess } = require("chess.js");
// Return the new table fen
const doMove = (game, move) => {
    let posAdj = {
        from: (0, fieldConversion_1.fieldConversion)(move.from),
        to: (0, fieldConversion_1.fieldConversion)(move.to),
    };
    let table = new Chess(game.board.table);
    let lastMove = table.move(posAdj, { sloppy: true });
    (0, isCheckMate_1.isCheckMate)(table);
    return { table: table.fen(), last_move: lastMove };
};
exports.doMove = doMove;
