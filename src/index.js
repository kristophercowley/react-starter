import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';

import routes from './routes';
import configureStore from './store';
import Root from './layouts/Root';
import {isBrowserModern} from './utilities/browser';
import './utilities/perf';
import {trackPageViews} from './utilities/tracking';

trackPageViews();

if (isBrowserModern()) {
  const props = {
    history: browserHistory,
    routes:  routes,
    store:   configureStore()
  };
  render(
    <Root {...props} />,
    document.getElementById('root')
  );
} else {
  // Set error message for users with unsupported browsers
  const errorMessage = `
    <h1>Browser not supported</h1>
    Please try again using a modern browser such as <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>.
  `;
  document.body.innerHTML = errorMessage;
}
