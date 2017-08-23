import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

const rootEl = document.getElementById("root");

const RootContainer = require("../shared/containers/RootContainer").default;
ReactDOM.render(<RootContainer />, rootEl);
