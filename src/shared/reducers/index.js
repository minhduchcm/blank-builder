import { combineReducers } from "redux-immutable";
import topNav from "./top-nav";
import modals from "./modals";
import viewport from "./viewport";
import tabPanel from "./tab-panel";
import builder from "./builder";
import configPanel from "./config-panel";

export default combineReducers({
  topNav,
  viewport,
  modals,
  tabPanel,
  configPanel,
  builder
});
