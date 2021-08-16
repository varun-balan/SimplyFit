import mongoose from "mongoose";

import workoutTypes from "./workoutType.js";

const workoutSchema = mongoose.Schema({
  workoutType: {
    type: String,
    enum: workoutTypes,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  equipmentUsed: {
    type: String,
    enum: ["Barbell", "Dumbbell", "Kettlebell", "No Weights"],
    required: false,
  },
  setsCompleted: {
    type: Number,
    default: 0,
    required: false,
  },
  repsCompleted: {
    type: Number,
    default: 0,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: {
    type: String,
    required: true,
  },
});

const WorkoutSchema = mongoose.model("createWorkoutSchema", workoutSchema);

export default WorkoutSchema;
