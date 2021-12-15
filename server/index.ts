import express from "express";
const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("iMentor server is up and running"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
