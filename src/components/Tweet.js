import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
    render(){
        const { tweet } = this.props
        if(tweet === null){
            return <p>The tweet doesnt existed yet!</p>
        }
        // console.log("The tweet prop is")
        // console.log(this.props)
        return (
            <div className='tweet'>

            </div>
        )
    }
};

// id is the props received by Tweet component;
// so this function will be invoked whenever the props or state changes
function mapStateToProps({users, tweets, authedUser}, {id}){
    const tweet = tweets[id];
    // if the tweet is replying to another tweet it will
    // have a `replyingTo` property
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    console.log(tweets)
    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet )
            : null
    }
}
export default connect(mapStateToProps)(Tweet)