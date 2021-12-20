"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveRouter = void 0;
const express_1 = __importDefault(require("express"));
const movePieceController_1 = require("../persistence/controllers/move/movePieceController");
exports.moveRouter = express_1.default.Router();
// Player endpoints
// Add a player to database
exports.moveRouter.post("/", movePieceController_1.movePiece);
// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
