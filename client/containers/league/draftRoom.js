import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
// import setUpSocket from '../../socket'
import socketIOClient from 'socket.io-client'
const socket = socketIOClient(window.location.host);
const setUpSocket = () => {
  socket.on('connect', () => {
    console.log('[socket.io] Connected.')
  })
  socket.on('disconnect', () => {
    console.log('[socket.io] Disconnected.')
  })
}

class DraftRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDraftMembers: []
    };
    setUpSocket;
    window.onbeforeunload = () => {
      socket.emit('IO_CLIENT_LEAVE_ROOM',this.props.leagueInfo.name, this.props.activeSport);
    };
    socket.on('IO_SERVER_DRAFT_MEMBERS', (members) => {
      this.setState({activeDraftMembers: members.members})
    });
  }

  componentDidMount(){
    socket.emit('IO_CLIENT_JOIN_ROOM',this.props.leagueInfo.name, this.props.activeSport);
  }
  // componentWillUnmount(){
  //   socket.emit('IO_CLIENT_LEAVE_ROOM',this.props.leagueInfo.name);
  // }

  displayMembers(){
    return this.props.leagueMembers.map(member => {
      if(this.state.activeDraftMembers.includes(member.name)){
        return(
          <li key={member.name}>{member.name}</li>
        )
      } else {
        return(
          <li key={member.name} style={{'textDecoration':'line-through'}}>{member.name}</li>
        )
      }
    })
  }

  render(){
    return (
      <div>
        <h1>{this.props.leagueInfo.name} DRAFT ROOM</h1>
        <button onClick={()=>{}}>Enter Draft</button>
        <ul>
          {this.displayMembers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeSport: state.ActiveSport,
    leagueInfo: state.LeagueInfo,
    leagueMembers: state.LeagueMembers,
    draftRoomMembers: state.DraftRoomMembers
  }
};

export default connect(mapStateToProps, null)(DraftRoom)