import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">
      <div className="navbar-brand text-primary p-md-2">
        <Link style={{ textDecoration: "none" }} to="/">
          SimplyFit
        </Link>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <div className="nav-link">
              <Link style={{ textDecoration: "none" }} to="/profile">
                {/*Profile*/}
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div>
        {user?.result ? (
          <ul className="nav justify-content-end">
            <li className="nav-item p-2">{user?.result.name}</li>

            {user?.result.imageUrl != null && (
              <li className="nav-item">
                <img
                  className="avatar"
                  src={user?.result.imageUrl}
                  alt={user?.result.name}
                />
              </li>
            )}

            <li className="nav-item">
              <button
                onClick={logout}
                type="button"
                className="btn btn-warning text-dark"
              >
                <Link style={{ textDecoration: "none" }} to="/auth">
                  Logout
                </Link>
              </button>
            </li>
          </ul>
        ) : (
          <button type="button" className="btn btn-outline-success">
            <Link style={{ textDecoration: "none" }} to="/auth">
              Log In
            </Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
