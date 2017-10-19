import { fromJS } from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './modules';
import { data } from './demo';

export function configureStore() {
  let middleware = [thunk];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(reducers, fromJS(data), enhancer);
  module.hot.accept('./modules', () => {
    store.replaceReducer(require('./modules').default);
  });
  return store;
}
