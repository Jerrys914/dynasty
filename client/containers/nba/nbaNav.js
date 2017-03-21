import React ,{ Component} from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Link to='/playerStatsYTD'>Stats YTD</Link><span>__</span>
        <Link to='/dailyStats'>Daily Stats</Link>
      </div>
    )
  }
}