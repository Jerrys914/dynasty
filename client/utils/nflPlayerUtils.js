let pointsConverter = {
  'QB': {
  },
  'RB': {
  },
  'WR': {
  },
  'TE': {
  }
};

const getPlayerInfo = playerObj => {
  if(playerObj.player.Position === "QB" || playerObj.player.Position === "WR" || playerObj.player.Position === "RB" || playerObj.player.Position === "TE" || playerObj.player.Position === "FB" || playerObj.player.Position === "K"){
    return {
      fullName: playerObj.player.FirstName + ' ' + playerObj.player.LastName,
      number: playerObj.player.JerseyNumber,
      position: playerObj.player.Position,
      teamAbv: playerObj.team.Abbreviation,
      fumbles: playerObj.stats.Fumbles['#text'],
      passYds: playerObj.stats.PassYards['#text'],
      passTD: playerObj.stats.PassTD['#text'],
      passInt: playerObj.stats.PassInt['#text'],
      receptions: playerObj.stats.Receptions['#text'],
      recYds: playerObj.stats.RecYards['#text'],
      recTD: playerObj.stats.RecTD['#text'],
      rushYds: playerObj.stats.RushYards['#text'],
      rushTD: playerObj.stats.RushTD['#text'],
      prYds: playerObj.stats.PrYds['#text'],
      prTD: playerObj.stats.PrTD['#text'],
      '2pt': playerObj.stats.TwoPtMade['#text'],
    }
  }
  return false
};

module.exports = {
  getPlayerInfo
}