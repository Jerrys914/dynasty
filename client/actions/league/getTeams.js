import axios from 'axios';

const getTeams = () => {
  let request = axios.get('/api/myTeams');
  return {
    type: 'GET_TEAMS',
    payload: request
  }
}

export default getTeams;