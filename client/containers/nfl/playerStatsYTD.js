import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getNFLPlayerStatsYTD from '../../actions/nfl/playerStatsYTD.js';
import PlayerUtils from '../../utils/nflPlayerUtils.js';

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

  displayStats(){ 
    console.log('Display Stats')
    if(this.props.nflSeasonStats.playerstatsentry){
      this.state.players = [];
      this.props.nflSeasonStats.playerstatsentry.map((player)=>{
        console.log('NFL PLAYER: ',player)
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
              <th>Player Name</th>
              <th>Team</th>
              <th>Number</th>
              <th>Position</th>
              <th>Pass Yds</th>
              <th>Pass TD</th>
              <th>Pass Int</th>
              <th>Rush Yds</th>
              <th>Rush TD</th>
              <th>Rec</th>
              <th>Rec Yds</th>
              <th>Rec TD</th>
              <th>Fum</th>
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
  return bindActionCreators({getNFLPlayerStatsYTD}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStatsYTD);