import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet, formatDate } from '../utils/helpers';
import { TiArrowBackOutline } from 'react-icons/ti/index'
import { TiHeartOutline } from 'react-icons/ti/index'
import { TiHeartFullOutline } from 'react-icons/ti/index';

import { handleToggleTweet } from '../action/tweets';

import { Link } from 'react-router-dom'; 
 

class Tweet extends Component {
    
    handleLike = (e) => {
        e.preventDefault();
        const { dispatch, tweet, authedUser } = this.props;

        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.handleLiked,
            authedUser
        })
        )
        
    }

    toParent = (e, id) => {
        e.preventDefault();
        // todo: Redirect to the parent tweet by clicking the parent tweet author name
    };

    render(){
        const { tweet } = this.props
        if(tweet === null){
            return <p>The tweet doesnt existed yet!</p>
        }
        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
        } = tweet
        return (
            <Link to={`/tweet/${id}`} className='tweet'>
                <img
                 src = {avatar}
                 alt = {`Avatar of ${name}`}
                 className = 'avatar'
                />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {/* if it is replying to another tweet */}
                        {parent && (
                            <button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
                                Replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>

                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>

                        <button className='heart-button' onClick={this.handleLike}>
                            {hasLiked === true
                                ? <TiHeartFullOutline className='tweet-icon' color='#e0245e' />
                                : <TiHeartOutline className='tweet-icon' />}
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>
            </Link>
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