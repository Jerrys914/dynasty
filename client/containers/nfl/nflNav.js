import React ,{ Component} from 'react';
import { Link } from 'react-router';

export default class NFLNav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link className='leagueNav' to='/NFL'>My Team</Link><span>__</span>
        <Link className='leagueNav' to='/NFL/PlayerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link className='leagueNav' to='/NFL/DailyStats'>Daily Stats</Link>
      </div>
    )
  }
}