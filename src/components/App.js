import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../action/shared';

import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount(){ 
    // so here we use connect() to acccess the store's dispatch function
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default connect()(App)