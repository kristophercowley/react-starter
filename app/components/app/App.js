import './App.scss';

import React, {Component} from 'react'
import { Link } from 'react-router'
import Header from '../header/Header';

let state = {
  title: 'Title set in state'
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title={state.title} location={this.props.location}/>
        {this.props.children}
      </div>
    )
  }
}