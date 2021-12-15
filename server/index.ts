import express from "express";
import mongoose from "mongoose";

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/players", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    const PORT = 8000;
    app.get("/", (req, res) => res.send("iMentor server is up and running"));
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
  });
