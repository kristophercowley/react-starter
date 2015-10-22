import React, {Component} from 'react';
import {connect} from 'react-redux';

var Activity = class extends Component {
  render(){
    return (
      <div>
        Activity Details
      </div>
    );
  }
};

Activity = connect()(Activity);

export default Activity;