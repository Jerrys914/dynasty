const sortNBAPlayersYTD = playersArr => {
  return {
    type: 'SORT_NBA_PLAYERS_YTD',
    payload: playersArr
  }
}

export default sortNBAPlayersYTD;