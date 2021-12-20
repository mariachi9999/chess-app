"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRouter = void 0;
const express_1 = __importDefault(require("express"));
const addPlayerController_1 = require("../persistence/controllers/player/addPlayerController");
const getPlayersController_1 = require("../persistence/controllers/player/getPlayersController");
exports.playerRouter = express_1.default.Router();
// Player endpoints
// Add a player to database
exports.playerRouter.post("/add_player", addPlayerController_1.addPlayerToDB);
// Get all players from database
exports.playerRouter.get("/players", getPlayersController_1.getPlayersFromDB);
