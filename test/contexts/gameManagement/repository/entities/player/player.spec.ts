import Player from "../../../../../../src/contexts/gameManagement/repository/entities/player/player";

describe("Test if Player class implements IPlayer interface", () => {
  let username = "mariachi9999";
  it("Should be an instance of Player", () => {
    let player = new Player(username);
    expect(player).toBeInstanceOf(Player);
  });
  it("Other object is not an instance of Player", () => {
    let player = { surname: "Gates" };
    expect(player).not.toBeInstanceOf(Player);
  });
  it("PLayer has a game_id property", () => {
    let player = new Player(username);
    expect(player).toHaveProperty("username");
  });
  it("PLayer has a white property", () => {
    let player = new Player(username);
    expect(player.username).toEqual(username);
  });
  it("PLayer hasn´t a otro property", () => {
    let player = new Player(username);
    expect(player).not.toHaveProperty("otro");
  });
});
