import React, { Component } from 'react';
import SeasonStats from '../containers/playerStatsYTD.js';
import getPlayerStatsYTD from '../actions/playerStatsYTD.js';
import Nav from '../containers/navigation.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SeasonStats />
      </div>
    )
  }
};