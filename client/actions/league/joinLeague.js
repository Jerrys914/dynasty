import axios from 'axios';

const sendLeagueInvite = (leagueId, email) => {
  let request = axios.post('/api/sendLeagueInvite', {leagueId:leagueId, email:email});
  return {
    type:'JOIN_LEAGUE',
    payload: request
  };
};

export default sendLeagueInvite;