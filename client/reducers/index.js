import { combineReducers } from 'redux';
import SeasonStats from './playerStatsYTD.js';
import DailyStats from './dailyStats.js';

let rootReducer = combineReducers({
  playerStatsYTD: SeasonStats,
  statsForDay: DailyStats
});

export default rootReducer;