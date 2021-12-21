import { checkStatus } from "../../../../../src/contexts/gameManagement/repository/services/checkStatus";

describe("Test checkStatus service", () => {
  it("Should return Jaque Mate", () => {
    let new_board = {
      table:
        "r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4",
      last_move: {
        color: "b",
        from: "d8",
        to: "h4",
        flags: "n",
        piece: "q",
        san: "Qh4+",
      },
    };
    let status = checkStatus(new_board);
    expect(status).toEqual("Jaque Mate");
  });
  it("Should return Draw", () => {
    let new_board = {
      table: "r2q1rk1/pp2ppbp/1np2np1/2Q3B1/3PP1b1/2N2N2/PP3PPP/3RKB1R",
      last_move: {
        color: "b",
        from: "d8",
        to: "h4",
        flags: "n",
        piece: "q",
        san: "Qh4+",
      },
    };
    let status = checkStatus(new_board);
    expect(status).toEqual("Draw");
  });
  it("Should return Playing", () => {
    let new_board = {
      table: "rnb1kbnr/pppp1ppp/8/4P3/7q/8/PPPPP1PP/RNBQKBNR w KQkq - 1 3",
      last_move: {
        color: "b",
        from: "d8",
        to: "h4",
        flags: "n",
        piece: "q",
        san: "Qh4+",
      },
    };
    let status = checkStatus(new_board);
    expect(status).toEqual("Playing");
  });
});
