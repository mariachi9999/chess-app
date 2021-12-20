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
    let color = req.body.color;
    try {
        let game = yield gamesModel_1.GamesModel.findOne({ id: id });
        let turn = game.board.table.split(" ");
        if (turn[0] === "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" &&
            color === "b") {
            res.send({ error: "Sorry, White moves first!" });
        }
        else if (turn[1] !== color) {
            res.send({ error: "Sorry, It´s not your turn!" });
        }
        else if (turn[0] === "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" &&
            color === "w") {
            let table = new Chess(game.board.table);
            let legal = table.moves();
            console.log(legal);
            console.log(move);
            console.log(legal.includes(move));
            let moved = table.move(move, { sloppy: true });
            console.log(moved);
            let newBoard = table.fen();
            let newAscii = table.ascii();
            let gameUpdate = yield gamesModel_1.GamesModel.updateOne({ id: id }, { status: "Playing", board: { table: newBoard, ascii: newAscii } });
            let gameUpdated = yield gamesModel_1.GamesModel.findOne({ id: id });
            gameUpdate.nModified > 0
                ? res.send(gameUpdated)
                : res.send({ error: "Please, made a valid move!" });
        }
        else {
            let table = new Chess(game.board.table);
            let legal = table.moves();
            console.log(legal);
            console.log(move);
            console.log(legal.includes(move));
            let moved = table.move(move, { sloppy: true });
            console.log(moved);
            let newBoard = table.fen();
            let newAscii = table.ascii();
            let gameUpdate = yield gamesModel_1.GamesModel.updateOne({ id: id }, { board: { table: newBoard, ascii: newAscii } });
            let gameUpdated = yield gamesModel_1.GamesModel.findOne({ id: id });
            gameUpdate.nModified > 0
                ? res.send(gameUpdated)
                : res.send({ error: "Please, made a valid move!" });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.movePiece = movePiece;
