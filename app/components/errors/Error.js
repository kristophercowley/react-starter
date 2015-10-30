import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div>
        <h1>Error</h1>
        <p>
          {this.props.error}
        </p>
      </div>
    );
  }
}