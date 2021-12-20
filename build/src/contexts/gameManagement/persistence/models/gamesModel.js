"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const { Schema } = mongoose_1.default;
const id = (0, uuid_1.v4)();
const GamesSchema = new Schema({
    game_id: {
        type: Number,
        default: id,
    },
    player1: String,
    player2: String,
    board: { table: String, last_move: {} },
    status: String,
});
exports.GamesModel = mongoose_1.default.model("Games", GamesSchema);
