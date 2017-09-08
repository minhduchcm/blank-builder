import { combineReducers } from "redux-immutable";
import sections from "./sections";
import activeSection from "./active-section";

export default combineReducers({ sections, activeSection });
