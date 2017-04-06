const sortMLBPlayersYTD = (playersArr, sort) => {
  return {
    type: 'SORT_MLB_PLAYERS_YTD',
    payload: {
      playersArr,
      sort,
    }
  }
}

export default sortMLBPlayersYTD;