import React, { Component, Fragment  } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../action/shared';
import Dashboard from './Dashboard';

import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tweet from './Tweet';

class App extends Component {
  componentDidMount(){ 
    // so here we use connect() to acccess the store's dispatch function
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
        <div className='container '>
            <Nav />
            {
              this.props.loading === true
              ? null
              : <div>
                  <Route path="/" exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
              </div>
            }
          </div>  
        </Fragment>
      </Router>
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