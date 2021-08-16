import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signIn, signUp } from "../../actions/auth.js";
import google_client_id from "./google_client_id.js";

const Auth = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const initialAuthState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [authData, setAuthData] = useState(initialAuthState);

  const handleSubmit = (e) => {
    // Below is required to stop the page from automatically refreshing
    e.preventDefault();
    // console.log(authData);
    if (isSignedUp) {
      dispatch(signIn(authData, history));
    } else {
      dispatch(signUp(authData, history));
    }
  };

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignedUp((prevIsSignup) => !prevIsSignup);
  };

  const googleSuccess = async (res) => {
    // below uses the optional chaining operator - instead of producing an error, will short-circuit to undefined
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Login Failed. Try Again");
  };

  return (
    <div className="container authBackground p-2">
      <form onSubmit={handleSubmit} id="authForm">
        <div className="container-fluid">
          {!isSignedUp && (
            <div>
              <div className="row">
                <div className="col form-group p-2">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="col form-group p-2 ">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col form-group p-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col form-group p-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col form-group p-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {isSignedUp && (
            <div>
              <div className="row p-2">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>

              <div className="row p-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>

        <hr />

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success btn-lg">
            {isSignedUp ? "Log In" : "Sign Up"}
          </button>
          <GoogleLogin
            clientId={google_client_id}
            render={(renderProps) => (
              <button
                className="btn btn-primary btn-lg"
                onClick={renderProps.onClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-google"
                  viewBox="0 0 20 20"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                &nbsp;&nbsp; {isSignedUp ? "Log In" : "Sign Up"} With Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </form>
      <button className="switchAuthButton" onClick={switchMode}>
        {isSignedUp
          ? "Don't have an account? Sign Up"
          : "Already have an account? Log In"}
      </button>
    </div>
  );
};

export default Auth;
