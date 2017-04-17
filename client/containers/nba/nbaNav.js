import React, { Component} from 'react';
import { Link } from 'react-router';

export default class NBANav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link to='/NBA'>My Team</Link><span>__</span>
        <Link to='/NBA/PlayerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link to='/NBA/DailyStats'>Daily Stats</Link>
      </div>
    )
  }
}