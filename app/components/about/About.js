import './About.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

var About = class extends Component {
  render(){
    return (
      <div>
        About content
      </div>
    );
  }
};

About = connect(state => state)(About);

export default About