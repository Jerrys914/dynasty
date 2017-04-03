const sortNFLPlayersYTD = playersArr => {
  return {
    type: 'SORT_NFL_PLAYERS_YTD',
    payload: playersArr
  }
}

export default sortNFLPlayersYTD;