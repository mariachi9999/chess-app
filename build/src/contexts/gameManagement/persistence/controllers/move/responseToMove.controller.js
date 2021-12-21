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
exports.responseToMove = void 0;
const isBlack_1 = require("../../../repository/services/isBlack");
const isFirstMovement_1 = require("../../../repository/services/isFirstMovement");
const isColorTurn_1 = require("../../../repository/services/isColorTurn");
const gamesModel_1 = require("../../models/gamesModel");
const isGameOver_1 = require("../../../repository/services/isGameOver");
const responseMessage_1 = require("../../../repository/services/responseMessage");
const message_1 = require("../../../repository/constants/message");
const isLegalMove_1 = require("../../../repository/services/isLegalMove");
const movePiece_1 = require("../../../repository/services/movePiece");
const responseToMove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, move, color } = req.body;
    let game = yield gamesModel_1.GamesModel.findOne({ game_id: id });
    try {
        //Check if is already game over.
        if ((0, isGameOver_1.isGameOver)(game)) {
            return res.send((0, responseMessage_1.responseMessage)(message_1.GAME_OVER, game));
        }
        //Check if black wants to move first
        if ((0, isFirstMovement_1.isFirstMovement)(game) && (0, isBlack_1.isBlack)(color)) {
            return res.send((0, responseMessage_1.responseMessage)(message_1.WHITE_MOVE_FIRST, game));
        }
        //Check if is it player color turn
        if ((0, isColorTurn_1.isColorTurn)(game) !== color) {
            return res.send((0, responseMessage_1.responseMessage)(message_1.NOT_YOUR_TURN, game));
        }
        //Check if is it a valid move
        if (!(0, isLegalMove_1.isLegalMove)(game, req.body)) {
            return res.send((0, responseMessage_1.responseMessage)(message_1.INVALID_MOVE, game));
        }
        // // If all previous is ok, do the move!
        let { message, gameUpdated } = yield (0, movePiece_1.movePiece)(game, move);
        return res.status(201).send((0, responseMessage_1.responseMessage)(message, gameUpdated));
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.responseToMove = responseToMove;
