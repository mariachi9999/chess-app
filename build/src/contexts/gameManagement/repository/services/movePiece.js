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
const doMove_1 = require("./doMove");
const checkStatus_1 = require("./checkStatus");
const validMoveMessage_1 = require("./validMoveMessage");
const updateGameInBb_1 = require("../../persistence/services/updateGameInBb");
const updatePlayerScore_1 = require("./updatePlayerScore");
const { Chess } = require("chess.js");
// Return the new table fen
const movePiece = (game, move) => __awaiter(void 0, void 0, void 0, function* () {
    let newBoard = (0, doMove_1.doMove)(game, move);
    let newStatus = (0, checkStatus_1.checkStatus)(newBoard);
    if (newStatus === "Jaque Mate" || newStatus === "Draw") {
        yield (0, updatePlayerScore_1.updatePlayerScore)(newBoard, game, newStatus);
    }
    let message = (0, validMoveMessage_1.validMoveMessage)(newBoard);
    let gameUpdated = yield (0, updateGameInBb_1.updateGameInDb)(game.game_id, newBoard, newStatus);
    return { message, gameUpdated };
});
exports.movePiece = movePiece;
