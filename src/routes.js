import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/">
    <IndexRoute component={HomeView} />
    <Route path="*" status={404} component={NotFoundView} />
  </Route>
);
