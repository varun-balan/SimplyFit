import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">
          <a className="navbar-brand text-primary p-md-2" href="/">
              SimplyFit
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                      <a className="nav-link" href="/">
                          Profile
                      </a>
                  </li>

              </ul>
          </div>

          <button className="btn btn-outline-success">Log In</button>
      </nav>
    );
  }
}

export default NavBar;
