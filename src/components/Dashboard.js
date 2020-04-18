 import React, { Component } from 'react';
import { connect } from 'react-redux';

 // so Dashboard component needs to render all the tweets
  
 class Dashboard extends Component {
     render() {
         // since we use mapStateToprops, the tweets state's tweets Ids will be passed to
         // Dashboard components whenever its called
         console.log(this.props)
         return (
             <div>Dashboard</div>
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