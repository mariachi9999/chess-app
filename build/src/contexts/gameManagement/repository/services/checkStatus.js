"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatus = void 0;
const isCheckMate_1 = require("./isCheckMate");
const isDraw_1 = require("./isDraw");
const { Chess } = require("chess.js");
// Return the new table fen
const checkStatus = (newBoard) => {
    let status;
    let table = new Chess(newBoard.table);
    if ((0, isCheckMate_1.isCheckMate)(table)) {
        return (status = "Jaque Mate");
    }
    else if ((0, isDraw_1.isDraw)(table)) {
        return (status = "Draw");
    }
    else {
        return (status = "Playing");
    }
};
exports.checkStatus = checkStatus;
