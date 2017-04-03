const sortNFLPlayersYTD = playersArr => {
  console.log('setSortedPLayers: ', playersArr)
  return {
    type: 'SORT_NFL_PLAYERS_YTD',
    payload: playersArr
  }
}

export default sortNFLPlayersYTD;