import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import DailyStats from '../../containers/nfl/dailyStats.js';
import NBANav from '../../containers/nfl/nflNav.js';

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