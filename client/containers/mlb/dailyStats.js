import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMLBDailyStats from '../../actions/mlb/dailyStats.js';
import PlayerUtils from '../../utils/mlbPlayerUtils.js';
import SortPlayers from '../../actions/mlb/sortPlayersDaily.js';

class MLBDailyStats extends Component {
  constructor(props) {
    super(props);
    this.props.getMLBDailyStats();
    this.state = {
      players: {
        all: [],
        batters: [],
        pitchers: []
      },
      display: 'all',
      filter: ' '
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  displayStats(){ 
    if(this.props.mlbDailyStats.playerstatsentry){
      this.state.players = { all: [], batters: [], pitchers: [] };
      this.props.mlbDailyStats.playerstatsentry.map((player)=>{
        let newPlayer = PlayerUtils.getPlayerInfo(player);
        this.state.players.all.push(newPlayer);
        if(newPlayer.position === 'P'){
          this.state.players.pitchers.push(newPlayer);
        } else {
          this.state.players.batters.push(newPlayer); 
        }
      });
    }
    return this.state.players[this.state.display].filter(this.contains).map((player)=>{
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
        <div><h1>Baseball Daily YTD</h1></div>
        <lable>
        Sort By:
          <select value={this.state.value} onChange={this.handleSelect}>
            <option value="all">All Players</option>
            <option value="batters">All Batters</option>
            <option value="pitchers">All Pitchers</option>
          </select>
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
    mlbDailyStats: state.MLBDailyStats
  }
};

export default connect(mapStateToProps, { getMLBDailyStats, SortPlayers })(MLBDailyStats);