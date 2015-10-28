import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

export class ActivityItem extends Component {
  render(){
    return (
      <li>
        <Link to={`/activity/${this.props.activity.id}`}>
          {this.props.activity.title}
        </Link>
      </li>
    );
  }
}


export class ActivitiesList extends Component {
  render(){
    return (
      <ul>
        {this.props.activities.map(function(activity, key){
          return <ActivityItem activity={activity} key={key} />
        })}
      </ul>
    );
  }
}

// Export here for testing
export class Activities extends Component {
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            Activities
            <ActivitiesList activities={this.props.activities} />
          </div>
          <div className="col-sm-8">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

// State to use
export function search(state){
  return {
    activities: state.activities,
    myActivities: state.myActivities
  }
}

// Default export connected component
export default connect(search)(Activities);