const knex = require('../db/config.js')

const getCurrentYearId = (leagueId) => {
  return knex('Years').select('id')
  .where({
    leagueId:leagueId
  }).then(year=>{
    return year[year.length-1];
  })
};

module.exports = {
  getCurrentYearId
}