import { combineReducers } from "redux-immutable";
import topNav from "./top-nav";
import modals from "./modals";
import viewport from "./viewport";
import builder from "./builder";

export default combineReducers({ topNav, viewport, modals, builder });
