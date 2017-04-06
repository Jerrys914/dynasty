import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import NFLNav from '../../containers/nfl/nflNav.js';
import LeagueNav from '../../containers/league/leagueNav.js';
import NFLTeam from '../../containers/nfl/myTeam.js';

export default class NFL extends Component {
  render(){
    return (
      <div>
        <Nav />
        <LeagueNav />
        <h2>Football</h2>
        <NFLNav />
        <NFLTeam />
      </div>
    )
  }
}