import Mongoose from 'mongoose'

export async function connect() {
    await Mongoose.connect('mongodb://localhost:27017/books');
}

export function disconnect() {
    Mongoose.connection.close();
}