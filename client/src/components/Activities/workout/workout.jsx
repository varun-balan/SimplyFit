import React from "react";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../../../actions/activities";

function getDate(dateString) {
  const date = new Date(dateString);
  return date.toDateString();
}

const Workout = ({ workout, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (
    user?.result?.googleId === workout?.creator ||
    user?.result?._id === workout?.creator
  ) {
    return (
      <React.Fragment>
        <span className="workoutHeader">
          <div className="row p-1">
            <div className="col-3">Activity Type</div>
            <div className="col-1 text-center">Sets</div>
            <div className="col-1 text-center">Reps</div>
            <div className="col-2 text-center">Weight</div>
            <div className="col-2 text-center">Equipment</div>
            <div className="col-3 text-center">Date</div>
          </div>
        </span>
        <span className="workoutDisplay">
          <div className="row p-1">
            <div className="col-3">{workout.workoutType}</div>
            <div className="col-1 text-center">{workout.setsCompleted}</div>
            <div className="col-1 text-center">{workout.repsCompleted}</div>
            <div className="col-2 text-center">{workout.weight}</div>
            <div className="col-2 text-center">{workout.equipmentUsed}</div>
            <div className="col-3 text-center">
              {getDate(workout.createdAt)}
            </div>
          </div>
        </span>
        <span>
          <button
            className="deleteButton"
            onClick={() => dispatch(deleteWorkout(workout._id))}
          >
            Delete
          </button>
          <button
            className="editButton"
            onClick={() => setCurrentId(workout._id)}
          >
            Edit
          </button>
        </span>
      </React.Fragment>
    );
  }

  return null;
};

export default Workout;
