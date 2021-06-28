import React, { useState, useEffect } from "react";
import "./App.css";

import { getWorkouts } from "./actions/activities.js";
import NavBar from "./components/navbar.jsx";
import AddActivityBar from "./components/addActivityBar.jsx";

import { useDispatch } from "react-redux";
import Activities from "./components/Activities/activities";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [currentId, dispatch]);

  return (
    <div>
      <NavBar />
      <AddActivityBar currentId={currentId} setCurrentId={setCurrentId} />
      <hr />
      <Activities setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
