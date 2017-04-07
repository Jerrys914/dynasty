import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class LEAGUENAV extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>{this.props.leagueInfo.name}</h1>
        <Link to='/leagueStandings'>Standings</Link><span>__</span>
        <Link to='/myTeams'>My Teams</Link><span>__</span>
        <Link to='/NFL'>Football</Link><span>__</span>
        <Link to='/NBA'>Basketball</Link><span>__</span>
        <Link to='/MLB'>Baseball</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    leagueInfo: state.LeagueInfo
  }
}

export default connect(mapStateToProps, null)(LEAGUENAV);