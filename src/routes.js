import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './layouts/App';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="*" component={NotFoundView} status="404" />
  </Route>
);
