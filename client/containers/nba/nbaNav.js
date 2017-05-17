import React, { Component} from 'react';
import { Link } from 'react-router';

export default class NBANav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link className='leagueNav' to='/NBA'>My Team</Link><span>__</span>
        <Link className='leagueNav' to='/NBA/PlayerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link className='leagueNav' to='/NBA/DailyStats'>Daily Stats</Link><span>__</span>
        <a className='leagueNav' href={"/api/getDraftRoom"}>Draft Room</a>
      </div>
    )
  }
}