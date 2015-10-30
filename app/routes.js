import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/app/App';
import About from './components/about/About';
import Activities from './components/activities/Activities';
import Activity from './components/activity/Activity';
import Home from './components/home/Home';

export const namedRoutes = [
  {route: '/', text: 'Home'},
  {route: '/about', text: 'About'},
  {route: '/activities', text: 'Activities'}
];

export default (
  <Route component={App} path="/">
    <IndexRoute component={Home} title="Home"/>
    <Route component={About} path="about" title="About" />
    <Route component={Activities} path="activities" title="Activities">
      <Route component={Activity} path="/activity/:id" title={getActivityTitle} />
    </Route>
  </Route>
);

function getActivityTitle(props) {
  let id       = parseInt(props.params.id);
  let activity = props.activities.filter(function(activity) {
    return id === activity.id;
  }).shift();
  if (activity) {
    return activity.title;
  }
  return `Activity ${props.params.id}`;
}