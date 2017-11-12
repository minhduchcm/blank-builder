import { fromJS } from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './modules';
import { data } from './demo';

export function configureStore() {
  let middleware = [
    thunk,
    createLogger({
      stateTransformer: state => state.toJS()
    })
  ];

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(reducers, fromJS(data), enhancer);
  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(require('./modules').default);
    });
  }
  return store;
}
