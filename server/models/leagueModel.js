const knex = require('../db/config.js');
const TeamModel = require('./teamModel.js');
const UserModel = require('./userModel.js');

let date = new Date();
let year = date.getFullYear()

const getLeaguesByUserId = id => {
  let result = [];
  let flag = false;
  let arr =
  result.push(knex('Members').select('yearID')
  .where({
    userID: id
  }).then(yearIds => {
    if(yearIds.length === 0){
      return [{id:'No Leagues', name: 'No Leagues Yet'}];  // to conform to format expected in container.
    }
    else {
      flag = true;
      return arr = yearIds.map(yearId => {
        return knex('Years').select('leagueId')
        .where({
          id: yearId.yearID
        }).then(leagueIds => {
          return Promise.all(leagueIds.map(leagueId => {
            return knex('Leagues').where({
              id: leagueId.leagueId
            }).then(league => {
              return league[0];
            })
          }))
        });
      });
    }
  }));  
  return Promise.all(result).then(leagues => {
    if(!flag) {
      return leagues[0]
    }
    return Promise.all(arr).then(lgs => {
      let leagues = [];
      lgs.forEach(league => {
        leagues.push(league[0]);
      })
      return leagues
    })
  })
}
const createNewLeague = (name, user) => {
  return knex('Leagues').insert({name:name})
  .then(league => {
    return knex('Years').insert({year:year, leagueID:league[0]})
    .then(year => {
      return knex('Members').insert({name: user.username, yearID: year[0], userID: user.id, isComish:true})
      .then(member => {
        TeamModel.createTeam(user.username, 'football', member[0])
        TeamModel.createTeam(user.username, 'basketball', member[0])
        TeamModel.createTeam(user.username, 'baseball', member[0])
      })
    })
  })
};

const joinLeague = (leagueId, yearId, user) => {
  return knex('Members').where({
    userID: user.id,
    yearID: yearId
  }).then(member => {
    if(member.length === 0){
      return knex('Members').insert({name: user.username, yearID: yearId, userID: user.id, isComish:false})
      .then(member => {
        TeamModel.createTeam(user.username, 'football', member[0])
        TeamModel.createTeam(user.username, 'basketball', member[0])
        TeamModel.createTeam(user.username, 'baseball', member[0])
      })    
    }
  })
}

module.exports = {
  getLeaguesById: getLeaguesByUserId,
  createNewLeague,
  joinLeague
}