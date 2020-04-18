import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../action/shared';

class App extends Component {
  componentDidMount(){ 
    // so here we use connect() to acccess the store's dispatch function
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)