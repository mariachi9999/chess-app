"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = __importDefault(require("express"));
const addGameController_1 = require("../persistence/controllers/game/addGameController");
const joinGameUpdateController_1 = require("../persistence/controllers/game/joinGameUpdateController");
const getGameController_1 = require("../persistence/controllers/game/getGameController");
const restartGameController_1 = require("../persistence/controllers/game/restartGameController");
exports.gameRouter = express_1.default.Router();
// Player endpoints
// Add a player to database
exports.gameRouter.post("/create", addGameController_1.addGameToDB);
exports.gameRouter.post("/join", joinGameUpdateController_1.joinGame);
exports.gameRouter.get("/get", getGameController_1.getGame);
exports.gameRouter.post("/restart", restartGameController_1.restartGameController);
// Get all players from database
// gameRouter.get("/players", getPlayersFromDB);
