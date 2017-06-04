import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import socketIOClient from 'socket.io-client'
import MLBPlayers from '../mlb/playerStatsYTD';
import getMLBPlayerStatsYTD from '../../actions/mlb/playerStatsYTD.js';
import PlayerUtils from '../../utils/mlbPlayerUtils.js';
import SortPlayers from '../../actions/mlb/sortPlayersYTD.js';
import ToolTip from 'react-portal-tooltip';

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
      activeDraftMembers: [],
      draftedPlayers: [],
      players: {
        all: [],
        batters: [],
        pitchers: []
      },
      display: 'all',
      filter: ' ',
      position: 'all',
      isTooltipActive: {},
    };
    this.props.getMLBPlayerStatsYTD();
    this.displayMembers = this.displayMembers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.positionFilter = this.positionFilter.bind(this);
    this.contains = this.contains.bind(this);
    this.filterDrafted = this.filterDrafted.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
    this.draftPlayer = this.draftPlayer.bind(this);
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
  showTooltip(player) {
    this.state.isTooltipActive[player] = true;
    this.forceUpdate()
  };
  hideTooltip(player) {
    this.state.isTooltipActive[player] = false;
    this.forceUpdate()
  };
  draftPlayer(playerName){
    let arr = this.state.draftedPlayers;
    arr.push(playerName);
    console.log(playerName + ' Drafted');
    console.log('Drafted Players: ',arr)
    this.setState({draftedPlayers:arr})
  };
  filterDrafted(val){
    return this.state.draftedPlayers.indexOf(val.fullName) < 0;
  };
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
  };

  contains(value) {
    return value.fullName.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0;
  };

  handleChange(event) {
    this.setState({filter: event.target.value});
  };

  handleSelect(event) {
    this.setState({display: event.target.value});
  };
  handlePosition(event){
    this.setState({position: event.target.value})
  };
  filterDraftedPlayers(){
    let result = [];

  };
  positionFilter(playersArr, position){
    if(position === 'all'){
      return playersArr
    }
    let result = [];
    playersArr.forEach(player =>{
      if(player.position == position) {
        result.push(player);
      }
    });
    return result;
  };
  displayStats(){ 
    if(this.props.mlbSeasonStats.playerstatsentry){
      this.state.players = { all: [], batters: [], pitchers: [] };
      this.props.mlbSeasonStats.playerstatsentry.map((player)=>{
        let newPlayer = PlayerUtils.getPlayerInfo(player);
        this.state.players.all.push(newPlayer);
        if(newPlayer.position === 'P'){
          this.state.players.pitchers.push(newPlayer);
        } else {
          this.state.players.batters.push(newPlayer); 
        }
      });
    }
    return this.positionFilter(this.state.players[this.state.display].filter(this.contains),this.state.position).filter(this.filterDrafted).map((player)=>{
      if(this.state.display === 'batters'){
        return(
          <tr key={player.fullName + player.teamAbv + player.position} >
            <td>{player.fullName}</td>
            <td>{player.teamAbv}</td>
            <td>{player.position}</td>
            <td>{player.runs}</td>
            <td>{player.hr}</td>
            <td>{player.rbi}</td>
            <td>{player.sb}</td>
            <td>{player.tb}</td>
            <td>{player.obp}</td>
          </tr>
        )
      } else if(this.state.display === 'pitchers'){
        return(
          <tr key={player.fullName + player.teamAbv + player.position}>
            <td>{player.fullName}</td>
            <td>{player.teamAbv}</td>
            <td>{player.position}</td>
            <td>{player.wins}</td>
            <td>{player.saves}</td>
            <td>{player.k}</td>
            <td>{player.era}</td>
            <td>{player.whip}</td>
          </tr>
        )
      }
      const filterForPopup = player.fullName.split(' ').join('').split('.').join('').split("'").join('') + player.teamAbv + player.position;
      return (
        <tr key={player.fullName + player.teamAbv + player.position} onClick={() => { console.log('Player Selected') }}>
          <td onMouseOver={() => this.showTooltip(filterForPopup)} onMouseLeave={() => this.hideTooltip(filterForPopup)}>{player.fullName}</td>
          <td onMouseOver={() => this.showTooltip(filterForPopup)} onMouseLeave={() => this.hideTooltip(filterForPopup)}>{player.teamAbv}</td>
          <td id={filterForPopup} onMouseOver={() => this.showTooltip(filterForPopup)} onMouseLeave={() => this.hideTooltip(filterForPopup)}>{player.position}</td>
          <ToolTip active={this.state.isTooltipActive[filterForPopup]} position="right" arrow="center" parent={'#'+player.fullName.split(' ').join('').replace('.','').replace("'",'')+ player.teamAbv + player.position}>
          <div>
            <p>{player.fullName}</p>
            <button onClick={()=>this.draftPlayer(player.fullName)}>Draft</button>
          </div>
        </ToolTip>
        </tr>
      )
    })
  };
  renderSelect(){
    if(this.state.display === 'batters'){
      return (
        <select value={this.state.value} onChange={this.handlePosition}>
          <option value='all'>All</option>
          <option value="C">C</option>
          <option value="1B">1B</option>
          <option value="2B">2B</option>
          <option value="3B">3B</option>
          <option value="SS">SS</option>
          <option value="OF">OF</option>
          <option value="DH">DH</option>
        </select>
      )
    } 
    return
  };
  renderHeader(){
    if(this.state.display === 'batters'){
      return (
        <tr className='row'>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['name'](this.state.players.batters))}}>Player Name</th>
          <th>Team</th>
          <th>Position</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['runs'](this.state.players.batters))}}>R</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['hr'](this.state.players.batters))}}>HR</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['rbi'](this.state.players.batters))}}>RBI</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['sb'](this.state.players.batters))}}>SB</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['tb'](this.state.players.batters))}}>TB</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['obp'](this.state.players.batters))}}>OBP</th>
        </tr>
      )
    } else if(this.state.display === 'pitchers'){
      return (
        <tr className='row'>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['name'](this.state.players.pitchers))}}>Player Name</th>
          <th>Team</th>
          <th>Position</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['wins'](this.state.players.pitchers))}}>W</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['saves'](this.state.players.pitchers))}}>S</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['k'](this.state.players.pitchers))}}>K</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['era'](this.state.players.pitchers))}}>ERA</th>
          <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['whip'](this.state.players.pitchers))}}>WHIP</th>
        </tr>
      )
    }
    return (
      <tr>
        <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['name'](this.state.players.all))}}>Player Name</th>
        <th>Team</th>
        <th>Position</th>
      </tr>
    )
  };
  render(){

    if(this.state.display === 'pitchers'){

    }else if(this.state.display === 'batters'){

    }
    return(
      <div>
      <div display='block'>
       <h1>{this.props.leagueInfo.name} DRAFT ROOM</h1>
       <button onClick={()=>{}}>Enter Draft</button>
       <div>
         <ul>
           {this.displayMembers()}
         </ul>
       </div>
       <div>
        <h2>DraftedPlayer</h2>
        <ul>
          {this.state.draftedPlayers.map(player => <li key={player}>{player}</li>)}
        </ul>
       </div>
       </div>
        <div>
          <div><h1>Baseball Players</h1></div>
          <label>
            Filter:
            <input value={this.state.filter} onChange={this.handleChange} />
          </label>
          <br />
          <lable>
            Sort By:
            <select value={this.state.value} onChange={this.handleSelect}>
              <option value="all">All Players</option>
              <option value="batters">Batters</option>
              <option value="pitchers">Pitchers</option>
            </select>
          {this.renderSelect()}
          </lable>
          <table id='player' className="table table--fixed">
            <tbody className="row header">
              {this.renderHeader()}
              {this.displayStats()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};
const mapStateToProps = (state) => {
  return {
    activeSport: state.ActiveSport,
    leagueInfo: state.LeagueInfo,
    leagueMembers: state.LeagueMembers,
    draftRoomMembers: state.DraftRoomMembers,
    mlbSeasonStats: state.MLBSeasonStats
  }
};

export default connect(mapStateToProps, { getMLBPlayerStatsYTD, SortPlayers })(DraftRoom)