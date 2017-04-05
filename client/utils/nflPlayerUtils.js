let pointsConverter = {
  passYds: .04,
  passTD: 4,
  passInt: -2,
  receptions: .5,
  recYds: .1,
  recTD: 6,
  rushYds: .1,
  rushTD: 6,
  prYds: .02,
  prTD: 6,
  '2pt': 2,
  fumbles: -2
};

const getPlayerInfo = playerObj => {
  if(playerObj.player.Position === "QB" || playerObj.player.Position === "WR" || playerObj.player.Position === "RB" || playerObj.player.Position === "TE"){
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
const sortByPassTD = playersArr => {
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
    return playerB.passTD - playerA.passTD;
  });
  return {
    sortedBy: 'passTD',
    sorted: sortedArr
  }
};
const sortByPassYds = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passYds - playerA.passYds === 0){
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
    return playerB.passYds - playerA.passYds;
  });
  return {
    sortedBy: 'passYds',
    sorted: sortedArr
  }
};
const sortByReceptions = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.receptions - playerA.receptions === 0){
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
    return playerB.receptions - playerA.receptions;
  });
  return {
    sortedBy: 'receptions',
    sorted: sortedArr
  }
};
const sortByRecYds = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.recYds - playerA.recYds === 0){
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
    return playerB.recYds - playerA.recYds;
  });
  return {
    sortedBy: 'recYds',
    sorted: sortedArr
  }
};
const sortByRecTD = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.recTD - playerA.recTD === 0){
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
    return playerB.recTD - playerA.recTD;
  });
  return {
    sortedBy: 'recTD',
    sorted: sortedArr
  }
};
const sortByRushTD = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.fumbles - playerA.fumbles === 0){
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.rushTD - playerA.rushTD;
  });
  return {
    sortedBy: 'rushTD',
    sorted: sortedArr
  }
};
const sortByRushYds = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.rushYds - playerA.rushYds === 0){
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.rushYds - playerA.rushYds;
  });
  return {
    sortedBy: 'rushYds',
    sorted: sortedArr
  }
};
const sortByInt = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.passInt - playerA.passInt === 0){
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.passInt - playerA.passInt
  });
  return {
    sortedBy: 'passInt',
    sorted: sortedArr
  }
};
const sortByFumbles = playersArr => {
  let sortedArr = playersArr.sort((playerA,playerB) => {
    if(playerB.fumbles - playerA.fumbles === 0){
      let nameA = playerA.fullName.split(' ')[1].toUpperCase();
      let nameB = playerB.fullName.split(' ')[1].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    return playerB.fumbles - playerA.fumbles;
  });
  return {
    sortedBy: 'fumbles',
    sorted: sortedArr
  }
};

const sortBy = {
  name: sortByName,
  passTD: sortByPassTD,
  passYds: sortByPassYds,
  receptions: sortByReceptions,
  recYds: sortByRecYds,
  recTD: sortByRecTD,
  rushTD: sortByRushTD,
  rushYds: sortByRushYds,
  passInt: sortByInt,
  fumbles: sortByFumbles
};

module.exports = {
  pointsConverter,
  getPlayerInfo,
  sortBy
}