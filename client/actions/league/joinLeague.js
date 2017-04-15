import axios from 'axios';

const sendLeagueInvite = (leagueId) => {
  let request = axios.post('/api/sendLeagueInvite', {leagueId:leagueId});
  return {
    type:'JOIN_LEAGUE',
    payload: request
  };
};

export default sendLeagueInvite;