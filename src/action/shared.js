import { getInitialData } from '../utils/api';
import { receiveTweets } from '../action/tweets';
import { receiveUsers } from '../action/users';
import { setAuthedUser } from '../action/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis';

// thunk function creators
export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        //return us a promise
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}