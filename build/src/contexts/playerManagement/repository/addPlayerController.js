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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlayerToDB = void 0;
const playerModel_1 = require("../persistence/models/playerModel");
// POST endpoint
const addPlayerToDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const player = new playerModel_1.PlayerModel(req.body);
    try {
        yield player.save();
        res.send(player);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addPlayerToDB = addPlayerToDB;
