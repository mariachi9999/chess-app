import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const { Schema } = mongoose;

const id: string = uuidv4();
const GamesSchema = new Schema({
  game_id: {
    type: Number,
    default: id,
  },
  white: String,
  black: String,
  board: { table: String, last_move: {} },
  status: String,
});

export const GamesModel = mongoose.model("Games", GamesSchema);
