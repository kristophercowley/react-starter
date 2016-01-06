import React, {Component, PropTypes} from 'react';

export default (props) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{props.error}</p>
    </div>
  );
};