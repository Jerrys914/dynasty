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
      return [{id:'No Leagues',name: 'No Leagues Yet'}];  // to conform to format expected in container.
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
              console.log('LEAGUE: ', league[0])
              return league[0];
            })
          }))
        });
      });
    }
  }));
  
    console.log('Result: ', result)
    return Promise.all(result).then(leagues => {
      console.log('flag befor check:', flag)
      if(!flag) {
      console.log('LEAGUES false RESULT: ', leagues[0])
        return leagues[0]
      }
      console.log('LEAGUES true RESULT: ', arr)
      return Promise.all(arr).then(lgs => {
        console.log('lgs++++++++: ', lgs)
        let leagues = [];
        lgs.forEach(league => {
          console.log(league)
          leagues.push(league[0]);
        })
        return leagues
      })
    })
  }
const createNewLeague = (name, userId) => {
  return knex('Leagues').insert({name:name})
  .then(league => {
    console.log('year: ',year);

    return knex('Years').insert({year:year, leagueID:league[0]})
    .then(year => {
      console.log('YEAR ID: ', year);
      console.log('league ID: ', league[0]);
      return knex('Members').insert({yearID: year[0], userID: userId, isComish:true})
      .then(member => {
        console.log('Member: ', member);
        console.log('USERNAME: ',UserModel.getUserById(userId));
        TeamModel.createTeam()
      })
    })
  })
};

module.exports = {
  getLeaguesById: getLeaguesByUserId,
  createNewLeague
}