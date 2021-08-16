import { combineReducers } from "redux";

import activities from "./activities.js";
import auth from "./auth.js";

export const reducers = combineReducers({ activities, auth });
