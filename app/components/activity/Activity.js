import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Activity extends Component {
  render() {
    let title = '';
    if (this.props.activity) {
      title = this.props.activity.title;
    }
    return (
      <div>
        <h1>
          {title}
        </h1>
        <p>

        </p>
      </div>
    );
  }
}

export function search(state) {
  const id = parseInt(state.router.params.id);
  return {
    activity: state.activities.filter(function(activity) {
      return activity.id === id;
    }).shift()
  };
}

export default connect(search)(Activity);