import mongoose from "mongoose";
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  username: String, // String is shorthand for {type: String}
  registerDate: {
    type: Date,
    default: Date.now,
  },
  games: {
    wins: { type: Number, default: 0 },
    draws: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
  },
});

export const PlayerModel = mongoose.model("Player", PlayerSchema);
