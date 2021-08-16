import React, { useEffect, useState } from "react";
import AddActivityBar from "./AddActivityBar";
import Activities from "../Activities/activities";
import { useDispatch } from "react-redux";
import { getWorkouts } from "../../actions/activities";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [currentId, dispatch]);

  return (
    <div>
      <AddActivityBar currentId={currentId} setCurrentId={setCurrentId} />
      <hr />

      <Activities setCurrentId={setCurrentId} />
    </div>
  );
};

export default Home;
