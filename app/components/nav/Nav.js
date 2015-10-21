import './Nav.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {
  render(){
    console.log(this.props.location);
    return (
      <div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/activity/1">Activity 1</Link></li>
      </div>
    );
  }
}