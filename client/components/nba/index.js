import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import NBANav from '../../containers/nba/nbaNav.js';
import DailyStats from '../../containers/nba/dailyStats.js';

export default class DailyPlayerStats extends Component {
  render(){
    return (
      <div>
        <Nav />
        <NBANav />
      </div>
    )
  }
}