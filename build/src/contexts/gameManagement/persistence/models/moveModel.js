"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovesModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const IPiece_1 = require("../interfaces/IPiece");
const { Schema } = mongoose_1.default;
const MovesSchema = new Schema({
    move_number: Array,
    player: String,
    from: String,
    to: String,
    piece: IPiece_1.Piece,
    flag: String, // "-" for normal move, "x" for attack
});
exports.MovesModel = mongoose_1.default.model("Moves", MovesSchema);
