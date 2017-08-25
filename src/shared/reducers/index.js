import { combineReducers } from "redux-immutable";
import topNav from "./top-nav";
import modals from "./modals";
import builder from "./builder";

export default combineReducers({ topNav, modals, builder });
