import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Activity extends Component {
  _getActivity(activities, id){
    let activity = {title: 'Activity not found'};
    activities.forEach(function(a){
      if(a.id == id){
        activity = a;
      }
    });
    return activity;
  }
  render() {
    const activity = this._getActivity(this.props.activities, this.props.params.id);
    return (
      <div>
        <h1>{activity.title}</h1>
        <p>
          {activity.description}
        </p>
      </div>
    );
  }
}

export function search(state) {
  return {
    activities: state.activities
  };
}

export default connect(search)(Activity);