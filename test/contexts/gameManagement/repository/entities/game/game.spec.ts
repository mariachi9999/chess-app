import Game from "../../../../../../src/contexts/gameManagement/repository/entities/game/game";

describe("Test if Game class implements IGame interface", () => {
  let white_player = "mariachi9999";
  it("Should be an instance of Game", () => {
    let game = new Game(white_player);
    expect(game).toBeInstanceOf(Game);
  });
  it("Other object is not an instance of Game", () => {
    let game = {};
    expect(game).not.toBeInstanceOf(Game);
  });
  it("Game has a game_id property", () => {
    let game = new Game(white_player);
    expect(game).toHaveProperty("game_id");
  });
  it("Game has a white property", () => {
    let game = new Game(white_player);
    expect(game).toHaveProperty("white");
  });
  it("Game has a white property", () => {
    let game = new Game(white_player);
    expect(game.white).toEqual(white_player);
  });
  it("Game hasn´t a otro property", () => {
    let game = new Game(white_player);
    expect(game).not.toHaveProperty("otro");
  });
});
