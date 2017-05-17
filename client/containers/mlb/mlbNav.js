import React ,{ Component} from 'react';
import { Link } from 'react-router';

export default class MLBNav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link className='leagueNav' to='/MLB'>My Team</Link><span>__</span>
        <Link className='leagueNav' to='/MLB/PlayerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link className='leagueNav' to='/MLB/DailyStats'>Daily Stats</Link><span>__</span>
        <a className='leagueNav' href={"/api/getDraftRoom"}>Draft Room</a>
      </div>
    )
  }
}