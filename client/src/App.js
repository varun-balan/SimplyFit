import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Auth from "./components/Auth/Auth.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
