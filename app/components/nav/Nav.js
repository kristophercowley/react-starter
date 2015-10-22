import './Nav.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class extends Component {
  isActive(route){
    return route === this.props.location.pathname ? 'active' : '';
  }
  render(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-head">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar-collapse"
                    aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li role="presentation" className={this.isActive('/')}>
              <Link to="/">Home</Link>
            </li>
            <li role="presentation" className={this.isActive('/about')}>
              <Link to="/about">About</Link>
            </li>
            <li role="presentation" className={this.isActive('/activities')}>
              <Link to="/activities">Activities</Link>
            </li>
            <li role="presentation" className={this.isActive('/activity/1')}>
              <Link to="/activity/1">Activity 1</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}