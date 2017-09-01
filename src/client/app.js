import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "../shared/configureStore";
import Root from "../shared/components/root-container";
import "./global.scss";

const rootEl = document.getElementById("root");
const store = configureStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootEl
);
