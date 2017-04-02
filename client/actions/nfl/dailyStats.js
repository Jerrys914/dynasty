import axios from 'axios';

const getNFLDailyStats = () => {
  let request = axios.get('/api/nfl/dailyStats');
  return {
    type: 'GET_NFL_DAILY_STATS',
    payload: request
  }
}

export default getNFLDailyStats;