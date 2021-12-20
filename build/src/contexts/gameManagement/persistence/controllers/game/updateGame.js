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
exports.updateGameInDb = void 0;
const gamesModel_1 = require("../../models/gamesModel");
const findGame_1 = require("./findGame");
const updateGameInDb = (id, newBoard) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(newBoard);
    yield gamesModel_1.GamesModel.updateOne({ game_id: id }, { status: "Playing", board: newBoard });
    let gameUpdated = yield (0, findGame_1.findGame)(id);
    return gameUpdated;
});
exports.updateGameInDb = updateGameInDb;
