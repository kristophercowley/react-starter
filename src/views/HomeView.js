import React, {Component} from 'react';

import '../styles/views/HomeView.scss';
import DefaultLayout from '../layouts/DefaultLayout';

export default class extends Component {
  render(){
    return (
      <DefaultLayout wrapClass="HomeView" {...this.props}>
        <h1>Home</h1>
      </DefaultLayout>
    );
  }
}
