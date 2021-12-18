"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const BoardSchema = new Schema({
    game_id: Number,
    board: String,
    move_number: Array,
    turn_player: String,
    score: String, // would store an object stringify
});
exports.BoardModel = mongoose_1.default.model("Board", BoardSchema);
