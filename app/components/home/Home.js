import './Home.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Home extends Component {
  render(){
    return (
      <div>
        Home content
      </div>
    );
  }
};

export default connect(state => state)(Home);