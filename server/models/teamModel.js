let knex = require('../db/config.js');

const createTeam = (teamName, sport, memberId) => {
  return knex('Teams').insert({
    name: teamName + "'s " + sport + " team",
    sport: sport,
    memberID: memberId
  }).then(team => {
    return team;
  });
};

const getTeamsByMemberId = memberId => {
  return knex('Teams').where({
    memberID: memberId
  }).then(teams => {
    return teams;
  })
}

module.exports = {
  createTeam,
  getTeamsByMemberId
}