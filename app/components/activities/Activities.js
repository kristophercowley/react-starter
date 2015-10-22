import React, {Component} from 'react';
import {connect} from 'react-redux';

var Activities = class extends Component {
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            Activities
            <ul>
              {this.props.activities.map(function(activity, key){
                return <li key={key}>{activity.title}</li>;
              })}
            </ul>
          </div>
          <div className="col-sm-8">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

function search(state){
  return {
    activities: state.activities,
    myActivities: state.myActivities
  }
}

Activities = connect(search)(Activities);

export default Activities;