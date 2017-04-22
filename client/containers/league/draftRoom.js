import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import setUpSocket from '../../socket'
import socketIOClient from 'socket.io-client'
const socket = socketIOClient(window.location.host)

class DraftRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDraftMembers: []
    }
    setUpSocket()
    socket.on('IO_SERVER_HELLO', (serverMessage) => {
      console.log(`[socket.io] Server: ${serverMessage}`)
    })
    socket.on('IO_SERVER_DRAFT_MEMBERS', (members) => {
      console.log('MEMBERS: ', members)
      this.setState({activeDraftMembers: members})
    })
    window.onbeforeunload = () => {
      socket.emit('IO_CLIENT_LEAVE_ROOM',this.props.leagueInfo.name);
    }
  }

  componentDidMount(){
    socket.emit('IO_CLIENT_JOIN_ROOM',this.props.leagueInfo.name);
  }
  // componentWillUnmount(){
  //   socket.emit('IO_CLIENT_LEAVE_ROOM',this.props.leagueInfo.name);
  // }

  displayMembers(){
    return this.state.activeDraftMembers.map(member => {
      return(
        <li key={member}>{member}</li>
      )
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
    leagueInfo: state.LeagueInfo,
    draftRoomMembers: state.DraftRoomMembers
  }
};

export default connect(mapStateToProps, null)(DraftRoom)