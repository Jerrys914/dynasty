import axios from 'axios';

const getLeagueMembers = () => {
  let request = axios.get('/api/getLeagueMembers');
  return {
    type: 'GET_LEAGUE_MEMBERS',
    payload: request
  }
}

export default getLeagueMembers;