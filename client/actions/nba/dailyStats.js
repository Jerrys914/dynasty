import axios from 'axios';

const getNBADailyStats = () => {
  let request = axios.get('/api/nba/dailyStats');
  return {
    type: 'GET_NBA_DAILY_STATS',
    payload: request
  }
}

export default getNBADailyStats;