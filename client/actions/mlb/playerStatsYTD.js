import axios from 'axios';

const getMLBPlayerStatsYTD = () => {
  let request = axios.get('/api/mlb/playerStatsYTD');
  return {
    type: 'MLB_PLAYER_STATS_YTD',
    payload: request
  }
}

export default getMLBPlayerStatsYTD;