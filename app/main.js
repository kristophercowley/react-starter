import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/app/App';
import About from './components/about/About';
import Activities from './components/activities/Activities';
import Activity from './components/activity/Activity';
import Home from './components/home/Home';

let router = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}/>
      <Route path="activities" component={Activities}>
        <Route path="/activity/:id" component={Activity} />
      </Route>
    </Route>
  </Router>
);



ReactDOM.render(
  router,
  document.getElementById('app')
);