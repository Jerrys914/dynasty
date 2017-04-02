const sortPlayers = playersArr => {
  console.log('setSortedPLayers: ', playersArr)
  return {
    type: 'SORT_NBA_PLAYERS',
    payload: playersArr
  }
}

export default sortPlayers;