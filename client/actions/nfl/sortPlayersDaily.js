const sortNFLPlayersDaily = playersArr => {
  return {
    type: 'SORT_NFL_PLAYERS_DAILY',
    payload: playersArr
  }
}

export default sortNFLPlayersDaily;