import { isBlack } from "../../../../../src/contexts/gameManagement/repository/services/isBlack";

describe("Test isBlack service", () => {
  it("Should return false", () => {
    let color = "w";
    let result = isBlack(color);
    expect(result).toBeFalsy();
  });
  it("Should return true", () => {
    let color = "b";
    let result = isBlack(color);
    expect(result).toBeTruthy();
  });
});
