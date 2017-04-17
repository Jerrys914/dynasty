import axios from 'axios';

const getNFLYTDStats = () => {
  let request = axios.get('/api/nfl/playerStatsYTD');
  return {
    type: 'GET_NFL_YTD_STATS',
    payload: request
  }
}

export default getNFLYTDStats;