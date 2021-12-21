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
exports.DbFindGameAndRestart = void 0;
const findGameFromDb_1 = require("../../services/findGameFromDb");
const restartGame_1 = require("../../../repository/services/restartGame");
const message_1 = require("../../../repository/constants/message");
const responseMessage_1 = require("../../../repository/services/responseMessage");
// POST endpoint
const DbFindGameAndRestart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let game_id = req.body.game_id;
    let gameToRestart = yield (0, findGameFromDb_1.findGame)(game_id);
    let gameRestarted = yield (0, restartGame_1.restartGame)(gameToRestart);
    try {
        res.status(201).send((0, responseMessage_1.responseMessage)(message_1.GAME_RESTARTED, gameRestarted));
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.DbFindGameAndRestart = DbFindGameAndRestart;
