import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

const rootEl = document.getElementById("root");

const Root = require("../shared/containers/root-container").default;
ReactDOM.render(<Root />, rootEl);
