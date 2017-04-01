let axios = require('axios');

const getLeagues = () => {
  let request = axios.get('/api/myLeagues');
  return {
    type: 'GET_MY_LEAGUES',
    payload: request
  }
}

export default getLeagues;