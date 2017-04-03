const getPlayerInfo = playerObj => {
  // OBP = (Hits + Walks + Hit by Pitch) / (At Bats + Walks + Hit by Pitch + Sacrifice Flies)
  if(playerObj.player.Position === 'P') {
    return {
      fullName: playerObj.player.FirstName + ' ' + playerObj.player.LastName,
      position: playerObj.player.Position,
      teamAbv: playerObj.team.Abbreviation,
      wins: playerObj.stats.Wins,
      saves: playerObj.stats.Saves,
      k: playerObj.stats.PitcherStrikeouts,
      era: playerObj.stats.EarnedRunAvg,
      whip: playerObj.stats.WalksAndHitsPerInningPitched
    }
  }
  return {
    fullName: playerObj.player.FirstName + ' ' + playerObj.player.LastName,
    position: playerObj.player.Position,
    teamAbv: playerObj.team.Abbreviation,
    runs: playerObj.stats.Runs,
    hr: playerObj.stats.HomeRuns,
    rbi: playerObj.stats.RunsBattedIn,
    sb: playerObj.stats.StolenBases,
    tb: playerObj.stats.TotalBases,
    obp: playerObj.stats.BatterOnBasePct
  }
};

module.exports = { 
  getPlayerInfo
};