let axios = require('axios');

const getPlayerStatsYTD = () => {
  let request = axios.get('/api/playerStatsYTD');
  return {
    type: 'GET_PLAYER_STATS_YTD',
    payload: request
  }
}

export default getPlayerStatsYTD;