import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNFLPlayerStatsYTD from '../../actions/nfl/playerStatsYTD.js';
import PlayerUtils from '../../utils/nflPlayerUtils.js';
import SortPlayers from '../../actions/nfl/sortPlayersYTD.js';

class PlayerStatsYTD extends Component {
  constructor(props) {
    super(props);
    this.positions = {};
    this.state = {
      players: []
    }
  }

  componentWillMount(props){
    this.props.getNFLPlayerStatsYTD();
  }
  componentWillReceiveProps(props){
    console.log('PROPS: ', props)
  }

  displayStats(){ 
    if(this.props.nflSeasonStats.playerstatsentry){
      this.state.players = [];
      this.props.nflSeasonStats.playerstatsentry.map((player)=>{
        this.positions[player.player.Position] = true;
        let newPlayer = PlayerUtils.getPlayerInfo(player);
        if(newPlayer){
          this.state.players.push(newPlayer);
          // newPlayer.totalPoints = PlayerUtils.totalPointsGenerator(newPlayer) + PlayerUtils.applyBonus(newPlayer);
        } 
      });
      // this.state.players = PlayerUtils.sortBy['totalPoints'](this.state.players).sorted; 
      console.log('State Players Array: ',this.state.players)
      console.log('POSITIONS: ', this.positions)
    } else {
      if(this.props.nflSeasonStats.sorted){
        this.state.players = this.props.nflSeasonStats.sorted
      } else {
        this.state.players = this.props.nflSeasonStats
      }

    }
    console.log('State Players Array: ',this.state.players)
    // this.state.players = this.sortByFuncs[this.sortBy](this.state.players);
    return this.state.players.map((player)=>{
      return(
        <tr key={player.fullName + Math.random()}>
          <td>{player.fullName}</td>
          <td>{player.teamAbv}</td>
          <td>{player.number}</td>
          <td>{player.position}</td>
          <td>{player.passYds}</td>
          <td>{player.passTD}</td>
          <td>{player.passInt}</td>
          <td>{player.rushYds}</td>
          <td>{player.rushTD}</td>
          <td>{player.receptions}</td>
          <td>{player.recYds}</td>
          <td>{player.recTD}</td>
          <td>{player.fumbles}</td>
        </tr>
      )
    })
  }

  render(){
    return(
      <div>
        <div><h1>Football Stats YTD</h1></div>
        <table>
          <tbody>
            <tr>
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
    nflSeasonStats: state.NFLSeasonStats
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNFLPlayerStatsYTD, SortPlayers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsYTD);