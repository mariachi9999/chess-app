"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = __importDefault(require("express"));
const addGame_1 = require("../persistence/controllers/game/addGame");
const joinGame_1 = require("../persistence/controllers/game/joinGame");
const getGame_1 = require("../persistence/controllers/game/getGame");
const restartGameController_1 = require("../persistence/controllers/game/restartGameController");
exports.gameRouter = express_1.default.Router();
// Player endpoints
// Add a player to database
exports.gameRouter.post("/create", addGame_1.addGameToDB);
exports.gameRouter.post("/join", joinGame_1.joinGame);
exports.gameRouter.get("/get", getGame_1.getGame);
exports.gameRouter.post("/restart", restartGameController_1.restartGameController);
// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
