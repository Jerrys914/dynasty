const getPlayerInfo = playerObj => {
  // OBP = (Hits + Walks + Hit by Pitch) / (At Bats + Walks + Hit by Pitch + Sacrifice Flies)
  if(playerObj.player.Position === 'P') {
    return {
      fullName: playerObj.player.FirstName + ' ' + playerObj.player.LastName,
      position: playerObj.player.Position,
      teamAbv: playerObj.team.Abbreviation,
      wins: playerObj.stats.Wins['#text'],
      saves: playerObj.stats.Saves['#text'],
      k: playerObj.stats.PitcherStrikeouts['#text'],
      era: playerObj.stats.EarnedRunAvg['#text'],
      whip: playerObj.stats.WalksAndHitsPerInningPitched['#text']
    }
  }
  return {
    fullName: playerObj.player.FirstName + ' ' + playerObj.player.LastName,
    position: playerObj.player.Position,
    teamAbv: playerObj.team.Abbreviation,
    runs: playerObj.stats.Runs['#text'],
    hr: playerObj.stats.Homeruns['#text'],
    rbi: playerObj.stats.RunsBattedIn['#text'],
    sb: playerObj.stats.StolenBases['#text'],
    tb: playerObj.stats.TotalBases['#text'],
    obp: playerObj.stats.BatterOnBasePct['#text']
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
const sortByRuns = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.runs - playerA.runs;
  });
  return {
    sortedBy: 'runs',
    sorted: sortedArr
  }
};
const sortByHR = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.hr - playerA.hr;
  });
  return {
    sortedBy: 'hr',
    sorted: sortedArr
  }
};
const sortByRBI = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.rbi - playerA.rbi;
  });
  return {
    sortedBy: 'rbi',
    sorted: sortedArr
  }
};
const sortBySB = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.sb - playerA.sb;
  });
  return {
    sortedBy: 'sb',
    sorted: sortedArr
  }
};
const sortByTB = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.tb - playerA.tb;
  });
  return {
    sortedBy: 'tb',
    sorted: sortedArr
  }
};
const sortByOBP = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.obp - playerA.obp;
  });
  return {
    sortedBy: 'obp',
    sorted: sortedArr
  }
};
const sortByWins = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.wins - playerA.wins;
  });
  return {
    sortedBy: 'wins',
    sorted: sortedArr
  }
};
const sortBySaves = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.saves - playerA.saves;
  });
  return {
    sortedBy: 's',
    sorted: sortedArr
  }
};
const sortByK = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.k - playerA.k;
  });
  return {
    sortedBy: 'k',
    sorted: sortedArr
  }
};
const sortByERA = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.era - playerA.era
  });
  return {
    sortedBy: 'era',
    sorted: sortedArr
  }
};
const sortByWHIP = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passTD - playerA.passTD === 0 || playerB.passTD - playerA.passTD === 0.00){
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.whip - playerA.whip;
  });
  return {
    sortedBy: 'whip',
    sorted: sortedArr
  }
};
const sortBy = {
  runs: sortByRuns,
  hr: sortByHR,
  rbi: sortByRBI,
  sb: sortBySB,
  tb: sortByTB,
  obp: sortByOBP,
  wins: sortByWins,
  saves: sortBySaves,
  k: sortByK,
  era: sortByERA,
  whip: sortByWHIP
}

module.exports = { 
  getPlayerInfo,
  sortBy
};