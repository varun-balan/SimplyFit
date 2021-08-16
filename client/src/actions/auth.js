import { AUTH } from "../constants/actionTypes.js";
import * as api from "../api";

export const signIn = (authData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(authData);
    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (authData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
