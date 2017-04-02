import React, { Component } from 'react';
import SeasonStats from '../../containers/nfl/playerStatsYTD.js';
import Nav from '../../containers/navigation.js';
import NFLNav from '../../containers/nfl/nflNav.js';
import TeamNav from '../../containers/league/leagueNav.js';

export default class PlayerStatsYTD extends Component {
  render() {
    return (
      <div>
        <Nav />
        <TeamNav />
        <NFLNav />
        <SeasonStats />
      </div>
    )
  }
};