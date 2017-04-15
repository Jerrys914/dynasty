import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import sendLeagueInvite from '../../actions/league/joinLeague.js';

class LEAGUENAV extends Component {
  constructor(props){
    super(props);
    this.state = {
      showInviteForm: false
    }
  }
  isComish(){
    let isComish = false;
    this.props.leagueMembers.map(member => {
      if(member.userID === this.props.userInfo.id){
        if(member.isComish === 1){
          isComish = true;
        }
      }
    })
    return isComish;
  }
  displayNav(){
    if(this.isComish()){
      return (
        <div>
          <h1>{this.props.leagueInfo.name}</h1>
          <Link to='/leagueStandings'>Standings</Link><span>__</span>
          <Link to='/myTeams'>My Teams</Link><span>__</span>
          <Link to='/NFL'>Football</Link><span>__</span>
          <Link to='/NBA'>Basketball</Link><span>__</span>
          <Link to='/MLB'>Baseball</Link>
          <a onClick={()=>{this.props.sendLeagueInvite(this.props.leagueInfo.id)}}>Send Invite</a>
        </div>
      )
    }
    return (
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

  render(){
    return(
     this.displayNav()
    )
  }
}

const mapStateToProps = state => {
  return {
    leagueInfo: state.LeagueInfo,
    leagueMembers: state.LeagueMembers,
    userInfo: state.UserInfo
  }
}

export default connect(mapStateToProps, { sendLeagueInvite })(LEAGUENAV);