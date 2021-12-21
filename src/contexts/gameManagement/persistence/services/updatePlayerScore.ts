import { PlayerModel } from "../models/playerModel";

export const DbUpdatePlayerScore = async (username: any, result: any) => {
  let player = await PlayerModel.findOne({ username: username });
  console.log(player);
  if (player !== null) {
    try {
      if (result === "win") {
        player.score.wins = player.score.wins + 1;
      }
      if (result === "lost") {
        console.log(player);
        player.score.losses = player.score.losses + 1;
      }
      if (result === "draw") {
        player.score.draws = player.score.draws + 1;
      }
      console.log(player.score);
      await PlayerModel.findOneAndUpdate(
        { username: username },
        { score: player.score },
        {
          new: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
};
