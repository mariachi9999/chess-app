"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const game_router_1 = require("./game/game.router");
const move_router_1 = require("./move/move.router");
const player_router_1 = require("./player/player.router");
exports.router = express_1.default.Router();
// router endpoints
exports.router.use("/player", player_router_1.playerRouter);
exports.router.use("/game", game_router_1.gameRouter);
exports.router.use("/move", move_router_1.moveRouter);
exports.router.use("*", function (req, res) {
    res.sendStatus(404);
});
