import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import DailyStats from '../../containers/nba/dailyStats.js';
import NBANav from '../../containers/nba/nbaNav.js';

export default class DailyPlayerStats extends Component {
  render(){
    return (
      <div>
        <Nav />
        <NBANav />
        <DailyStats />
      </div>
    )
  }
}