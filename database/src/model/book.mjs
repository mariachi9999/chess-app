import Mongoose from "mongoose";

const Schema = Mongoose.Schema;

const bookSchema = new Schema({
    author: { type: String },
    title: { type: String, default: 'No Title' },
    date: { type: Date, default: Date.now },
    year: { type: Number },
});

export default Mongoose.model('Book', bookSchema);