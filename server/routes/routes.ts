import express from "express";
import { PlayerModel } from "../database/schemas/models";
export const router = express.Router();

// POST endpoint
router.post(
  "/add_player",
  async (req: express.Request, res: express.Response) => {
    const player = new PlayerModel(req.body);
    try {
      await player.save();
      res.send(player);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

// GET endpoint
router.get("/players", async (req: express.Request, res: express.Response) => {
  const players = await PlayerModel.find({});
  try {
    res.send(players);
  } catch (error) {
    res.status(500).send(error);
  }
});
