import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import sendLeagueInvite from '../../actions/league/joinLeague';
import setActiveSport from '../../actions/league/setActiveSport';


class LEAGUENAV extends Component {
  constructor(props){
    super(props);
    this.state = {
      inviteEmail: ''
    }
    this.handleEmailInput = this.handleEmailInput.bind(this)
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

  handleEmailInput(event){
    this.setState({inviteEmail: event.target.value})
  }

  displayNav(){
    if(this.isComish() && this.props.leagueMembers.length < 12){
      return (
        <div>
          <h1>{this.props.leagueInfo.name}</h1>
          <Link onClick={()=>{this.props.setActiveSport(null)}} className='leagueNav' to='/leagueStandings'>Standings</Link><span>__</span>
          <Link onClick={()=>{this.props.setActiveSport(null)}} className='leagueNav' to='/myTeams'>My Teams</Link><span>__</span>
          <Link onClick={()=>{this.props.setActiveSport('Football')}} className='leagueNav' to='/NFL'>Football</Link><span>__</span>
          <Link onClick={()=>{this.props.setActiveSport('Basketball')}} className='leagueNav' to='/NBA'>Basketball</Link><span>__</span>
          <Link onClick={()=>{this.props.setActiveSport('Baseball')}} className='leagueNav' to='/MLB'>Baseball</Link>
          <span style={{float:'right'}}>
            <lable>
              <button onClick={()=>{ if(this.state.inviteEmail.length>0){this.props.sendLeagueInvite(this.props.leagueInfo.id, this.state.inviteEmail); this.setState({inviteEmail:''})}}}>Send Invite</button>
            </lable><br />
            <input value={this.state.inviteEmail} onChange={this.handleEmailInput} />
          </span>
        </div>
      )
    }
    return (
      <div>
        <h1>{this.props.leagueInfo.name}</h1>
        <Link onClick={()=>{this.props.setActiveSport(null)}} className='leagueNav' to='/leagueStandings'>Standings</Link><span>__</span>
        <Link onClick={()=>{this.props.setActiveSport(null)}} className='leagueNav' to='/myTeams'>My Teams</Link><span>__</span>
        <Link onClick={()=>{this.props.setActiveSport('Football')}} className='leagueNav' to='/NFL'>Football</Link><span>__</span>
        <Link onClick={()=>{this.props.setActiveSport('Basketball')}} className='leagueNav' to='/NBA'>Basketball</Link><span>__</span>
        <Link onClick={()=>{this.props.setActiveSport('Baseball')}} className='leagueNav' to='/MLB'>Baseball</Link>
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

export default connect(mapStateToProps, { sendLeagueInvite, setActiveSport })(LEAGUENAV);