import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import NBANav from '../../containers/nba/nbaNav.js';
import LeagueNav from '../../containers/league/leagueNav.js';
import NBATeam from '../../containers/nba/myTeam.js';

export default class NBATEAM extends Component {
  render(){
    return (
      <div>
        <Nav />
        <LeagueNav />
        <h2>Basketball</h2>
        <NBANav />
        <NBATeam />
      </div>
    )
  }
}