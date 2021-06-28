// Reducers are functions that accepts state (activities) and actions then based on the action type,
// then does some logic, return state changed by the action

import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes.js";

export default (activities = [], action) => {
  // Using switch instead of if else
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...activities, action.payload];
    case DELETE:
      return activities.filter((workout) => workout._id !== action.payload);
    case UPDATE:
      return activities.map((workout) =>
        workout._id === action.payload._id ? action.payload : workout
      );
    default:
      return activities;
  }
};
