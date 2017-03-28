import React, { Component } from 'react';
import SeasonStats from '../../containers/nfl/playerStatsYTD.js';
import Nav from '../../containers/navigation.js';
import NBANav from '../../containers/nfl/nflNav.js';

export default class PlayerStatsYTD extends Component {
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