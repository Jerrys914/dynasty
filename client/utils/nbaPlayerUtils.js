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

const sortByTotalPoints = playersArr => {
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
};
const sortBy3pt = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB['3pt'] - playerA['3pt'];
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};
const sortByPoints = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.Pts - playerA.Pts;
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};
const sortByAssists = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.Ast - playerA.Ast;
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};
const sortByRebounds = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.Reb - playerA.Reb;
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};
const sortByBlocks = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.Blk - playerA.Blk;
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};
const sortBySteals = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.Stl - playerA.Stl;
  });
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};
const sortByTurnovers = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    return playerB.Tov - playerA.Tov;
  });
  console.log('UTILS SORTED ARRAY: ', sortedArr)
  return {
    sortedBy: 'Points',
    sorted: sortedArr
  }
};

const sortBy = {
  name: sortByName,
  '3pt': sortBy3pt,
  points: sortByPoints,
  assists: sortByAssists,
  rebounds: sortByRebounds,
  blocks: sortByBlocks,
  steals: sortBySteals,
  turnovers: sortByTurnovers,
  totalPoints: sortByTotalPoints
}

export default {
  getPlayerInfo,
  applyBonus,
  totalPointsGenerator,
  sortBy
};