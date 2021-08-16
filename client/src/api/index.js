import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchWorkouts = () => API.get("/workouts");
export const createWorkout = (newWorkout) => API.post("/workouts", newWorkout);
export const deleteWorkout = (id) => API.delete(`/workouts/${id}`);
export const updateWorkout = (id, updatedWorkout) =>
  API.patch(`/workouts/${id}`, updatedWorkout);

export const signIn = (authData) => API.post("/users/signin", authData);
export const signUp = (authData) => API.post("/users/signup", authData);
