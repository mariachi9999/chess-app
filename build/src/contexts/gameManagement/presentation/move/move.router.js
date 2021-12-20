"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveRouter = void 0;
const express_1 = __importDefault(require("express"));
const movePiece_controller_1 = require("../../persistence/controllers/move/movePiece.controller");
exports.moveRouter = express_1.default.Router();
// Player endpoints
// Add a player to database
exports.moveRouter.post("/", movePiece_controller_1.DbUpdateWithMove);
// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
