import React from 'react';
import {render} from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';
import { autoRehydrate, persistStore } from 'redux-persist';
import history from './history';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import rootReducer from './reducers';

// TODO: Remove with React 1.0. Used for Material-UI tap events
injectTapEventPlugin();

let store = compose(
  applyMiddleware(thunk),
  autoRehydrate()
)(createStore)(rootReducer);

persistStore(store);

render(
  <div>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  </div>,
  document.getElementById('app')
);