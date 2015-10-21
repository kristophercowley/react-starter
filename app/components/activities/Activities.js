import React, {Component} from 'react';

export default class Activities extends Component {
  render(){
    return (
      <div>
        Activities
        {this.props.children}
      </div>
    );
  }
}