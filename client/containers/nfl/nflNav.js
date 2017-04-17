import React ,{ Component} from 'react';
import { Link } from 'react-router';

export default class NFLNav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link to='/NFL'>My Team</Link><span>__</span>
        <Link to='/NFL/PlayerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link to='/NFL/DailyStats'>Daily Stats</Link>
      </div>
    )
  }
}