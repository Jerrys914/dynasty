import React ,{ Component} from 'react';
import { Link } from 'react-router';

export default class MLBNav extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link to='/MLB'>My Team</Link><span>__</span>
        <Link to='/MLB/PlayerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link to='/MLB/DailyStats'>Daily Stats</Link>
      </div>
    )
  }
}