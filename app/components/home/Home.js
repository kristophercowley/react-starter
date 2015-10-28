import './Home.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Home extends Component {
  render(){
    return (
      <div>
        <p>
          Home content
        </p>
      </div>
    );
  }
};

export default connect(state => state)(Home);