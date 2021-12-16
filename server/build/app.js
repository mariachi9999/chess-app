"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// import * as dotenv from "dotenv";
// dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
// THIS STRING IS THE LINK TO OUR MONGODB
const url = "mongodb://localhost:27017/players";
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
    .then((result) => app.use(express_1.Router))
    .then((result) => app.listen(PORT, () => console.log(`app running on port ${PORT}`)))
    .catch((err) => console.log(err));
