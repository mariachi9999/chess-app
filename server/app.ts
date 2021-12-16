import express, { Router } from "express";
import mongoose from "mongoose";
// import * as dotenv from "dotenv";
// dotenv.config();
import { router } from "./Core/ApplicationServices/routes/routes";

const app = express();
app.use(express.json());

const PORT = 8000;

// THIS STRING IS THE LINK TO OUR MONGODB
const url = "mongodb://localhost:27017/players";

// mongodb connection
// to solve useNewUrlParser bug, must downgraded mongodb version to 5.13.8.
// This property avoid the DeprecationWarning.
// https://stackoverflow.com/questions/68970788/getting-no-overload-matches-this-call-running-mongoose-with-typescript-and-expre
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });
  })
  .then((result) => app.use(router))
  .then((result) =>
    app.listen(PORT, () => console.log(`app running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
