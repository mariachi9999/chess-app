"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveRouter = void 0;
const express_1 = __importDefault(require("express"));
const responseToMove_controller_1 = require("../../persistence/controllers/move/responseToMove.controller");
exports.moveRouter = express_1.default.Router();
exports.moveRouter.put("/", responseToMove_controller_1.responseToMove);
