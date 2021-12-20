"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(position, color, leterCell, numberCell) {
        this.position = position;
        this.color = color;
        this.leterCell = leterCell;
        this.numberCell = numberCell;
        this.position = { letterCell: leterCell, numberCell: numberCell };
    }
}
exports.default = Piece;
