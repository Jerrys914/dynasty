const sortMLBPlayersYTD = playersArr => {
  return {
    type: 'SORT_MLB_PLAYERS_YTD',
    payload: playersArr
  }
}

export default sortMLBPlayersYTD;