import Board from "../../../../../../src/contexts/gameManagement/repository/entities/board/board";

describe("Test if board class implements IBoard interface", () => {
  it("Should be an instance of Board", () => {
    let board = new Board();
    expect(board).toBeInstanceOf(Board);
  });
  it("Other object is not an instance of Board", () => {
    let board = {};
    expect(board).not.toBeInstanceOf(Board);
  });
  it("board has a table property", () => {
    let board = new Board();
    expect(board).toHaveProperty("table");
  });
  it("board has a last_move property", () => {
    let board = new Board();
    expect(board).toHaveProperty("last_move");
  });
  it("board hasn´t a otro property", () => {
    let board = new Board();
    expect(board).not.toHaveProperty("otro");
  });
});
