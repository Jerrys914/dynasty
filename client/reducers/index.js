import { combineReducers } from 'redux';
import NBASeasonStats from './nba/playerStatsYTD';
import NBADailyStats from './nba/dailyStats';
import NFLSeasonStats from './nfl/playerStatsYTD';
import NFLDailyStats from './nfl/dailyStats';
import MLBSeasonStats from './mlb/playerStatsYTD';
import MLBDailyStats from './mlb/dailyStats';
import MyLeagues from './league/myLeagues';
import MyTeams from './league/myTeams';
import LeagueMembers from './league/leagueMembers';
import LeagueInfo from './league/leagueInfo';
import UserInfo from './user/userInfo';
import DraftRoomMembers from './league/draftRoom';
import ActiveSport from './league/activeSport';

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
  ActiveSport,
  UserInfo,
  DraftRoomMembers
});

export default rootReducer;