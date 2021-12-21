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
exports.DbCreatePlayer = void 0;
const player_1 = __importDefault(require("../../../repository/entities/player/player"));
const playerModel_1 = require("../../models/playerModel");
// POST endpoint
const DbCreatePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const player = new player_1.default(req.body.username);
    const playerToDb = new playerModel_1.PlayerModel({ username: player.username });
    try {
        yield playerToDb.save();
        res.status(201).send(player);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.DbCreatePlayer = DbCreatePlayer;
