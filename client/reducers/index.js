import { combineReducers } from 'redux';
import NBASeasonStats from './nba/playerStatsYTD.js';
import NBADailyStats from './nba/dailyStats.js';
import NFLSeasonStats from './nfl/playerStatsYTD.js';
import NFLDailyStats from './nba/dailyStats.js';
import MLBSeasonStats from './mlb/playerStatsYTD.js';
import MyLeagues from './league/myLeagues.js';
import MyTeams from './league/myTeams.js';
import LeagueMembers from './league/leagueMembers.js';
import LeagueName from './league/leagueName.js';
import UserInfo from './user/userInfo.js';

let rootReducer = combineReducers({
  nbaPlayerStatsYTD: NBASeasonStats,
  nbaStatsForDay: NBADailyStats,
  NFLSeasonStats,
  NFLDailyStats,
  MLBSeasonStats,
  MyLeagues,
  MyTeams,
  LeagueMembers,
  LeagueName,
  UserInfo
});

export default rootReducer;