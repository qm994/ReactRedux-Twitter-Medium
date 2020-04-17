import { getInitialData } from '../utils/api';
import { receiveTweets } from '../action/tweets';
import { receiveUsers } from '../action/users';
import { setAuthedUser } from '../action/authedUser';

const AUTHED_ID = 'tylermcginnis';

 
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        //return us a promise
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}