import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

export default function configureStore() {
  let middlewares = [thunk];
  if (__DEV__) {
    middlewares.push(
      require("redux-logger").createLogger({
        stateTransformer: state => state && state.toJS()
      })
    );
  }

  const store = createStore(reducers, compose(applyMiddleware(...middlewares)));
  if (__DEV__) {
    if (module.hot) {
      module.hot.accept("./reducers", () => {
        store.replaceReducer(require("./reducers").default);
      });
    }
  }
  return store;
}
