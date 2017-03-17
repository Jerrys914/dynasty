import React, { Component } from 'react';
import Nav from '../containers/navigation.js';
import DailyStats from '../containers/dailyStats.js';

export default class DailyPlayerStats extends Component {
  render(){
    return (
      <div>
        <Nav />
        <DailyStats />
      </div>
    )
  }
}