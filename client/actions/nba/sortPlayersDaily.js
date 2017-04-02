const sortNBAPlayersDaily = playersArr => {
  console.log('setSortedPLayers: ', playersArr)
  return {
    type: 'SORT_NBA_PLAYERS_DAILY',
    payload: playersArr
  }
}

export default sortNBAPlayersDaily;