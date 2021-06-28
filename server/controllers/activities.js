import WorkoutSchema from "../models/workoutSchema.js";
import mongoose from "mongoose";

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutSchema.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createWorkout = async (req, res) => {
  const body = req.body;
  const newWorkout = new WorkoutSchema(body);
  try {
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`Workout with id ${id} does not exist`);
  }

  await WorkoutSchema.findByIdAndRemove(id);

  res.json({ message: "Workout Deleted Successfully" });
};

export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const {
    workoutType,
    weight,
    equipmentUsed,
    setsCompleted,
    repsCompleted,
    createdAt,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`Workout with id ${id} does not exist`);
  }

  const updatedWorkout = {
    workoutType,
    weight,
    equipmentUsed,
    setsCompleted,
    repsCompleted,
    createdAt,
    _id: id,
  };

  await WorkoutSchema.updateOne({ _id: id }, updatedWorkout);

  res.json(updatedWorkout);
};
