"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const playerRoutes_1 = require("../contexts/playerManagement/presentation/playerRoutes");
exports.router = express_1.default.Router();
// router endpoints
exports.router.use("/player", playerRoutes_1.appRouter);
