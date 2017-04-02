import axios from 'axios';

const getUserInfo = () => {
  let request = axios.get('/api/getUserInfo');
  return request;
}

export default setLeague;