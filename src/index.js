import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './redux';
import Root from './modules/root';
import registerServiceWorker from './registerServiceWorker';
import './style.scss';

const rootEl = document.getElementById('root');
const store = configureStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootEl
);

module.hot.accept('./modules/root', () => {
  const Root = require('./modules/root').default;
  render(
    <Provider store={store}>
      <Root />
    </Provider>,
    rootEl
  );
});

registerServiceWorker();
