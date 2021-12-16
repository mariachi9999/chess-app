import mongoose from "mongoose";
const { Schema } = mongoose;

const GamesSchema = new Schema({
  id: {
    type: Number,
    default: new Date().getTime(),
  },
});

export const GamesModel = mongoose.model("Games", GamesSchema);
