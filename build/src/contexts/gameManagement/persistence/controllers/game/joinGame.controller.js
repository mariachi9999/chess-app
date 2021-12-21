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
exports.DbJoinGame = void 0;
const gamesModel_1 = require("../../models/gamesModel");
// POST endpoint
const DbJoinGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = { game_id: req.body.id };
    let black = { black: req.body.username };
    try {
        let gameUpdated = yield gamesModel_1.GamesModel.findOneAndUpdate(filter, black, {
            new: true,
        });
        res.status(201).send(gameUpdated);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.DbJoinGame = DbJoinGame;
