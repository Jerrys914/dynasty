import { combineReducers } from 'redux';
import NBASeasonStats from './nba/playerStatsYTD.js';
import NBADailyStats from './nba/dailyStats.js';
import NFLSeasonStats from './nfl/playerStatsYTD.js';
import NFLDailyStats from './nfl/dailyStats.js';
import MLBSeasonStats from './mlb/playerStatsYTD.js';
import MLBDailyStats from './mlb/dailyStats.js';
import MyLeagues from './league/myLeagues.js';
import MyTeams from './league/myTeams.js';
import LeagueMembers from './league/leagueMembers.js';
import LeagueInfo from './league/leagueInfo.js';
import UserInfo from './user/userInfo.js';
import DraftRoomMembers from './league/draftRoom.js';

let rootReducer = combineReducers({
  NBASeasonStats,
  NBADailyStats,
  NFLSeasonStats,
  NFLDailyStats,
  MLBSeasonStats,
  MLBDailyStats,
  MyLeagues,
  MyTeams,
  LeagueMembers,
  LeagueInfo,
  UserInfo,
  DraftRoomMembers
});

export default rootReducer;