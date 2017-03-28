import React, { Component } from 'react';
import Nav from '../../containers/navigation.js';
import NFLNav from '../../containers/nfl/nflNav.js';

export default class NFL extends Component {
  render(){
    return (
      <div>
        <Nav />
        <NFLNav />
      </div>
    )
  }
}