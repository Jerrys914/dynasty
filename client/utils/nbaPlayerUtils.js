let pointsConverter = {
  '3pt': 1,
  Pts: .5,
  Reb: 1,
  Ast: 1,
  Blk: 2,
  Stl: 2,
  Tov: -1
};

const getPlayerInfo = playerObj => {
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

const totalPointsGenerator = player => {
  let totalPoints = 0;
  for(let prop in player) {
    if(prop !== 'fullName' && prop !== 'number' && prop !== 'position' && prop !== 'teamAbv'){
      totalPoints += pointsConverter[prop] * player[prop];
    }  
  }
  return totalPoints;
}

const applyBonus = player => {
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

const sortByPoints = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.totalPoints - playerA.totalPoints;
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};

const sortByName = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    let nameA = playerA.fullName.split(' ')[1].toUpperCase(); // ignore upper and lowercase
    let nameB = playerB.fullName.split(' ')[1].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return {
    sortedBy: 'Name',
    sorted: sortedArr
  }
}

export default {
  getPlayerInfo,
  applyBonus,
  totalPointsGenerator,
  sortByPoints,
  sortByName
};