import express from "express";
const router = express.Router();

import {
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/activities.js";

import auth from "../middleware/auth.js";

router.get("/", getWorkouts);
router.post("/", auth, createWorkout);
router.patch("/:id", auth, updateWorkout);
router.delete("/:id", auth, deleteWorkout);

export default router;
