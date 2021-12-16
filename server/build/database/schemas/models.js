"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const PlayerSchema = new Schema({
    username: String,
    registerDate: {
        type: Date,
        default: Date.now,
    },
    games: {
        wins: Number,
        draws: Number,
        losses: Number,
    },
});
exports.PlayerModel = mongoose_1.default.model("Player", PlayerSchema);
