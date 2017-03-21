import { combineReducers } from 'redux';
import NBASeasonStats from './playerStatsYTD.js';
import NBADailyStats from './dailyStats.js';

let rootReducer = combineReducers({
  nbaPlayerStatsYTD: NBASeasonStats,
  nbaStatsForDay: NBADailyStats
});

export default rootReducer;