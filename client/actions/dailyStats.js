let axios = require('axios');

const getDailyStats = () => {
  let request = axios.get('/api/dailyStats');
  return {
    type: 'GET_DAILY_STATS',
    payload: request
  }
}

export default getDailyStats;