import React, {Component} from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app/App';
import About from './components/about/About';
import Activities from './components/activities/Activities';
import Activity from './components/activity/Activity';
import Home from './components/home/Home';

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} title="Home" />
    <Route path="about" component={About} title="About"/>
    <Route path="activities" component={Activities} title="Activities">
      <Route path="/activity/:id" component={Activity} title={getActivityTitle}/>
    </Route>
  </Route>
);

export default routes;

function getActivityTitle(props){
  let id = parseInt(props.params.id);
  let activity = props.activities.filter(function(activity){
    return id === activity.id;
  }).shift();
  if(activity){
    return activity.title;
  }
  return `Activity ${props.params.id}`;
}