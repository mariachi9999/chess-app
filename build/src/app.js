"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import * as dotenv from "dotenv";
// dotenv.config();
const app_router_1 = require("./contexts/gameManagement/presentation/app.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
// THIS STRING IS THE LINK TO OUR MONGODB
const url = "mongodb://localhost:27017/chess-db";
// mongodb connection
// to solve useNewUrlParser bug, must downgraded mongodb version to 5.13.8.
// This property avoid the DeprecationWarning.
// https://stackoverflow.com/questions/68970788/getting-no-overload-matches-this-call-running-mongoose-with-typescript-and-expre
mongoose_1.default
    .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(() => {
    const db = mongoose_1.default.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
})
    .then((result) => app.use(app_router_1.router))
    .then((result) => app.listen(PORT, () => console.log(`app running on port ${PORT}`)))
    .catch((err) => console.log(err));
