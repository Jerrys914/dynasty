const setLeagueInfo = leagueInfo => {
  console.log('LEAGUE INFO ACTION: ', leagueInfo)
  return {
    type: 'SET_LEAGUE_INFO',
    payload: leagueInfo
  }
}

export default setLeagueInfo;