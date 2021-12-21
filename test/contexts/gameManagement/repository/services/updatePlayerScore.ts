import IGame from "../../domain/model/IGame";
import { DbUpdatePlayerScore } from "../../persistence/services/updatePlayerScore";

export const updatePlayerScore = async (
  newBoard: { table: any; last_move: any },
  game: IGame,
  newStatus: String
) => {
  let { color } = newBoard.last_move;
  let white_player = game.white;
  let black_player = game.black;
  if (newStatus === "Jaque Mate") {
    if (color === "w") {
      await DbUpdatePlayerScore(white_player, "win");
      await DbUpdatePlayerScore(black_player, "lost");
    } else {
      await DbUpdatePlayerScore(black_player, "win");
      await DbUpdatePlayerScore(white_player, "lost");
    }
  } else {
    await DbUpdatePlayerScore(white_player, "draw");
    await DbUpdatePlayerScore(black_player, "draw");
  }
};
