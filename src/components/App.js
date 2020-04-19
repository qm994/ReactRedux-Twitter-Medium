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
    return (
      <div>
        {
          this.props.loading === true
          ? null
          : <Dashboard />
        }
      </div>
    )
  }
};

// The App component will subscribe to the Redux store updates
function mapStateToProps({authedUser}){
  return {
      loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)