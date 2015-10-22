import './Home.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

var Home = class extends Component {
  render(){
    return (
      <div>
        Home content
      </div>
    );
  }
};

Home = connect(state => state)(Home);

export default Home