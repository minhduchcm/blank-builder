import { combineReducers } from "redux-immutable";
import topNav from "./top-nav";
import builder from "./builder";

export default combineReducers({ topNav, builder });
