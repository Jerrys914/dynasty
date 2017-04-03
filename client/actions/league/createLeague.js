import axios from 'axios';

const createNewLeague = (name) => {
  let request = axios.post('/api/createLeague', name);
  return {
    type: 'CREATE_LEAGUE',
    payload: request
  }
}

export default createNewLeague;