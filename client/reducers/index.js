import { combineReducers } from 'redux';
import NBASeasonStats from './nba/playerStatsYTD.js';
import NBADailyStats from './nba/dailyStats.js';
import NFLSeasonStats from './nba/playerStatsYTD.js';
import NFLDailyStats from './nba/dailyStats.js';

let rootReducer = combineReducers({
  nbaPlayerStatsYTD: NBASeasonStats,
  nbaStatsForDay: NBADailyStats,
  nflPlayerStatsYTD: NFLSeasonStats,
  nflStatsForDay: NFLDailyStats
});

export default rootReducer;