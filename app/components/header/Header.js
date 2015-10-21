import './Header.scss';

import React, {Component} from 'react';
import Nav from '../nav/Nav.js';

export default class Header extends Component {
  render(){
    return (
      <div className="Header">
        <Nav location={this.props.location} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}