"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldConversion = void 0;
const fieldConversion = (string) => {
    let notation = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
    ];
    let adjusted = string
        .split("")
        .filter((char) => notation.includes(char));
    return adjusted.join("").slice(-2);
};
exports.fieldConversion = fieldConversion;
