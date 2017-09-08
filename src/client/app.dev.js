import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import RedBox from "redbox-react";

import configureStore from "../shared/configureStore";
import Root from "../shared/components/root-container";
import "./global.scss";

const rootEl = document.getElementById("root");
const store = configureStore();

const renderError = error => {
  ReactDOM.render(<RedBox error={error} />, rootEl);
};

try {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Root />
      </AppContainer>
    </Provider>,
    rootEl
  );
} catch (error) {
  renderError(error);
}

if (module.hot) {
  module.hot.accept("../shared/components/root-container", () => {
    const Root = require("../shared/components/root-container").default;
    try {
      ReactDOM.render(
        <Provider store={store}>
          <AppContainer>
            <Root />
          </AppContainer>
        </Provider>,
        rootEl
      );
    } catch (error) {
      renderError(error);
    }
    if (console.clear) console.clear();
  });
}
