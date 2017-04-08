import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMLBPlayerStatsYTD from '../../actions/mlb/playerStatsYTD.js';
import PlayerUtils from '../../utils/mlbPlayerUtils.js';
import SortPlayers from '../../actions/mlb/sortPlayersYTD.js';

class PlayerStatsYTD extends Component {
  constructor(props) {
    super(props);
    this.props.getMLBPlayerStatsYTD();
    this.state = {
      players: {
        all: [],
        batters: [],
        pitchers: []
      },
      display: 'all',
      filter: ' ',
      position: 'all'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.positionFilter = this.positionFilter.bind(this);
    this.contains = this.contains.bind(this);
  }

  contains(value) {
    return value.fullName.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0;
  }

  handleChange(event) {
    this.setState({filter: event.target.value});
  }

  handleSelect(event) {
    this.setState({display: event.target.value});
  }

  handlePosition(event){
    this.setState({position: event.target.value})
  }

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
  }

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
    return this.positionFilter(this.state.players[this.state.display].filter(this.contains),this.state.position).map((player)=>{
      if(this.state.display === 'batters'){
        return(
          <tr key={player.fullName + player.teamAbv + player.position}>
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
      return(
        <tr key={player.fullName + player.teamAbv + player.position}>
          <td>{player.fullName}</td>
          <td>{player.teamAbv}</td>
          <td>{player.position}</td>
        </tr>
      )
    })
  }

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
  }

  renderHeader(){
    if(this.state.display === 'batters'){
      return (
        <tr>
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
        <tr>
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
  }

  render(){
    if(this.state.display === 'pitchers'){

    }else if(this.state.display === 'batters'){

    }
    return(
      <div>
        <div><h1>Baseball Stats YTD</h1></div>
        <lable>
          Sort By:
          <select value={this.state.value} onChange={this.handleSelect}>
            <option value="all">All Players</option>
            <option value="batters">Batters</option>
            <option value="pitchers">Pitchers</option>
          </select>
        {this.renderSelect()}
        </lable>
        <br />
        <label>
          Filter:
          <input value={this.state.filter} onChange={this.handleChange} />
        </label>
        <table>
          <tbody>
            {this.renderHeader()}
            {this.displayStats()}
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    mlbSeasonStats: state.MLBSeasonStats
  }
};

export default connect(mapStateToProps, { getMLBPlayerStatsYTD, SortPlayers })(PlayerStatsYTD);