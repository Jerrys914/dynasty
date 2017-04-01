const knex = require('../db/config.js')

const getLeaguesById = id => {
  return knex('Members').select('yearID')
  .where({
    userID: id
  }).then(yearId => {
    console.log('yearId: ', yearId)
    if(yearId.length === 0){
      return ['No Leagues Yet'];
    }
    else {
      return knex('Years').select('leagueId')
      .where({
        id: yearId[yearId.length-1].yearID
      }).then(leagueId => {
        console.log('leagueIds: ', leagueId)
        return knex('Leagues').where({
          id: leagueId[leagueId.length-1].leagueId
        }).then(leagues => {
          return leagues;
        })
      });
    }
  });
};

const createNewLeague = (name, userId) => {
  return knex('Leagues').insert({name:name})
  .then(league => {
    let date = new Date();
    let year = date.getFullYear()
    console.log('year: ',year);

    return knex('Years').insert({year:year, leagueID:league[0]})
    .then(year => {
      console.log('YEAR ID: ', year);
      console.log('league ID: ', league[0]);
      return knex('Members').insert({yearID: year[0], userID: userId, isComish:true})
      .then(member => {
        console.log('Member: ', member);
      })
    })
  })
};

module.exports = {
  getLeaguesById,
  createNewLeague
}