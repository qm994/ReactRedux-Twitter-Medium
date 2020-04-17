import { RECEIVE_TWEETS } from '../action/tweets';

export default function tweets  (state = {}, action) {
    switch(action.type){
        case RECEIVE_TWEETS : 
            return {
                // spread operator will generate a new object,
                // this fulfill the reducer has to be pure function
                ...state,
                ...action.tweets 
            };
        default : 
            return state
    }
}