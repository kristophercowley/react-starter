import React, {Component} from 'react';

export default class Activity extends Component {
  render(){
    return (
      <div>
        Activity
        id = {this.props.params.id}
      </div>
    );
  }
}