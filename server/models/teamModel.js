let knex = require('../db/config.js');

const createTeam = (teamName, sport, memberId) => {
  return knex('Teams').insert({
    name: teamName + "'s " + sport + "team",
    sport: sport,
    memberID: memberId
  }).then(team => {
    return team;
  });
}

module.exports = {
  createTeam
}