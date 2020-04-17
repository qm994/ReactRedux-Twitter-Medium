export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

// function creator to return a receive tweets action when gets invoked
export function receiveTweets (tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}