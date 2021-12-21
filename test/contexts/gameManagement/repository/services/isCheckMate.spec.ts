import { isCheckMate } from "../../../../../src/contexts/gameManagement/repository/services/isCheckMate";
const { Chess } = require("chess.js");

describe("Test isCheckMate service", () => {
  it("Should return true", () => {
    let table = new Chess(
      "r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4"
    );
    let result = isCheckMate(table);
    expect(result).toBeTruthy();
  });
  it("Should return false", () => {
    let table = new Chess(
      "rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPPPP1PP/RNBQKBNR w KQkq - 1 3"
    );
    let result = isCheckMate(table);
    expect(result).toBeFalsy();
  });
});
