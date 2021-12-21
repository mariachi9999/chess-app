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
exports.DbUpdatePlayerScore = void 0;
const playerModel_1 = require("../models/playerModel");
const DbUpdatePlayerScore = (username, result) => __awaiter(void 0, void 0, void 0, function* () {
    let player = yield playerModel_1.PlayerModel.findOne({ username: username });
    console.log(player);
    if (player !== null) {
        try {
            if (result === "win") {
                player.score.wins = player.score.wins + 1;
            }
            if (result === "lost") {
                console.log(player);
                player.score.losses = player.score.losses + 1;
            }
            if (result === "draw") {
                player.score.draws = player.score.draws + 1;
            }
            console.log(player.score);
            yield playerModel_1.PlayerModel.findOneAndUpdate({ username: username }, { score: player.score }, {
                new: true,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
});
exports.DbUpdatePlayerScore = DbUpdatePlayerScore;
