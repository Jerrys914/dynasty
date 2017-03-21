import React, { Component } from 'react';
import SeasonStats from '../../containers/nba/playerStatsYTD.js';
import getPlayerStatsYTD from '../../actions/playerStatsYTD.js';
import Nav from '../../containers/navigation.js';
import NBANav from '../../containers/nba/nbaNav.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <NBANav />
        <SeasonStats />
      </div>
    )
  }
};