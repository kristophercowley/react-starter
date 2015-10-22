import React, {Component} from 'react';

export default class extends Component {
  render(){
    console.error(this.props.error);
    return (
      <div>Error Page</div>
    );
  }
}