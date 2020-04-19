import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

class Tweet extends Component {
    render(){
        console.log("The tweet prop is")
        console.log(this.props)
        return (
            <div className='tweet'>

            </div>
        )
    }
};

// id is the props received by Tweet component;
function mapStateToProps({users, tweets, authedUser}, {id}){
    const tweet = tweets[id];

    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser) 
    }
}
export default connect(mapStateToProps)(Tweet)