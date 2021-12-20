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
exports.addGameToDB = void 0;
const game_1 = __importDefault(require("../../../repository/entities/game/game"));
const gamesModel_1 = require("../../models/gamesModel");
// POST endpoint
const addGameToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let player = req.body.username;
    const game = new game_1.default(player);
    const gameToDb = new gamesModel_1.GamesModel(game);
    try {
        yield gameToDb.save();
        res.send(gameToDb);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addGameToDB = addGameToDB;
