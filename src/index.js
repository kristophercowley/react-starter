import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import {Provider} from 'react-redux';

import './utilities/perf';
import {isBrowserModern} from './utilities/browser';
import {trackPageViews} from './utilities/tracking';
import routes from './routes';
import configureStore from './store';

trackPageViews();

if (isBrowserModern()) {
  const store = configureStore();
  const history = syncHistoryWithStore(browserHistory, store);
  render(
    <Provider store={store}>
      <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('root')
  );
} else {
  document.body.innerHTML = `
    <h1>Browser not supported</h1>
    Please try again using a modern browser such as <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
  `;
}
