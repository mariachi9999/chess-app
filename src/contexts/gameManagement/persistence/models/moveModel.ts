import mongoose from "mongoose";
import { Piece } from "../interfaces/IPiece";
const { Schema } = mongoose;

const MovesSchema = new Schema({
  move_number: Array,
  player: String,
  from: String,
  to: String,
  piece: Piece,
  flag: String, // "-" for normal move, "x" for attack
});

export const MovesModel = mongoose.model("Moves", MovesSchema);
