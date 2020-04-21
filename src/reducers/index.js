import { combineReducers } from 'redux';
import users from './users';
import tweets from './tweets';
import authedUser from './authedUser';
import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    authedUser: authedUser,
    users: users,
    tweets: tweets,
    loadingBar: loadingBarReducer
  })