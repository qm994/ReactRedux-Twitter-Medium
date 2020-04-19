import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

 // so Dashboard component needs to render all the tweets
  
 class Dashboard extends Component {
     render() {
         // since we use mapStateToprops, the tweets state's tweets Ids will be passed to
         // Dashboard components whenever its called
         console.log(this.props)
         return (
             <div>
                 <h3 className='center'>Your TimeLine</h3>
                 <ul className='dashboard-list'>
                     {this.props.tweetIds.map((id) => (
                        <li key={id}>
                            <Tweet id={id} />
                        </li>
                     ))}
                 </ul>
             </div>
         )
     }
 };

 function mapStateToProps({tweets}){
     return {
         tweetIds: Object.keys(tweets)
            .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
     }
 }

 export default connect(mapStateToProps)(Dashboard)