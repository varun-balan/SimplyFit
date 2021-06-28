import express from "express";
const router = express.Router();

import {
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/activities.js";

router.get("/", getWorkouts);
router.post("/", createWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;
