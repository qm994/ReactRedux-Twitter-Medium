import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../action/tweets';

export default function tweets  (state = {}, action) {
    switch(action.type){
        case RECEIVE_TWEETS : 
            return {
                // spread operator will generate a new object,
                // this fulfill the reducer has to be pure function
                ...state,
                ...action.tweets 
            };
        
        case TOGGLE_TWEET :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET : 
            const {tweet} = action;

            let replyingTo = {};
            if (tweet.replyingTo !== null){
                replyingTo = {
                    // tweet.replying to is the id for the tweet we are replying to,
                    // we will use spread operators to update it later
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        // update it replies property since we add a new tweet
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                }
            }

            return {
                ...state,
                [action.tweet.id]: action.tweet,
                // update the replies over here
                ...replyingTo
            }

        default : 
            return state
    }
}