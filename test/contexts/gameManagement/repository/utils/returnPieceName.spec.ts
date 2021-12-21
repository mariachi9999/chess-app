import { returnPiece } from "../../../../../src/contexts/gameManagement/repository/utils/returnPieceName";

describe("Test returnPieceName service", () => {
  it("Should return Rook", () => {
    let letter = "r";
    let result = returnPiece(letter);
    expect(result).toEqual("Rook");
  });
  it("Should return Knight", () => {
    let letter = "n";
    let result = returnPiece(letter);
    expect(result).toEqual("Knight");
  });
  it("Should return Bishop", () => {
    let letter = "b";
    let result = returnPiece(letter);
    expect(result).toEqual("Bishop");
  });
  it("Should return Queen", () => {
    let letter = "q";
    let result = returnPiece(letter);
    expect(result).toEqual("Queen");
  });
  it("Should return King", () => {
    let letter = "k";
    let result = returnPiece(letter);
    expect(result).toEqual("King");
  });
  it("Should return Pawn", () => {
    let letter = "p";
    let result = returnPiece(letter);
    expect(result).toEqual("Pawn");
  });
  it("Should return Messi", () => {
    let letter = "a";
    let result = returnPiece(letter);
    expect(result).toEqual("Messi");
  });
});
