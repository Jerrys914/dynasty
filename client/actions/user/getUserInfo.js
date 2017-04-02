import axios from 'axios';

const getUserInfo = () => {
  let request = axios.get('/api/getUserInfo');
  return {
    type:'GET_USER_INFO',
    payload: request
  }
}

export default getUserInfo;