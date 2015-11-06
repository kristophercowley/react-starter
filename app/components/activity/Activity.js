import React, {Component, PropTypes} from 'react';
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
    const activities = this.props.activities || [];
    const id = this.props.params ? this.props.params.id : null;
    const activity = this._getActivity(activities, id);
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

Activity.propTypes = {
  activities: PropTypes.array.isRequired
};

export function search(state) {
  return {
    activities: state.activities
  };
}

export default connect(search)(Activity);