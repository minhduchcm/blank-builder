import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "../shared/configureStore";
import Root from "../shared/containers/root-container";

const rootEl = document.getElementById("root");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Root />
    </AppContainer>
  </Provider>,
  rootEl
);
