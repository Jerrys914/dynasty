import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import NFLNav from '../../containers/nfl/nflNav.js';
import TeamNav from '../../containers/league/leagueNav.js';
import NFLTeam from '../../containers/nfl/myTeam.js';

export default class NFL extends Component {
  render(){
    return (
      <div>
        <Nav />
        <TeamNav />
        <NFLNav />
        <NFLTeam />
      </div>
    )
  }
}