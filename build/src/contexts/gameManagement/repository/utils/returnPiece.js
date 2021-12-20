"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnPiece = void 0;
const returnPiece = (letter) => {
    let piece;
    switch (letter) {
        case "r":
            piece = "Rook";
            break;
        case "n":
            piece = "Knight";
            break;
        case "b":
            piece = "Bishop";
            break;
        case "q":
            piece = "Queen";
            break;
        case "k":
            piece = "King";
            break;
        case "p":
            piece = "Pawn";
            break;
        default:
            piece = "Messi";
    }
    return piece;
};
exports.returnPiece = returnPiece;
