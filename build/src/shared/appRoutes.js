"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const gameRoutes_1 = require("../contexts/gameManagement/presentation/gameRoutes");
const moveRoutes_1 = require("../contexts/gameManagement/presentation/moveRoutes");
const playerRoutes_1 = require("../contexts/gameManagement/presentation/playerRoutes");
exports.router = express_1.default.Router();
// router endpoints
exports.router.use("/player", playerRoutes_1.playerRouter);
exports.router.use("/game", gameRoutes_1.gameRouter);
exports.router.use("/move", moveRoutes_1.moveRouter);
