import React from 'react';
import {render} from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {ReduxRouter, reduxReactRouter} from 'redux-router';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import createHistory from 'history/lib/createBrowserHistory';

import routes from './routes';
import rootReducer from './reducers';

let store = compose(
  applyMiddleware(thunk),
  autoRehydrate(),
  reduxReactRouter({ routes, createHistory })
)(createStore)(rootReducer);

persistStore(store);

render(
  <div>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById('app')
);