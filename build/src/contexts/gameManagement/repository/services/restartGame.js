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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartGame = void 0;
const gamesModel_1 = require("../../persistence/models/gamesModel");
const board_1 = __importDefault(require("../entities/board/board"));
const restartGame = (game) => __awaiter(void 0, void 0, void 0, function* () {
    let gameUpdated = yield gamesModel_1.GamesModel.findOneAndUpdate({ game_id: game.game_id }, { board: new board_1.default(), status: "Ready to Start" }, {
        new: true,
    });
    return gameUpdated;
});
exports.restartGame = restartGame;
