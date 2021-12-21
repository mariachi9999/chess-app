"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRouter = void 0;
const express_1 = __importDefault(require("express"));
const createPlayer_controller_1 = require("../../persistence/controllers/player/createPlayer.controller");
const findAllPlayers_controller_1 = require("../../persistence/controllers/player/findAllPlayers.controller");
exports.playerRouter = express_1.default.Router();
exports.playerRouter.post("/", createPlayer_controller_1.DbCreatePlayer);
exports.playerRouter.get("/", findAllPlayers_controller_1.DbReturnAllPlayers);
