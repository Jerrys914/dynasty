let axios = require('axios');

const getNBAPlayerStatsYTD = () => {
  let request = axios.get('/api/nba/playerStatsYTD');
  return {
    type: 'GET_NBA_PLAYER_STATS_YTD',
    payload: request
  }
}

export default getNBAPlayerStatsYTD;