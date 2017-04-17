import axios from 'axios';

const getMLBDailyStats = () => {
  let request = axios.get('/api/mlb/dailyStats');
  return {
    type: 'MLB_PLAYER_STATS_DAILY',
    payload: request
  }
}

export default getMLBDailyStats;