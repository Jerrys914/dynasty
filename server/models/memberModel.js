const knex = require('../db/config.js');

const getMemberId = userId => {
  return knex('Members').where({
    userID: userId
  }).then(id => {
    return id
  })
};

const getLeagueMembers = () => {
  
};

module.exports ={
  getMemberId,
  getLeagueMembers
};