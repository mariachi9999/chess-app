import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const playerSchema = new Schema({
  username: { type: String },
  password: { type: String, default: 1234 },
  registerDate: { type: Date, default: Date.now },
  wins: { type: Number, default: 0 },
  draws: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
});

export default Mongoose.model("Player", playerSchema);
