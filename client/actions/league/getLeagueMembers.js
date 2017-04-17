import axios from 'axios';

const getLeagueMembers = leagueInfo => {
  let lg= JSON.stringify(leagueInfo);
  let request = axios.get('/api/getLeagueMembers/'+lg);
  return {
    type: 'GET_LEAGUE_MEMBERS',
    payload: request
  }
}

export default getLeagueMembers;