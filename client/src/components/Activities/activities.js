import React from "react";
import { useSelector } from "react-redux";

import Workout from "./workout/workout.jsx";

const Activities = ({ setCurrentId }) => {
  const activities = useSelector((state) => state.activities);

  return (
    <div className="container-fluid p-3">
      {activities.map((workout) => (
        <div key={workout._id} className="row p-2">
          <Workout workout={workout} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Activities;
