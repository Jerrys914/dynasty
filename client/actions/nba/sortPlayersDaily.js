const sortNBAPlayersDaily = playersArr => {
  return {
    type: 'SORT_NBA_PLAYERS_DAILY',
    payload: playersArr
  }
}

export default sortNBAPlayersDaily;