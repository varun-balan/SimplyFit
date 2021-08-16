import React, { useState, useEffect } from "react";
import workoutTypes from "../workoutType.js";

import { useDispatch, useSelector } from "react-redux";
import { createWorkout, updateWorkout } from "../../actions/activities.js";

const AddActivityBar = ({ currentId, setCurrentId }) => {
  const [workoutData, setWorkoutData] = useState({
    workoutType: "",
    equipmentUsed: "",
    setsCompleted: "",
    repsCompleted: "",
    weight: "",
  });

  const workout = useSelector((state) =>
    currentId
      ? state.activities.find((workout) => workout._id === currentId)
      : null
  );

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (workout) setWorkoutData(workout);
  }, [workout]);

  const clear = () => {
    setCurrentId(0);
    setWorkoutData({
      workoutType: "",
      equipmentUsed: "",
      setsCompleted: "",
      repsCompleted: "",
      weight: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createWorkout(workoutData));
    } else {
      dispatch(updateWorkout(currentId, workoutData));
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <p className="text-dark main-home-text">
        Please Log In or Sign Up to Continue
      </p>
    );
  }

  return (
    <div className="p-md-5">
      <p className="text-dark main-home-text">
        {currentId === 0 ? "Log New" : "Editing"} Workout
      </p>
      <div className="container">
        <hr />
        <form onSubmit={handleSubmit} id="addWorkout">
          <div className="row">
            <div className="col form-group p-2">
              <label htmlFor="workoutType" className="text-info">
                Workout Type
              </label>
              <select
                className="form-control"
                value={workoutData.workoutType}
                // Learn the below line of syntax
                onChange={(e) =>
                  setWorkoutData({
                    ...workoutData,
                    workoutType: e.target.value,
                  })
                }
              >
                {workoutTypes.map((workoutType) => (
                  <option key={workoutType}>{workoutType}</option>
                ))}
              </select>
            </div>
            <div className="col form-group">
              <label htmlFor="equipmentUsed" className="text-info">
                <p>Equipment Used</p>
              </label>
              <select
                className="form-control"
                value={workoutData.equipmentUsed}
                onChange={(e) =>
                  setWorkoutData({
                    ...workoutData,
                    equipmentUsed: e.target.value,
                  })
                }
              >
                <option key="default" />
                <option key="barbell">Barbell</option>
                <option key="dumbbell">Dumbbell</option>
                <option key="kettlebell">Kettlebell</option>
                <option key="noweight">No Weights</option>
              </select>
            </div>
          </div>

          <div className="row p-2">
            <div className="col form-group">
              <label htmlFor="setsCompleted" className="text-info">
                Sets
              </label>
              <input
                type="text"
                className="form-control"
                value={workoutData.setsCompleted}
                onChange={(e) =>
                  setWorkoutData({
                    ...workoutData,
                    setsCompleted: e.target.value,
                  })
                }
              />
            </div>
            <div className="col form-group">
              <label htmlFor="repsCompleted" className="text-info">
                Reps
              </label>
              <input
                type="text"
                className="form-control"
                value={workoutData.repsCompleted}
                onChange={(e) =>
                  setWorkoutData({
                    ...workoutData,
                    repsCompleted: e.target.value,
                  })
                }
              />
            </div>
            <div className="col form-group">
              <label htmlFor="weight" className="text-info">
                Weight (kg)
              </label>
              <input
                type="text"
                className="form-control"
                value={workoutData.weight}
                onChange={(e) =>
                  setWorkoutData({ ...workoutData, weight: e.target.value })
                }
              />
            </div>
          </div>
          <hr />
          <button type="submit" className="btn btn-outline-primary m-1">
            {currentId === 0 ? "Add" : "Save"}
          </button>
          <button className="btn btn-outline-danger m-1" onClick={clear}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddActivityBar;
