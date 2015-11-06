import React, {Component, PropTypes} from 'react';

export class Error extends Component {
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

Error.propTypes = {
  error: PropTypes.string.isRequired
};

export default Error;