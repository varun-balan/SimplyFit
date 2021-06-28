import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes.js";
import * as api from "../api";

// Action creators are functions that return actions.
// An action is just an object with a type and payload
// Redux thunk syntax: function returning function since asynchronous logic
// Goal: using redux to pass (dispatch) an action from data in backend

export const getWorkouts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWorkouts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createWorkout = (workout) => async (dispatch) => {
  try {
    const { data } = await api.createWorkout(workout);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteWorkout = (id) => async (dispatch) => {
  try {
    await api.deleteWorkout(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateWorkout = (id, workout) => async (dispatch) => {
  try {
    const { data } = await api.updateWorkout(id, workout);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
