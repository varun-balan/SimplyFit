import axios from "axios";

const url = "http://localhost:5000/workouts";

export const fetchWorkouts = () => axios.get(url);
export const createWorkout = (newWorkout) => axios.post(url, newWorkout);
export const deleteWorkout = (id) => axios.delete(`${url}/${id}`);
export const updateWorkout = (id, updatedWorkout) =>
  axios.patch(`${url}/${id}`, updatedWorkout);
