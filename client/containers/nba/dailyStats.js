import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getDailyStats from '../../actions/nba/dailyStats.js';
import PlayerUtils from '../../utils/nbaPlayerUtils.js';
import SortPlayers from '../../actions/nba/sortPlayersDaily.js'

class NBADailyStats extends Component {
  constructor(props) {
    super(props);
    this.props.getDailyStats();
    this.state = {
      players: [],
      filter: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.contains = this.contains.bind(this);
  }

  contains(value) {
    return value.fullName.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0;
  }

  handleChange(event){
    this.setState({filter: event.target.value});
  }

  displayStats(){
    if(this.props.NBADailyStats.playerstatsentry){
      this.state.players = [];
      this.props.NBADailyStats.playerstatsentry.map((player)=>{
        let newPlayer = PlayerUtils.getPlayerInfo(player);
        this.state.players.push(newPlayer);
        newPlayer.totalPoints = PlayerUtils.totalPointsGenerator(newPlayer) + PlayerUtils.applyBonus(newPlayer);
      });
      this.state.players = PlayerUtils.sortBy['totalPoints'](this.state.players).sorted; 
    } else {
      if(this.props.NBADailyStats.sorted){
        this.state.players = this.props.NBADailyStats.sorted
      } else {
        this.state.players = this.props.NBADailyStats
      }
    }
    return this.state.players.filter(this.contains).map((player)=>{
      return(
        <tr key={player.fullName + Math.random()}>
          <td>{player.fullName}</td>
          <td>{player.teamAbv}</td>
          <td>{player.number}</td>
          <td>{player.position}</td>
          <td>{player['3pt']}</td>
          <td>{player.Pts}</td>
          <td>{player.Reb}</td>
          <td>{player.Ast}</td>
          <td>{player.Blk}</td>
          <td>{player.Stl}</td>
          <td>{player.Tov}</td>
          <td>{player.totalPoints}</td>            
        </tr>
      )
    })
  }

  render(){
    return(
      <div>
        <div><h1>NBA Daily Stats</h1></div>
        <label>
          Filter:
          <input value={this.state.filter} onChange={this.handleChange} />
        </label>
        <br />
        <table>
        <tbody>
          <tr>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['name'](this.state.players))}}>Player Name</th>
            <th>Team</th>
            <th>Number</th>
            <th>Position</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['3pt'](this.state.players))}}>3pt</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['points'](this.state.players))}}>Pts</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['rebounds'](this.state.players))}}>Reb</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['assists'](this.state.players))}}>Ast</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['blocks'](this.state.players))}}>Blk</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['steals'](this.state.players))}}>Stl</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['turnovers'](this.state.players))}}>Tov</th>
            <th onClick={() =>{this.props.SortPlayers(PlayerUtils.sortBy['totalPoints'](this.state.players))}}>TotalPoints</th>
          </tr>
            {this.displayStats()}
          </tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    NBADailyStats: state.NBADailyStats
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDailyStats, SortPlayers}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NBADailyStats);