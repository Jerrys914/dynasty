const setLeague = (leagueName) => {
  return {
    type: 'SET_LEAGUE_NAME',
    payload: leagueName
  }
}

export default setLeague;