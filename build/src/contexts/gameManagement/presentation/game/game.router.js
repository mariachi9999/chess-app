"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = __importDefault(require("express"));
const createGame_controller_1 = require("../../persistence/controllers/game/createGame.controller");
const joinGame_controller_1 = require("../../persistence/controllers/game/joinGame.controller");
const findGame_controller_1 = require("../../persistence/controllers/game/findGame.controller");
const restartGame_controller_1 = require("../../persistence/controllers/game/restartGame.controller");
exports.gameRouter = express_1.default.Router();
// Player endpoints
exports.gameRouter.post("/create", createGame_controller_1.DbCreateGame);
exports.gameRouter.put("/join", joinGame_controller_1.DbJoinGame);
exports.gameRouter.get("/find", findGame_controller_1.DbFindGame);
exports.gameRouter.put("/restart", restartGame_controller_1.DbFindGameAndRestart);
