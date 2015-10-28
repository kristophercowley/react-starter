import './About.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

// Export for testing
export class About extends Component {
  render(){
    return (
      <div>
        <p>
          Content
        </p>
      </div>
    );
  }
};

// Default export connected component
export default connect(state => state)(About)