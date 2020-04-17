import { RECEIVE_USERS } from '../action/users';

export default function users (state = {}, action) {
    switch(action.type){
        case RECEIVE_USERS : 
            return {
                // spread operator will generate a new object,
                // this fulfill the reducer has to be pure function
                ...state,
                ...action.users
            };
        default : 
            return state
    }
}