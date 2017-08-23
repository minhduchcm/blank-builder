import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

const rootEl = document.getElementById("root");

let render = () => {
  const RootContainer = require("../shared/containers/RootContainer").default;
  ReactDOM.render(<RootContainer />, rootEl);
};

if (module.hot) {
  const renderApp = render;
  const renderError = error => {
    const RedBox = require("redbox-react");
    ReactDOM.render(<RedBox error={error} />, rootEl);
  };

  render = () => {
    try {
      renderApp();
    } catch (error) {
      renderError(error);
    }
  };

  module.hot.accept("../shared/containers/RootContainer", () => {
    setTimeout(render);
  });
}

render();
