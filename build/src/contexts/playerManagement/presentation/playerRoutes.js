"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const addPlayerController_1 = require("../repository/addPlayerController");
const getPlayersController_1 = require("../repository/getPlayersController");
exports.appRouter = express_1.default.Router();
// Player endpoints
// Add a player to database
exports.appRouter.post("/add_player", addPlayerController_1.addPlayerToDB);
// Get all players from database
exports.appRouter.get("/players", getPlayersController_1.getPlayersFromDB);
