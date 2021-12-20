"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("../board/board"));
class Game {
    constructor(player1) {
        this.game_id = Math.round(Math.random() * 10000000);
        (this.player1 = player1),
            (this.player2 = ""),
            (this.board = new board_1.default()),
            (this.status = "Ready to Start");
    }
}
exports.default = Game;
