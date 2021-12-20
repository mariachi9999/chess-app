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
exports.joinGame = void 0;
const gamesModel_1 = require("../../models/gamesModel");
// POST endpoint
const joinGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = { id: req.body.id };
    let player2 = { player2: req.body.username };
    try {
        let gameUpdated = yield gamesModel_1.GamesModel.findOneAndUpdate(filter, player2, {
            new: true,
        });
        res.send(gameUpdated);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.joinGame = joinGame;
