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
exports.updatePlayerScore = void 0;
const updatePlayerScore_1 = require("../../persistence/services/updatePlayerScore");
const updatePlayerScore = (newBoard, game, newStatus) => __awaiter(void 0, void 0, void 0, function* () {
    let { color } = newBoard.last_move;
    let white_player = game.white;
    let black_player = game.black;
    if (newStatus === "Jaque Mate") {
        if (color === "w") {
            yield (0, updatePlayerScore_1.DbUpdatePlayerScore)(white_player, "win");
            yield (0, updatePlayerScore_1.DbUpdatePlayerScore)(black_player, "lost");
        }
        else {
            yield (0, updatePlayerScore_1.DbUpdatePlayerScore)(black_player, "win");
            yield (0, updatePlayerScore_1.DbUpdatePlayerScore)(white_player, "lost");
        }
    }
    else {
        yield (0, updatePlayerScore_1.DbUpdatePlayerScore)(white_player, "draw");
        yield (0, updatePlayerScore_1.DbUpdatePlayerScore)(black_player, "draw");
    }
});
exports.updatePlayerScore = updatePlayerScore;
