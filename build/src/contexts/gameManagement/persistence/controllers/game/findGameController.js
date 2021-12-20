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
exports.DbFindGame = void 0;
const gamesModel_1 = require("../../models/gamesModel");
// GET endpoint
const DbFindGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.body.id;
    try {
        let game = yield gamesModel_1.GamesModel.findOne({ game_id: id });
        res.send(game);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.DbFindGame = DbFindGame;
