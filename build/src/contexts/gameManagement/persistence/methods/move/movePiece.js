"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movePiece = void 0;
const gamesModel_1 = require("../../models/gamesModel");
const { Chess } = require("chess.js");
// POST endpoint
const movePiece = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.body.id;
    let move = req.body.move;
    try {
        let game = yield gamesModel_1.GamesModel.findOne({ id: id });
        console.log(game);
        let table = new Chess(game.board.table);
        console.log(table);
        table.move(move);
        let newBoard = table.fen();
        console.log(newBoard);
        let gameUpdated = yield gamesModel_1.GamesModel.updateOne({ id: id }, { board: { table: newBoard } });
        res.send(gameUpdated);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.movePiece = movePiece;
