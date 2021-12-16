"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const models_1 = require("../database/schemas/models");
exports.app = (0, express_1.default)();
// POST endpoint
exports.app.post("/add_player", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const player = new models_1.PlayerModel(req.body);
    try {
        yield player.save();
        res.send(player);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// GET endpoint
exports.app.get("/players", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const players = yield models_1.PlayerModel.find({});
    try {
        res.send(players);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
