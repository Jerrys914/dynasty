const sortNBAPlayersYTD = playersArr => {
  return {
    type: 'SORT_MLB_PLAYERS_YTD',
    payload: playersArr
  }
}

export default sortNBAPlayersYTD;