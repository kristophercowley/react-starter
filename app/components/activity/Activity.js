import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Activity extends Component {
  render(){
    return (
      <div>
        Activity Details
      </div>
    );
  }
};

export default connect()(Activity);