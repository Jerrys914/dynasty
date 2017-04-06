const sortMLBPlayersYTD = playersArr => {
  return {
    type: 'SORT_MLB_PLAYERS_DAILY',
    payload: playersArr
  }
}

export default sortMLBPlayersYTD;