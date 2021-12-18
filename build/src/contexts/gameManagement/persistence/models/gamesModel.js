"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const GamesSchema = new Schema({
    id: {
        type: Number,
        default: new Date().getTime(),
    },
});
exports.GamesModel = mongoose_1.default.model("Games", GamesSchema);
