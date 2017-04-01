const knex = require('../db/config.js')

const getLeaguesById = id => {
  return knex('Members').select('yearID')
  .where({
    userID: id
  }).then(yearId => {
    console.log('yearId: ', yearId)
    if(yearId.length === 0){
      console.log('yearId: ', yearId[0])
      return undefined;
    }
    else {
      return knex('Years').select('leagueId')
      .where({
        id: yearId
      }).then(leagueId => {
        return knex('Leagues').where({
          id: leagueId
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
      console.log('league ID: ', league[0]);
      return knex('Members').insert({yearID: year[0], leagueID: league[0], isComish:true})
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