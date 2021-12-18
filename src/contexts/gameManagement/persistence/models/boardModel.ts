import mongoose from "mongoose";
const { Schema } = mongoose;

const BoardSchema = new Schema({
  game_id: Number,
  board: String, // would store an object stringify
  move_number: Array,
  turn_player: String,
  score: String, // would store an object stringify
});

export const BoardModel = mongoose.model("Board", BoardSchema);
