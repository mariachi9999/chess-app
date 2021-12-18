import express from "express";
import { appRouter } from "../contexts/playerManagement/presentation/playerRoutes";
export const router = express.Router();

// router endpoints
router.use("/player", appRouter);
