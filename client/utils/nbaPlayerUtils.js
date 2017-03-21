let pointsConverter = {
  '3pt': 1,
  Pts: .5,
  Reb: 1,
  Ast: 1,
  Blk: 2,
  Stl: 2,
  Tov: -1
};

const pickOutPlayerInfo = (playerObj) => {
  return {
    fullName: playerObj.player.FirstName + ' ' + playerObj.player.LastName,
    number: playerObj.player.JerseyNumber,
    position: playerObj.player.Position,
    teamAbv: playerObj.team.Abbreviation,
    '3pt': playerObj.stats.Fg3PtMade['#text'],
    Pts: playerObj.stats.Pts['#text'],
    Reb: playerObj.stats.Reb['#text'],
    Ast: playerObj.stats.Ast['#text'],
    Blk: playerObj.stats.Blk['#text'],
    Stl: playerObj.stats.Stl['#text'],
    Tov: playerObj.stats.Tov['#text'],
  }
};

const totalPointsGenerator = (player) => {
  let totalPoints = 0;
  for(let prop in player) {
    if(prop !== 'fullName' && prop !== 'number' && prop !== 'position' && prop !== 'teamAbv'){
      totalPoints += pointsConverter[prop] * player[prop];
    }  
  }
  return totalPoints;
}

const applyBonus = (player) => {
  let doubles = 0;
  for(let prop in player) {
    if(prop !== 'fullName' && prop !== 'number' && prop !== 'position' && prop !== 'teamAbv' && prop !== '3pt' && prop !== 'Tov') {
      if(player[prop] >= 10) {
        doubles++;
      }
    }
  }
  if(doubles === 2) {
    return 5
  } else if(doubles > 2) {
    return 15
  }
  return 0;
};

const sortByPoints = (playersArr) => {
  return playersArr.sort((playerA,playerB)=>{
    return playerB.totalPoints - playerA.totalPoints;
  })
};

export default {
  getPlayerInfo: pickOutPlayerInfo,
  applyBonus: applyBonus,
  totalPointsGenerator: totalPointsGenerator,
  sortByPoints: sortByPoints
};