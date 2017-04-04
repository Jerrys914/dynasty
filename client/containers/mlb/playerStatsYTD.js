import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMLBPlayerStatsYTD from '../../actions/mlb/playerStatsYTD.js';
import PlayerUtils from '../../utils/mlbPlayerUtils.js';
import SortPlayers from '../../actions/nfl/sortPlayersYTD.js';

class PlayerStatsYTD extends Component {
  constructor(props) {
    super(props);
      this.props.getMLBPlayerStatsYTD();
    this.state = {
      players: {
        allPlayers: [],
        batters: [],
        pitchers: []
      }
    }
  }

  componentWillMount(props){
    if(this.state.players.allPlayers.length  === 0){
    }
  }

  displayStats(){ 
    if(this.props.mlbSeasonStats.playerstatsentry){
      this.state.players.allPlayers = [];
      this.props.mlbSeasonStats.playerstatsentry.map((player)=>{
        let newPlayer = PlayerUtils.getPlayerInfo(player);
        this.state.players.allPlayers.push(newPlayer);
        if(newPlayer.position === 'P'){
          this.state.players.pitchers.push(newPlayer);
        } else {
          this.state.players.batters.push(newPlayer); 
        }
      });
    } else {
          console.log('local state')
    }
    /* else {
      if(this.props.mlbSeasonStats.sorted){
        this.state.players = this.props.mlbSeasonStats.sorted
      } else {
        this.state.players = this.props.mlbSeasonStats
      }
    }*/
    console.log('MLB YTD STATE PLAYERS: ', this.state.players)
    return this.state.players.allPlayers.map((player)=>{
      return(
        <tr key={player.fullName + player.teamAbv + player.position}>
          <td>{player.fullName}</td>
          <td>{player.teamAbv}</td>
          <td>{player.position}</td>
{/*          <td>{player.passYds}</td>
          <td>{player.passTD}</td>
          <td>{player.passInt}</td>
          <td>{player.rushYds}</td>
          <td>{player.rushTD}</td>
          <td>{player.receptions}</td>
          <td>{player.recYds}</td>
          <td>{player.recTD}</td>
          <td>{player.fumbles}</td>*/}
        </tr>
      )
    })
  }

  render(){
    return(
      <div>
        <div><h1>Baseball Stats YTD</h1></div>
        <table>
          <tbody>
            {/*<tr>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['name'](this.state.players))}}>Player Name</th>
              <th>Team</th>
              <th>Number</th>
              <th>Position</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['passYds'](this.state.players))}}>Pass Yds</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['passTD'](this.state.players))}}>Pass TD</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['passInt'](this.state.players))}}>Pass Int</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['rushYds'](this.state.players))}}>Rush Yds</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['rushTD'](this.state.players))}}>Rush TD</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['receptions'](this.state.players))}}>Rec</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['recYds'](this.state.players))}}>Rec Yds</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['recTD'](this.state.players))}}>Rec TD</th>
              <th onClick={()=>{this.props.SortPlayers(PlayerUtils.sortBy['fumbles'](this.state.players))}}>Fum</th>
            </tr>*/}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMLBPlayerStatsYTD, SortPlayers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsYTD);