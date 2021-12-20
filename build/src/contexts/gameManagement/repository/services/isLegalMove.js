"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLegalMove = void 0;
const fieldConversion_1 = require("../utils/fieldConversion");
const { Chess } = require("chess.js");
// return true if is legal move, false is not
const isLegalMove = (game, move) => {
    let table = new Chess(game.board.table);
    let legal_moves = table.moves({ square: (0, fieldConversion_1.fieldConversion)(move.move.from) });
    let legal_moves_adj = legal_moves.map((cell) => (0, fieldConversion_1.fieldConversion)(cell));
    return legal_moves_adj.includes((0, fieldConversion_1.fieldConversion)(move.move.to));
};
exports.isLegalMove = isLegalMove;
