import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getDailyStats from '../actions/dailyStats.js';

class DailyStats extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(props){
    this.props.getDailyStats();
  }

  componentWillReceiveProps(nextProps){
    console.log('NextProps: ', nextProps)
  }

  displayStats(){
    console.log('Display Stats')
    if(this.props.statsForDay.playerstatsentry){
      return this.props.statsForDay.playerstatsentry.map((player)=>{
        let playerName = player.player.FirstName + ' ' + player.player.LastName;
        let number = player.player.JerseyNumber;
        let position = player.player.Position;
        let teamAbv = player.team.Abbreviation; 
        let threes = player.stats.Fg3PtMade['#text'];
        let points = player.stats.Pts['#text'];
        let rebounds = player.stats.Reb['#text'];
        let assists = player.stats.Ast['#text'];
        let blocks = player.stats.Blk['#text'];
        let steals = player.stats.Stl['#text'];
        let turnovers = player.stats.Tov['#text'];

        return(
          <div key={playerName + Math.random()}>
            <p>Player: {playerName}</p>
            <p>Team: {teamAbv}</p>
            <p>Number: {number}</p><p>Position: {position}</p>
            <p>3Pt: {threes}</p>
            <p>Pts: {points}</p>
            <p>Reb: {rebounds}</p>
            <p>Ast: {assists}</p>
            <p>Blk: {blocks}</p>
            <p>Stl: {steals}</p>
            <p>TO: {turnovers}</p>
            <br /><br />
          </div>
        )
      })
    }
  }

  render() {
    return(
      <div>
        <div><h1>Daily Stats</h1></div>
        <div>{this.displayStats()}</div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    statsForDay: state.statsForDay
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getDailyStats}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyStats);